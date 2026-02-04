import React, { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';
import { categories, events } from './data/eventsData';
import './index.css'; 

const App = () => {
  const [activeTab, setActiveTab] = useState('communication');

  // Filter events based on active tab
  const filteredEvents = events.filter(event => event.category === activeTab);
  
  // Get current category info for the header
  const currentCategory = categories.find(cat => cat.id === activeTab);

  return (
    <div className="app">
      <Hero />
      
      <section id="events-section" className="events-container">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="container">
          <div className="tab-content">
            {/* Added key to force animation re-render on tab change */}
            <div key={activeTab} className="tab-pane active">
              
              {/* FIXED: Added ?. check to prevent crashes */}
              <div className={`category-header ${currentCategory?.bgClass || 'comm-bg'}`}>
                <h3>{currentCategory?.label} Activities</h3>
                <p>{currentCategory?.description}</p>
                <p className="coordinator">Event Coordinator: {currentCategory?.coordinator}</p>
              </div>

              <div className="events-grid">
                {filteredEvents.map(event => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;