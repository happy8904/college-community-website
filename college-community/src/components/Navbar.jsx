// src/components/Navbar.jsx

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IoMenu, IoClose, IoHome, IoSpeedometer, IoChatbubbles, IoBook, IoCalendar } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <IoHome /> },
    { name: 'Dashboard', path: '/dashboard', icon: <IoSpeedometer /> },
    { name: 'Forum', path: '/forum', icon: <IoChatbubbles /> },
    { name: 'Chatbot', path: '/chatbot', icon: <IoChatbubbles /> },
    { name: 'Predictor', path: '/predictor', icon: <IoSpeedometer /> },
    { name: 'Notes', path: '/notes', icon: <IoBook /> },
    { name: 'Events', path: '/events', icon: <IoCalendar /> },
  ];

  return (
    <header className="navbar transition-300">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          College Community
        </Link>
        
        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="navbar-link transition-300"
              onClick={closeMenu}
            >
              <span className="navbar-link-icon">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}

          {/* Mobile-only Auth Buttons */}
          <div className="navbar-auth-mobile">
            <Link to="/login" className="btn btn-login transition-300" onClick={closeMenu}>Login</Link>
            <Link to="/signup" className="btn btn-signup transition-300" onClick={closeMenu}>Sign Up</Link>
          </div>
        </nav>

        <div className="navbar-auth-desktop">
          <Link to="/login" className="btn btn-login transition-300">Login</Link>
          <Link to="/signup" className="btn btn-signup transition-300">Sign Up</Link>
        </div>

        <button className="menu-toggle transition-300" onClick={toggleMenu}>
          {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;