import React from 'react';
import { useNavigate } from "react-router-dom";

const events = [
    {
        id: 1,
        name: 'Charleston Literary Festival',
        date: 'December 12, 2023',
        time: '12:00 pm',
        location: 'Johnson Hall Auditorium',
    },
    {
        id: 2,
        name: 'CofC Cougars Basketball Game',
        date: 'December 22, 2023',
        time: '7:00 pm',
        location: 'TD Arena',
    },
    {
        id: 3,
        name: 'New Year Gala Concert',
        date: 'January 5, 2024',
        time: '8:00 pm',
        location: 'Sottile Theatre',
    },
    {
        id: 4,
        name: 'Student Art Exhibition',
        date: 'January 20, 2024',
        time: '6:00 pm',
        location: 'Simons Center for the Arts',
    },
    {
        id: 5,
        name: 'CofC Research Symposium',
        date: 'January 27, 2024',
        time: '10:00 am',
        location: 'Stern Center Ballroom',
    }
];

const UpcomingEvents = () => {
    const navigate = useNavigate();
    return (
        <div className="w-1/3 p-4 bg-gray-500 rounded-lg">
            <div className="bg-white px-36 rounded"> {/* Container for the heading with white background */}
                <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
            </div>
            <ul>
                {events.map((event) => (
                    <li key={event.id} className="mb-4 p-2 bg-gray-200 rounded text-black" onClick={() => navigate('/event')}>
                        <div className="flex flex-col">
                            <h3 className="text-2xl text-bold">{event.name}</h3>
                            <div className="flex flex-col text-white p-2 bg-black rounded-lg">
                                <p>Date: {event.date}</p>
                                <p>Time: {event.time}</p>
                                <p>Location: {event.location}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingEvents;
