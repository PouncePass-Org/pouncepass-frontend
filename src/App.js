import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';  // Make sure the path is correct
import Login from './pages/Login';  // Make sure the path is correct
import Dashboard from './pages/Dashboard';  // Make sure the path is correct
import SearchResults from './pages/SearchResults';
import EventDetail from './pages/EventDetail';
import Confirmation from "./pages/Confirmation";  // Make sure the path is correct
import RegisterAdmin from "./pages/RegisterAdmin";
import AdminDashboard from "./pages/AdminDashboard";
import { AuthProvider } from './components/AuthContext';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/register/admin" element={<RegisterAdmin />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/adminDashboard" element={<AdminDashboard />} />
                    <Route path="/event/:id" element={<EventDetail />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/confirmation" element={<Confirmation />} />
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/search-results" element={<SearchResults />} />

                    {/* Add other Routes here as needed */}
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
