import React, { useState } from 'react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  
  // State to handle image loading errors
  const [imgSrc, setImgSrc] = useState<string>(event.image);

  const handleImageError = () => {
    // Fallback image if the original fails (Abstract tech background)
    setImgSrc('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80');
  };

  return (
    <div className="event-card">
      <div className="event-image">
        <img 
          src={imgSrc} 
          alt={event.title} 
          loading="lazy" 
          onError={handleImageError} // <--- Added Error Handler
        />
        <div className="event-overlay">
          <i className={`fas ${event.icon}`}></i>
        </div>
      </div>
      <div className="event-content">
        <h4>{event.title}</h4>
        <p className="short">{event.shortDesc}</p>
        
        <div className={`event-details-wrapper ${showDetails ? 'open' : ''}`}>
          <div className="event-details">
            <p><i className="fas fa-clock"></i> {event.time}</p>
            <p><i className="fas fa-map-marker-alt"></i> {event.venue}</p>
            <p><i className="fas fa-info-circle"></i> {event.details}</p>
          </div>
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