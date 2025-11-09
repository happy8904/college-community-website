// src/components/FeatureCard/FeatureCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, description, linkTo }) => {
  return (
    <Link to={linkTo} className="feature-card transition-300">
      <div className="card-icon">{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
      <span className="card-cta">Explore →</span>
    </Link>
  );
};

export default FeatureCard;