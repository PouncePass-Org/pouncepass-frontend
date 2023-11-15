import React from 'react';
import { useLocation } from 'react-router-dom';

// Utility function to format phone number
const formatPhoneNumber = (phoneNumber) => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phoneNumber;
};

const ConfirmationComponent = () => {
    const location = useLocation();
    const { details } = location.state || { eventDetails: {}, ticketDetails: {}, userDetails: {}, orderDetails: {} };

    // Extract the event, ticket, user, and order details
    const { eventDetails, ticketDetails, userDetails, orderDetails } = details;

    // Format the phone number
    const formattedPhone = userDetails?.phone ? formatPhoneNumber(userDetails.phone) : '';

    //console log
    console.log('eventDetails', eventDetails);
    console.log('ticketDetails', ticketDetails);
    console.log('userDetails', userDetails);
    console.log('orderDetails', orderDetails);


    return (
        <div className="justify-center p-4 pt-16">
            <h1 className="text-2xl font-bold mb-4">Payment Confirmation</h1>
            <p>Thank you for your purchase!</p>
            <p>We have sent your ticket(s) to {userDetails?.email} and {formattedPhone}.</p>
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-2">Event Details:</h2>
                <p>Name: {eventDetails?.name}</p>
                <p>Date: {eventDetails?.date}</p>
                <p>Time: {eventDetails?.time}</p>
                {/* Display the venue details individually */}
                <p>Venue Name: {eventDetails?.venue?.name}</p>
                <p>Venue Location: {eventDetails?.venue?.location}</p>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">Order Details:</h2>
                <p>Order ID: {orderDetails?.order_id}</p>
                <p>Number of Tickets: {orderDetails?.number_of_tickets}</p>
                <p>Total Amount: ${orderDetails?.total_amount}</p>
            </div>
            {/*<div className="mt-4">*/}
            {/*    <h2 className="text-xl font-bold mb-2">Ticket Details:</h2>*/}
            {/*    /!* Ensure seat is not an object before rendering *!/*/}
            {/*    <p>Seat: {typeof ticketDetails?.seat === 'object' ? 'Seat information not available' : ticketDetails?.seat}</p>*/}
            {/*    <p>Price: {ticketDetails?.price}</p>*/}
            {/*</div>*/}
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">Your QR Code(s):</h2>
                <img src='/src/assets/sample-QR.png' alt="QR Code" className="w-32 h-32"/>
            </div>
        </div>
    );
};

export default ConfirmationComponent;
