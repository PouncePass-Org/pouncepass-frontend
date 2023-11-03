import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';

const App = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Function to fetch events from the backend
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/events/events/'); // Adjust the URL to where your backend serves the events
                const data = await response.json();

                if (response.ok) {
                    setEvents(data); // Update the events state with the fetched data
                } else {
                    // Handle any errors if the response was not ok
                    console.error('Error fetching events:', data);
                }
            } catch (error) {
                // Handle any errors that occurred during the fetch call
                console.error('There was a problem fetching events:', error);
            }
        };

        fetchEvents();
    }, []); // The empty array as a second argument ensures the effect runs only once on mount

    return (
        <div>
            {events.length > 0 ? (
                events.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))
            ) : (
                <p>No events available.</p>
            )}
        </div>
    );
};

export default App;
