import React, { useState, useEffect } from 'react';
import { categories } from '../data/eventsData';

const Navbar = ({ activeTab, setActiveTab }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky-nav" style={{ 
      boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.15)' : '0 2px 10px rgba(0,0,0,0.1)' 
    }}>
      <div className="container">
        <h2 className="section-title">Event Categories</h2>
        <div className="tab-navigation">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`tab-btn ${activeTab === cat.id ? 'active' : ''}`}
              data-tab={cat.id}
              onClick={() => setActiveTab(cat.id)}
            >
              <i className={`fas ${cat.icon}`}></i>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;