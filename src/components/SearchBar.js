import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const handleSearch = async () => {
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
        <div className="flex justify-center mt-16">
            <input
                type="text"
                placeholder="Search for events, artists, sports..."
                className="w-2/4 p-2 rounded-lg text-center text-black"
                value={searchQuery}
                onChange={(e) =>setSearchQuery(e.target.value)}
            />
            <button
                className="ml-2 p-2 rounded-lg bg-blue-400 text-white"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;
