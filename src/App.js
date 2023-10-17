import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';  // Make sure the path is correct
import Login from './pages/Login';  // Make sure the path is correct

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                {/* Add other Routes here as needed */}
            </Routes>
        </Router>
    );
}

export default App;
