import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      {/* BCAS Logo - Top Left */}
      <a 
        href="https://www.bcas.ac.in/index.php" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="logo-corner logo-left"
      >
        <img 
          src="/bcas.png" 
          alt="College Logo" 
          style={{ height: '100%', width: 'auto' }} 
        />
      </a>

      {/* FACE Prep Logo - Top Right */}
      <a 
        href="https://faceprepcampus.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="logo-corner logo-right"
      >
        {/* Note: Ensure this src matches your file (fpc.png or the SVG URL) */}
        <img 
          src="/fpc.png" 
          alt="FACE Prep Campus" 
          style={{ height: '100%', width: 'auto' }} 
        />
      </a>

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