import React from 'react';
import basketball from '../assets/baseketball.jpg'; // Correctly imported image
import { useNavigate } from 'react-router-dom';

const FeaturedEvent = () => {
    const navigate = useNavigate();

    return (
        <div className="flex w-2/3 flex-col h-1/2 items-center bg-gray-200 p-4 rounded-lg">
            {/* Use the imported image variable here */}
            <h1 className="text-2xl font-bold py-2">Featured Event</h1>
            <img src={basketball} alt="Featured Event" className="w-full h-60 rounded-lg object-cover" />
            <div className="mt-4 text-center text-black">

                <h2 className="text-2xl font-bold">Men's Basketball: CofC vs Rhode Island</h2>
                <p className="text-lg pt-4">When? Sunday, December 10, 2023 at 2:00 pm </p>
                <p className="text-lg pt-1">Where? TD Arena</p>
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
