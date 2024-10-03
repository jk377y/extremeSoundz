import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Booking from './pages/Booking';
import Login from './pages/Login.jsx';
import Admin from './pages/Admin';
import PageNotFound from './pages/PageNotFound.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="services" element={<Services />} />
                <Route path="login" element={<Login />} />
                <Route path="booking" element={<Booking />} />
                <Route path="admin" element={<Admin />} />
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    </Router>
);
