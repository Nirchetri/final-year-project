// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="file.png" alt="Link Kiwi Logo" /> {/* Adjust path if necessary */}
          </Link>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/solutions" onClick={() => setIsOpen(false)}>Solutions</Link></li>
            <li><Link to="/industries" onClick={() => setIsOpen(false)}>Industries</Link></li>
            <li><Link to="/contact-us" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
          </ul>
        </div>
        <div className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={toggleNavbar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
