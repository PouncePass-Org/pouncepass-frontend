// AdminEvents.js
import React, { useState, useEffect } from 'react';

function AdminEvents() {
    const [events, setEvents] = useState([]);
    const [newEventData, setNewEventData] = useState({
        name: '',
        venue: '',
        date_time: '',
        ticket_price: '',
        total_tickets: '',
        available_tickets: ''
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const token = localStorage.getItem('access_token');  // Assuming the token is stored in local storage
        const response = await fetch('http://127.0.0.1:8000/events/all_events/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        setEvents(data);
    };

    const handleCreateEvent = async () => {
        const response = await fetch('http://127.0.0.1:8000/events/create_event/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`  // Authorization header
            },
            body: JSON.stringify(newEventData),
        });
        if (response.ok) fetchEvents();  // Refetch events on successful creation
    };

    const handleDeleteEvent = async (event_id) => {
        const response = await fetch(`http://127.0.0.1:8000/events/delete/${event_id}/`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`  // Authorization header
            },
        });
        if (response.ok) fetchEvents();  // Refetch events on successful deletion
    };

    return (
        <div className="bg-amber-400 p-4 rounded shadow-lg">
            <div className="mb-4">
                <h2 className="text-2xl font-bold">Events</h2>
                <div className="bg-white p-2 rounded shadow">
                    {events.map(event => (
                        <div key={event.event_id} className="flex justify-between items-center p-2 border-b">
                            {event.name}
                            <button onClick={() => handleDeleteEvent(event.event_id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold">Create Event</h2>
                <div className="flex flex-col space-y-2">
                    <input type="text" value={newEventData.name} onChange={(e) => setNewEventData({ ...newEventData, name: e.target.value })} placeholder="Event Name" className="border p-2 rounded" />
                    {/*... assume you have a way to select venue*/}
                    <input type="datetime-local" value={newEventData.date_time} onChange={(e) => setNewEventData({ ...newEventData, date_time: e.target.value })} className="border p-2 rounded" />
                    <input type="number" value={newEventData.ticket_price} onChange={(e) => setNewEventData({ ...newEventData, ticket_price: e.target.value })} placeholder="Base GA Ticket Price" className="border p-2 rounded" />
                    <input type="number" value={newEventData.total_tickets} onChange={(e) => setNewEventData({ ...newEventData, total_tickets: e.target.value })} placeholder="Total Tickets" className="border p-2 rounded" />
                    <input type="number" value={newEventData.available_tickets} onChange={(e) => setNewEventData({ ...newEventData, available_tickets: e.target.value })} placeholder="Available Tickets" className="border p-2 rounded" />
                    <button onClick={handleCreateEvent} className="bg-green-500 text-white px-4 py-2 rounded">Create</button>
                </div>
            </div>
        </div>
    );

}

export default AdminEvents;
