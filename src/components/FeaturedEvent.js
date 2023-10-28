import React from 'react';
import dummy from '../assets/dummy.png'; // Replace with the path to your hero image
import { useNavigate } from 'react-router-dom';


const FeaturedEvent = () => {
    const navigate = useNavigate();

    return (
        <div className="flex w-2/3 flex-col items-center mt-8 bg-gray-200 p-4 rounded-lg">
            <img src="/src/assets/dummy.png" alt="Featured Event" className="w-full h-60 rounded-lg object-cover" />
            <div className="mt-4 text-center text-black">
                <h1 className="text-2xl font-bold">Featured Event</h1>
                <h2 className="text-2xl font-bold">((Event Name))</h2>
                <p className="text-lg mt-2">Event details, date, location, etc.</p>
            </div>
            <div className="mt-4 self-end">
                <button className="bg-blue-400 text-white px-4 py-2 rounded-lg" onClick={() => navigate('/event')}>
                    Go to Event
                </button>
            </div>
        </div>
    );
};

export default FeaturedEvent;
