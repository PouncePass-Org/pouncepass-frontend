// AuthContext.js

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('access_token'));

    const login = (token) => {
        localStorage.setItem('access_token', token);
        setAuthToken(token);
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        setAuthToken(null);
    };

    const isAuthenticated = () => {
        return authToken !== null;
    };

    return (
        <AuthContext.Provider value={{ authToken, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};
