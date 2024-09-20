import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Keep this path as is


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">Vasl Fashion</Link>
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-item" onClick={toggleNavbar}>Home</Link>
          <Link to="/products" className="nav-item" onClick={toggleNavbar}>Product</Link>
          <Link to="/contact" className="nav-item" onClick={toggleNavbar}>Contact</Link>
          <Link to="/login" className="nav-item" onClick={toggleNavbar}>Login</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span className="toggle-icon">&#9776;</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
