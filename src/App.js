import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';  // Make sure the path is correct
import Login from './pages/Login';  // Make sure the path is correct
import Dashboard from './pages/Dashboard';  // Make sure the path is correct
import EventDetail from './pages/EventDetail';
import Confirmation from "./pages/Confirmation";  // Make sure the path is correct
import Events from "./pages/Events";
import RegisterAdmin from "./pages/RegisterAdmin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/register/admin" element={<RegisterAdmin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
                <Route path="/adminDashboard" element={<AdminDashboard />} />
                <Route path="/event/:id" element={<EventDetail />} />
                <Route path="/events" element={<Events />} />
                <Route path="/confirmation" element={<Confirmation />} />


                {/* Add other Routes here as needed */}
            </Routes>
        </Router>
    );
}

export default App;
