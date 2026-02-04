import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>FACE PREP CAMPUS</h1>
        <p>Bharathidasan College of Arts and Science (Autonomous)</p>
        <p style={{ fontSize: '1.1rem', margin: '10px 0' }}>
          20th March 2026 | Intra Campus Event
        </p>
        <div className="logo-container">
          {/* Ensure images are in the public folder */}
          <img src="/bcas.png" alt="College Logo" className="college-logo" style={{ backgroundColor: 'white' }} />
          <img src="/fpc.png" alt="FACE Prep Campus" className="face-logo" />
        </div>
        <a href="#events-section" className="cta">Explore Events</a>
      </div>
    </section>
  );
};

export default Hero;