import React, { useState, useEffect } from 'react';

function AdminVenues() {
    const [venues, setVenues] = useState([]);
    const [newVenueData, setNewVenueData] = useState({ name: '', location: '', capacity: '' });

    useEffect(() => {
        fetchVenues();
    }, []);

    const fetchVenues = async () => {
        const token = localStorage.getItem('access_token');  // Assuming the token is stored in local storage
        const response = await fetch('http://127.0.0.1:8000/venues/all_venues/', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        setVenues(data);
    };

    const handleCreateVenue = async () => {
        const response = await fetch('http://127.0.0.1:8000/venues/create_venue/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newVenueData),
        });
        if (response.ok) fetchVenues();  // Refetch venues on successful creation
    };

    const handleDeleteVenue = async (venue_id) => {
        const response = await fetch(`http://127.0.0.1:8000/venues/delete/${venue_id}/`, { method: 'DELETE' });
        if (response.ok) fetchVenues();  // Refetch venues on successful deletion
    };

    return (
        <div className="bg-blue-700 p-4 rounded shadow-lg">
            <div className="mb-4">
                <h2 className="text-2xl font-bold text-white">Venues</h2>
                <div className="bg-white p-2 rounded shadow">
                    {venues.map(venue => (
                        <div key={venue.venue_id} className="flex flex-col md:flex-row justify-between items-center p-2 border-b">
                            <div className="flex-1">
                                Name: {venue.name} | Location: {venue.location} | Capacity: {venue.capacity}
                            </div>
                            <button onClick={() => handleDeleteVenue(venue.venue_id)} className="bg-red-500 text-white px-2 py-1 rounded mt-2 md:mt-0">Delete</button>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-white">Create Venue</h2>
                <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2">
                    <input type="text" value={newVenueData.name} onChange={(e) => setNewVenueData({ ...newVenueData, name: e.target.value })} placeholder="Venue Name" className="border p-2 rounded" />
                    <input type="text" value={newVenueData.location} onChange={(e) => setNewVenueData({ ...newVenueData, location: e.target.value })} placeholder="Location" className="border p-2 rounded" />
                    <input type="number" value={newVenueData.capacity} onChange={(e) => setNewVenueData({ ...newVenueData, capacity: e.target.value })} placeholder="Capacity" className="border p-2 rounded" />
                    <button onClick={handleCreateVenue} className="bg-green-500 text-white px-4 py-2 rounded">Create</button>
                </div>
            </div>
        </div>
    );

}

export default AdminVenues;
