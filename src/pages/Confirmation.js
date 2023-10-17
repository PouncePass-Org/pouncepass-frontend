import React from 'react';
const Confirmation = () => {
    // Sample event and user data
    const eventDetails = {
        name: 'Sample Event',
        date: 'January 1, 2024',
        time: '7:00 PM',
        venue: 'Sample Venue',
    };

    const ticketDetails = {
        seat: 'General Admission',
        price: '$50.00',
        quantity: 1,

    };

    const userDetails = {
        name: 'John Doe',
        email: 'john.doe@example.com',
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Payment Confirmation</h1>
            <p>Thank you for your purchase, {userDetails.name}.</p>
            <p>We have sent your ticket(s) to {userDetails.email}.</p>
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-2">Event Details:</h2>
                <p>Name: {eventDetails.name}</p>
                <p>Date: {eventDetails.date}</p>
                <p>Time: {eventDetails.time}</p>
                <p>Venue: {eventDetails.venue}</p>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">Ticket Details:</h2>
                <p>Seat: {ticketDetails.seat}</p>
                <p>Price: {ticketDetails.price}</p>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">Your QR Code:</h2>
                <img src='/src/assets/sample-QR.png' alt="QR Code" className="w-32 h-32"/>
            </div>
        </div>
    );
};

export default Confirmation;
