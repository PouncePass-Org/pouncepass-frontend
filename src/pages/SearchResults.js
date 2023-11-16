import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import EventCard from '../components/EventCard';

const SearchResultsPage = () => {
    const [searchParams] = useSearchParams();
    const [events, setEvents] = useState([]);
    const searchQuery = searchParams.get('q');

    useEffect(() => {
        const fetchEvents = async () => {
            if (searchQuery) {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/events/search/?q=${encodeURIComponent(searchQuery)}`);
                    const data = await response.json();
                    setEvents(data); // Adjust this line based on the actual structure of your response
                } catch (error) {
                    console.error('Error fetching search results', error);
                }
            }
        };
        fetchEvents();
    }, [searchQuery]);

    return (
        <div className="bg-amber-950">
            <Header />
            <SearchBar />

            <div>
                {events.length > 0 ? (
                    events?.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))
                ) : (
                    <p>No events found for "{searchQuery}".</p>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;
