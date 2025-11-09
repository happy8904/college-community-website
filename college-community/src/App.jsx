// src/App.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import CSS files
import './App.css';
import './components/Navbar.css';
import './components/Footer.css';
import './components/FeatureCard/FeatureCard.css'; 

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        {/* Outlet renders the current route's component (e.g., Home) */}
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default App;