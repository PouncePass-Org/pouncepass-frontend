import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        try {
            const response = await fetch(`http://127.0.0.1:8000/events/search/?q=${encodeURIComponent(searchQuery)}`);
            const data = await response.json();
            console.log(data);
            navigate(`/search-results?q=${encodeURIComponent(searchQuery)}`);
        } catch (error) {
            console.error('Error fetching search results', error);
        }
    };

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSearch} className="flex justify-center pt-20 w-full">
                <input
                    type="text"
                    placeholder="Search for events, artists, sports..."
                    className="w-1/3 p-3 rounded-lg text-center text-lg text-black"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    type="submit"
                    className="ml-2 p-2 rounded-lg bg-blue-400 text-white"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
