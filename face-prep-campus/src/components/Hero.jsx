import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [typingText, setTypingText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const dataText = ["Showcase Your Skills", "Win Exciting Prizes", "Connect with Peers", "Master New Tech"];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date("2026-02-11T09:00:00") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % dataText.length;
      const fullText = dataText[i];
      setTypingText(isDeleting 
        ? fullText.substring(0, typingText.length - 1) 
        : fullText.substring(0, typingText.length + 1)
      );
      setTypingSpeed(isDeleting ? 30 : 150);
      if (!isDeleting && typingText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typingText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typingText, isDeleting, loopNum]);

  return (
    <section className="hero">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-video-bg"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay"></div>
      <div className="hero-grid-overlay"></div>

      {/* Logos */}
      <a 
        href="https://www.bcas.ac.in/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="logo-corner logo-left" 
        style={{ height: '55px', width: 'auto' }} 
      >
        <img src="/bcas.png" alt="College Logo" style={{ height: '100%', width: 'auto' }} />
      </a>

      <a 
        href="https://faceprepcampus.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="logo-corner logo-right" 
        style={{ height: '55px', top: '35px' }}
      >
        <img src="https://faceprepcampus.com/wp-content/uploads/2024/11/faceprepcampus-logo.svg" alt="FACE Prep" />
      </a>

      {/* --- NEW SPLIT LAYOUT CONTAINER --- */}
      <div className="hero-main-layout">
        
        {/* Left Column: 30% for Image */}
        <div className="hero-left-col">
           {/* Replace '/faceprep.png' with your desired side image */}
           <img src="/faceprep.png" alt="Event Feature" className="hero-feature-img" /> 
        </div>

        {/* Right Column: 70% for Content */}
        <div className="hero-right-col">
          <div className="hero-content">
            <div className="badge-container">
              <span className="event-badge">🚀 Intra Campus Event 2026</span>
            </div>
            
            <h1>FACE PREP CAMPUS</h1>
            <p>Bharathidasan College of Arts and Science (Autonomous)</p>
            
            <div className="typing-container">
              <span className="typing-text">{typingText}</span>
              <span className="cursor">|</span>
            </div>

            <div className="countdown-container">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="time-box">
                  <span className="time-value">{value || '0'}</span>
                  <span className="time-label">{label}</span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '1.1rem', margin: '20px 0', opacity: 0.9 }}>
              <i className="fas fa-calendar-alt"></i> 11th February 2026
            </p>
            
            <a href="#events-section" className="cta">
              Explore Events <i className="fas fa-arrow-down" style={{ marginLeft: '8px' }}></i>
            </a>
          </div>
        </div>

      </div>

      <div className="scroll-indicator">
        <div className="mouse"><div className="wheel"></div></div>
      </div>
    </section>
  );
};

export default Hero;