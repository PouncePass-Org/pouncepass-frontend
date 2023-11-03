import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [scrolling, setScrolling] = useState(false);
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            fetch('http://127.0.0.1:8000/users/user/', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(userData => {
                    setUserEmail(userData.email);
                })
                .catch(error => {
                    console.error('Failed to fetch user:', error);
                });
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        setUserEmail('');
        navigate('/');
    };

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolling ? 'bg-white text-black' : 'bg-black text-white'}`}>
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
                    {userEmail ? (
                        <>
                            <span>Hello, {userEmail}</span>
                            <button onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        <>
                            <button onClick={() => navigate('/login')}>Sign In</button>
                            <div>/</div>
                            <button onClick={() => navigate('/register')}>Register</button>
                        </>
                    )}
                    <button>Help</button>
                </div>
            </div>
        </header>
    );
};
export default Header;






