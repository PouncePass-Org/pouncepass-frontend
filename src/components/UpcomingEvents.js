import React from 'react';

const events = [
    {
        id: 1,
        name: 'Event 1',
        date: 'December 12, 2023',
    },
    {
        id: 2,
        name: 'Event 2',
        date: 'December 22, 2023',
    },
    {
        id: 3,
        name: 'Event 3',
        date: 'January 5, 2024',
    },
    {
        id: 4,
        name: 'Event 4',
        date: 'January 20, 2024',
    },
    {
        id: 5,
        name: 'Event 5',
        date: 'January 27, 2024',
    }
];

const UpcomingEvents = () => {
    return (
        <div className="w-1/3 p-4">
            <h2 className="text-xl font-bold  mb-4">Upcoming Events</h2>
            <ul>
                {events.map((event) => (
                    <li key={event.id} className="mb-4 p-2 bg-gray-200 rounded text-black">
                        <h3 className="text-lg">{event.name}</h3>
                        <p>{event.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UpcomingEvents;
