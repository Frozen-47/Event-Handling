import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* Brand Section */}
          <div className="footer-brand">
            <h2>FACE PREP CAMPUS</h2>
            <p>Bharathidasan College of Arts and Science</p>
            <p className="tagline">Innovate • Compete • Excel</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#events-section">Events Portal</a></li>
              <li><a href="https://faceprepcampus.com/" target="_blank" rel="noopener noreferrer">FACE Prep</a></li>
              <li><a href="https://www.bcas.ac.in/" target="_blank" rel="noopener noreferrer">BCAS Official</a></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div className="footer-social">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fas fa-envelope"></i></a>
            </div>
            <p className="contact-info">event2026@bcas.ac.in</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="divider"></div>
          <p>&copy; 2026 FACE Prep Campus Event. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;