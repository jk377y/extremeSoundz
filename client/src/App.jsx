import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
        <header>
            <h1>Extreme Soundz</h1>
            <nav>
                <a href="/">Home</a>&nbsp;|&nbsp;
                <a href="/products">Products</a>&nbsp;|&nbsp; 
                <a href="/services">Services</a>&nbsp;|&nbsp;
                <a href="/login">Login</a>&nbsp;|&nbsp; 
                <a href="/booking">Booking</a>&nbsp;|&nbsp; 
                <a href="/admin">Admin</a>&nbsp;|&nbsp; 
                <a href="404_Page_Not_Found">PageNotFound</a> {/*for testing bad routes*/}
            </nav>
        </header>

        <main><Outlet /></main> {/* Outlet is a placeholder for nested routes, see main.jsx */}
    </div>
  )
}

export default App;