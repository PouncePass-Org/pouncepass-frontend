import React from 'react';
import EventCard from './EventCard';

const events = [
    {
        title: "Concert",
        date: "2023-11-15",
        time: "20:00",
        venue: "Stadium",
        category: "Concert",
        imageUrl: "https://example.com/image1.jpg",
        ticketsAvailable: true,
    },
    {
        title: "Art Expo",
        date: "2023-12-01",
        time: "10:00",
        venue: "City Gallery",
        category: "Art",
        imageUrl: "https://example.com/image2.jpg",
        ticketsAvailable: true,
    },
    {
        title: "Tech Conference",
        date: "2024-01-20",
        time: "09:00",
        venue: "Convention Center",
        category: "More",
        imageUrl: "https://example.com/image3.jpg",
        ticketsAvailable: false,
    },
    {
        title: "Food Festival",
        date: "2023-12-05",
        time: "12:00",
        venue: "Public Square",
        category: "More",
        imageUrl: "https://example.com/image4.jpg",
        ticketsAvailable: true,
    },
    {
        title: "Comedy Show",
        date: "2023-11-30",
        time: "19:00",
        venue: "Local Theatre",
        category: "Arts",
        imageUrl: "https://example.com/image5.jpg",
        ticketsAvailable: false,
    },
    {
        title: "Movie Premiere",
        date: "2023-11-20",
        time: "18:00",
        venue: "Majestic Cinema",
        category: "Arts",
        imageUrl: "https://example.com/image6.jpg",
        ticketsAvailable: true,
    },
    {
        title: "Charity Run",
        date: "2024-02-15",
        time: "08:00",
        venue: "City Park",
        category: "Sports",
        imageUrl: "https://example.com/image7.jpg",
        ticketsAvailable: true,
    },
    {
        title: "Wine Tasting",
        date: "2023-11-25",
        time: "17:00",
        venue: "Winery",
        category: "More",
        imageUrl: "https://example.com/image8.jpg",
        ticketsAvailable: false,
    },
    {
        title: "Fashion Show",
        date: "2023-12-10",
        time: "21:00",
        venue: "Hotel Ballroom",
        category: "Arts",
        imageUrl: "https://example.com/image9.jpg",
        ticketsAvailable: true,
    },
    {
        title: "Book Fair",
        date: "2023-11-22",
        time: "11:00",
        venue: "Library",
        category: "Arts",
        imageUrl: "https://example.com/image10.jpg",
        ticketsAvailable: true,
    }
];

const App = () => {
    return (
        <div>
            {events.map((event, index) => (
                <EventCard key={index} event={event} />
            ))}
        </div>
    );
};

export default App;
