import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Services from './pages/Services';
import Staff from './pages/Staff';
import Admin from './pages/Admin';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="booking" element={<Booking />} />
            <Route path="services" element={<Services />} />
            <Route path="staff" element={<Staff />} />
            <Route path="admin" element={<Admin />} />
        </Routes>
    </Router>
);
