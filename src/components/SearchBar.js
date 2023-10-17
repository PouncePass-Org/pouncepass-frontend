import React from 'react';

const SearchBar = () => {
    return (
        <div className="flex justify-center mt-16">
            <input
                type="text"
                placeholder="Search events, artists, teams..."
                className="w-2/4 p-2 rounded-lg text-center text-black"
            />
            <button className="ml-2 p-2 rounded-lg bg-blue-400 text-white">Search</button>
        </div>
    );
};

export default SearchBar;
