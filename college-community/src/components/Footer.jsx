// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoGithub, IoMailOutline, IoCallOutline } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <h3>College Community</h3>
          <p>Connecting students, empowering collaboration.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/" className="transition-300">Home</Link>
          <Link to="/forum" className="transition-300">Forum</Link>
          <Link to="/events" className="transition-300">Events</Link>
          <Link to="/notes" className="transition-300">Study Notes</Link>
        </div>

        <div className="footer-section">
          <h4>Connect</h4>
          <a href="mailto:support@collegecommunity.com" className="transition-300">
            <IoMailOutline /> support@collegecommunity.com
          </a>
          <a href="tel:+1234567890" className="transition-300">
            <IoCallOutline /> +1 (234) 567-890
          </a>
          <a href="https://github.com/anuragmshr2006-spec" target="_blank" rel="noopener noreferrer" className="transition-300">
            <IoLogoGithub /> GitHub Repo
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        &copy; 2025 College Community | Team 4 BRL. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;