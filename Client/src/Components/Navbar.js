import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
        <li><Link to="/weather">Weather Updates</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
