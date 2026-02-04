import React, { useState } from 'react';

const EventCard = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.title} loading="lazy" />
        <div className="event-overlay">
          <i className={`fas ${event.icon}`}></i>
        </div>
      </div>
      <div className="event-content">
        <h4>{event.title}</h4>
        <p className="short">{event.shortDesc}</p>
        
        <div className={`event-details ${showDetails ? '' : 'hidden'}`}>
          <p><i className="fas fa-clock"></i> {event.time}</p>
          <p><i className="fas fa-map-marker-alt"></i> {event.venue}</p>
          <p><i className="fas fa-info-circle"></i> {event.details}</p>
        </div>

        <div className="event-actions">
          <button 
            className="details-btn" 
            onClick={() => setShowDetails(!showDetails)}
            style={{ 
              background: showDetails 
                ? 'linear-gradient(45deg, #ee5a24, #ff6b6b)' 
                : 'linear-gradient(45deg, #667eea, #764ba2)' 
            }}
          >
            {showDetails ? 'Hide Details' : 'Details'}
          </button>
          <a href={event.regLink} target="_blank" rel="noopener noreferrer" className="register-btn">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;