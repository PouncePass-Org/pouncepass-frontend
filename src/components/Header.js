import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
                scrolling ? 'bg-white text-black' : 'bg-black text-white'
            }`}
        >
            <div className="container mx-auto p-4 flex justify-between items-center">
                {/* Left side */}
                <div className="flex space-x-4">
                    <button className="font-bold" onClick={() => navigate('/')}>PouncePass</button>
                    <button>Concerts</button>
                    <button>Sports</button>
                    <button>Art & Theatre</button>
                    <button>More</button>
                </div>

                {/* Right side */}
                <div className="flex space-x-4">
                    <button onClick={() => navigate('/login')}>Sign In </button>
                    <div>/</div>
                    <button onClick={() => navigate('/register')}> Register</button>
                    <button>Help</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
