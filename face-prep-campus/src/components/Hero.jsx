import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      {/* Logos positioned absolutely at corners */}
      <img src="/bcas.png" alt="College Logo" className="logo-corner logo-left" />
      
      {/* UPDATED: New FACE Prep Campus SVG Logo */}
      <img 
        src="https://faceprepcampus.com/wp-content/uploads/2024/11/faceprepcampus-logo.svg" 
        alt="FACE Prep Campus" 
        className="logo-corner logo-right" 
      />

      <div className="hero-content">
        <h1>FACE PREP CAMPUS</h1>
        <p>Bharathidasan College of Arts and Science (Autonomous)</p>
        <p style={{ fontSize: '1.1rem', margin: '10px 0' }}>
          20th March 2026 | Intra Campus Event
        </p>
        
        <a href="#events-section" className="cta">Explore Events</a>
      </div>
    </section>
  );
};

export default Hero;