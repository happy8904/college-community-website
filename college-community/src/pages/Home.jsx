// src/pages/Home.jsx

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import { IoChatbubbles, IoBook, IoBarChart, IoCalendar, IoBulb } from 'react-icons/io5';
import './Home.css'; // New CSS file for Home

const features = [
  { icon: <IoChatbubbles />, title: 'Forum', description: 'Ask questions, share knowledge, and collaborate with peers.', linkTo: '/forum' },
  { icon: <IoBook />, title: 'Notes Summarizer', description: 'Upload and instantly summarize lecture notes or study material.', linkTo: '/notes' },
  { icon: <IoBarChart />, title: 'Performance Predictor', description: 'Get data-driven insights on your academic progress and potential.', linkTo: '/predictor' },
  { icon: <IoCalendar />, title: 'Event Recommender', description: 'Discover relevant campus events, workshops, and deadlines.', linkTo: '/events' },
];

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Fade-in animation for the Hero section
    useEffect(() => {
        setIsVisible(true);
    }, []);
    
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className={`hero-section ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-content">
          <h1>
            Your Hub for <span className="highlight-text">College Success</span>
          </h1>
          <p className="hero-subtitle">
            Connect, share, and grow with a community designed for the modern student. Seamlessly integrate tools for learning, planning, and networking.
          </p>
          <div className="hero-cta-group">
            <Link to="/signup" className="btn btn-signup btn-large transition-300">
              Get Started Free
            </Link>
            <Link to="/forum" className="btn btn-login btn-large transition-300">
              <IoBulb /> Explore Features
            </Link>
          </div>
        </div>
        <div className="hero-image-placeholder">
            {/* Replace this with an actual SVG illustration or image */}
            <img src="/vite.svg" alt="Students connecting illustration" />
        </div>
      </section>

      {/* 2. Feature Highlights Section (New Functionality) */}
      <section className="features-section">
        <h2>Key Features at Your Fingertips</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
                key={index} 
                className="feature-card-wrapper transition-300"
                style={{ transitionDelay: `${index * 0.1}s` }} // Staggered entry animation
            >
                <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    linkTo={feature.linkTo}
                />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;