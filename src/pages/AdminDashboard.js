// AdminDashboard.js
import React from 'react';
import AdminVenues from "../components/AdminVenues";
import AdminEvents from "../components/AdminEvents";
import Header from "../components/Header";

function AdminDashboard() {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <Header />
            <div className="container mx-auto p-4 pt-20 ">
                <h1 className="text-4xl text-center my-4">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded shadow">
                        <AdminEvents />
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                        <AdminVenues />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
