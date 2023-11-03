import React, {useContext, useState} from 'react';
import art from '../assets/art.png';
import sports from '../assets/sports.png';
import more from '../assets/more.png';
import concert from '../assets/concert.png';
import EventDetailsModal from './EventDetailsModal';
import TicketPurchaseModal from "./TicketPurchaseModal";
import { AuthContext } from './AuthContext';
import {useNavigate} from "react-router-dom";

// A mapping of the category keys to their images
const categoryImages = {
    art: art,
    sports: sports,
    more: more,
    concerts: concert,
};

const EventCard = ({ event }) => {
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isPurchaseModalOpen, setPurchaseModalOpen] = useState(false);
    const openDetailsModal = () => setIsDetailsModalOpen(true);
    const closeDetailsModal = () => setIsDetailsModalOpen(false);
    const closePurchaseModal = () => setPurchaseModalOpen(false);

    const openPurchaseModal = () => {
        if (isAuthenticated()) {
            setPurchaseModalOpen(true);
        } else {
            // Redirect to login page or show a message that the user must be logged in
            navigate('/login'); // Redirecting to login
        }
    };

    const getCategoryImage = (category) => {
        return categoryImages[category.toLowerCase()] || null;
    };

    // Format the date and time
    const eventDate = new Date(event.date_time).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const eventTime = new Date(event.date_time).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });

    // Get category image
    const categoryImage = getCategoryImage(event.category);

    return (
        <div className="w-4/5 mx-auto my-4 p-4 rounded shadow-lg flex text-black flex-col md:flex-row items-center bg-white">
            <div className="w-full md:w-1/4">
                <img src={categoryImage || 'placeholder.png'} alt={event.name} className="w-full h-48 object-cover rounded" />
            </div>
            <div className="w-full md:w-3/5 p-4">
                <h2 className="text-2xl font-semibold">{event.name}</h2>
                <p><strong>Date:</strong> {eventDate}</p>
                <p><strong>Time:</strong> {eventTime}</p>
                <p><strong>Venue:</strong> {event.venue.name}</p>
                <p><strong>Category:</strong> {event.category}</p>
                {/*<p><strong>Tickets Available:</strong> {event.available_tickets}</p>*/}
                <p><strong>Price:</strong> ${event.ticket_price}</p>
            </div>
            <div className="w-full md:w-1/5 flex flex-col justify-end space-y-2">
                <button
                    className="px-4 py-2 rounded bg-gray-500 text-white"
                    onClick={openDetailsModal}
                >
                    Details
                </button>
                <button
                    className={`px-4 py-2 rounded ${event.available_tickets > 0 ? 'bg-blue-500' : 'bg-red-500'} text-white`}
                    onClick={openPurchaseModal}
                >
                    {event.available_tickets > 0 ? 'Buy Ticket' : 'Sold Out'}
                </button>
            </div>
            {/* Modals */}
            <EventDetailsModal isOpen={isDetailsModalOpen} onClose={closeDetailsModal} event={event} />
            <TicketPurchaseModal event={event} isOpen={isPurchaseModalOpen} onClose={closePurchaseModal} event={event} />
        </div>
    );
};

export default EventCard;
