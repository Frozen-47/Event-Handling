import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [typingText, setTypingText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // ROTATING TEXT DATA
  const dataText = ["Showcase Your Skills", "Win Exciting Prizes", "Connect with Peers", "Master New Tech"];

  // 1. COUNTDOWN LOGIC
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    // TARGET DATE: February 11, 2026
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

  // 2. TYPEWRITER LOGIC
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
        setTimeout(() => setIsDeleting(true), 1500); // Pause at end
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
      {/* 3. ANIMATED GRID OVERLAY */}
      <div className="hero-grid-overlay"></div>

      {/* BCAS Logo - Top Left */}
      <a href="https://www.bcas.ac.in/index.php" target="_blank" rel="noopener noreferrer" className="logo-corner logo-left">
        <img src="/bcas.png" alt="College Logo" />
      </a>

      {/* FACE Prep Logo - Top Right */}
      <a href="https://faceprepcampus.com/" target="_blank" rel="noopener noreferrer" className="logo-corner logo-right" style={{ height: '55px', top: '35px' }}>
        <img src="https://faceprepcampus.com/wp-content/uploads/2024/11/faceprepcampus-logo.svg" alt="FACE Prep Campus" />
      </a>

      <div className="hero-content">
        <div className="badge-container">
          <span className="event-badge">🚀 Intra Campus Event 2026</span>
        </div>
        
        <h1>FACE PREP CAMPUS</h1>
        <p>Bharathidasan College of Arts and Science (Autonomous)</p>
        
        {/* Dynamic Typing Text */}
        <div className="typing-container">
          <span className="typing-text">{typingText}</span>
          <span className="cursor">|</span>
        </div>

        {/* Countdown Timer */}
        <div className="countdown-container">
          <div className="time-box">
            <span className="time-value">{timeLeft.days || '0'}</span>
            <span className="time-label">Days</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.hours || '0'}</span>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.minutes || '0'}</span>
            <span className="time-label">Mins</span>
          </div>
          <div className="time-box">
            <span className="time-value">{timeLeft.seconds || '0'}</span>
            <span className="time-label">Secs</span>
          </div>
        </div>

        <p style={{ fontSize: '1.1rem', margin: '20px 0', opacity: 0.8, color: '#e0e0e0' }}>
          <i className="fas fa-calendar-alt"></i> 11th February 2026
        </p>
        
        <a href="#events-section" className="cta">
          Explore Events <i className="fas fa-arrow-down" style={{ marginLeft: '8px' }}></i>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;