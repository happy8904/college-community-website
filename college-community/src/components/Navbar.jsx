import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">College Community</Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/forum">Forum</Link></li>
        <li><Link to="/chatbot">Chatbot</Link></li>
        <li><Link to="/predictor">Predictor</Link></li>
        <li><Link to="/notes">Notes</Link></li>
        <li><Link to="/events">Events</Link></li> {/* CRUD EVENTS PAGE */}
      </ul>

      <div className="navbar-auth">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
