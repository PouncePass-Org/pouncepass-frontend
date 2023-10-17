import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';  // Make sure the path is correct
import Login from './pages/Login';  // Make sure the path is correct
import Dashboard from './pages/Dashboard';  // Make sure the path is correct
import EventDetail from './pages/EventDetail';
import Confirmation from "./pages/Confirmation";  // Make sure the path is correct


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/event" element={<EventDetail />} />
                <Route path="/confirmation" element={<Confirmation />} />

                {/* Add other Routes here as needed */}
            </Routes>
        </Router>
    );
}

export default App;
