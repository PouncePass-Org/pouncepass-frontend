import React from 'react';
import art from '../assets/art.png';
import sports from '../assets/sports.png';
import more from '../assets/more.png';
import concert from '../assets/concert.png';

const EventCard = ({ event }) => {
    const getCategoryImage = (category) => {
        switch (category) {
            case 'Art':
                return art;
            case 'Sports':
                return sports;
            case 'More':
                return more;
            case 'Concert':
                return concert;
            default:
                return null;
        }
    };

    return (
        <div className="w-4/5 mx-auto my-4 p-4 rounded shadow-lg flex text-black flex-col md:flex-row items-center bg-white">
            <div className="w-full md:w-1/4">
                <img src={event.imageUrl} alt={event.title} className="w-full h-32 object-cover rounded" />
            </div>
            <div className="w-full md:w-3/5 p-4">
                <h2 className="text-2xl font-semibold">{event.title}</h2>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
                <p><strong>Venue:</strong> {event.venue}</p>
                <div className="flex items-center">
                    <img src={getCategoryImage(event.category)} alt={event.category} className="w-8 h-8 mr-2" />
                    <p><strong>Category:</strong> {event.category}</p>
                </div>
            </div>
            <div className="w-full md:w-1/5 flex justify-end">
                <button className={`px-4 py-2 rounded ${event.ticketsAvailable ? 'bg-blue-500' : 'bg-red-500'} text-white`}>
                    {event.ticketsAvailable ? 'Buy Ticket' : 'Sold Out'}
                </button>
            </div>
        </div>
    );
};

export default EventCard;
