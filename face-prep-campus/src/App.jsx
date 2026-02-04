import React, { useRef, useEffect, useState } from 'react';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import Footer from './components/Footer';
import { categories, events } from './data/eventsData';
import './index.css'; 

const App = () => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // 1. GLOBAL SCROLL LOGIC (Fixed to prevent "Scroll Trap")
  useEffect(() => {
    const container = scrollContainerRef.current;
    const section = sectionRef.current;

    const handleWheel = (evt) => {
      // Get position of the Events Section relative to viewport
      const rect = section.getBoundingClientRect();
      
      // Check if the Events Section is mostly visible (snapped in view)
      // We use a small buffer (-50 to 50) to detect if we are "on" this slide
      const isSectionActive = rect.top >= -50 && rect.top <= 50;

      if (isSectionActive && container) {
        const { scrollLeft, scrollWidth, clientWidth } = container;
        
        // precise check for being at the start or end of horizontal scroll
        const isAtStart = scrollLeft <= 0;
        const isAtEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;

        // SCROLL UP EXIT: If scrolling UP and we are at the start -> Let browser scroll vertically to Hero
        if (evt.deltaY < 0 && isAtStart) {
          return; 
        }

        // SCROLL DOWN EXIT: If scrolling DOWN and we are at the end -> Let browser scroll vertically to Footer
        if (evt.deltaY > 0 && isAtEnd) {
          return;
        }

        // Otherwise, hijack vertical scroll for horizontal movement
        evt.preventDefault();
        
        // Multiplied by 2 for faster/smoother horizontal scrolling
        container.scrollLeft += evt.deltaY * 2; 
      }
    };

    // Attach passive: false to allow preventDefault()
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // 2. INTERSECTION OBSERVER (Header Logic)
  useEffect(() => {
    const container = scrollContainerRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryId = entry.target.getAttribute('data-category-id');
            const foundCategory = categories.find(c => c.id === categoryId);
            if (foundCategory) {
              setCurrentCategory(foundCategory);
            }
          }
        });
      },
      {
        root: container, 
        threshold: 0.3, // Trigger when 30% of a category is visible
      }
    );

    const groups = document.querySelectorAll('.category-group');
    groups.forEach(group => observer.observe(group));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Hero />
      
      <section id="events-section" className="events-container" ref={sectionRef}>
        
        {/* Sticky Header */}
        <div className={`sticky-header ${currentCategory.bgClass}`}>
          <div className="header-content container">
            <div className="header-left">
              <h2>{currentCategory.label}</h2>
              <span className="coordinator-tag">
                <i className="fas fa-user-circle"></i> {currentCategory.coordinator}
              </span>
            </div>
            <div className="header-right">
              <i className={`fas ${currentCategory.icon} big-icon`}></i>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="events-grid" ref={scrollContainerRef}>
            
            {/* Render Categories as Groups */}
            {categories.map((category) => {
              const categoryEvents = events.filter(e => e.category === category.id);

              return (
                <div 
                  key={category.id} 
                  className="category-group" 
                  data-category-id={category.id}
                >
                  {/* Intro Card */}
                  <div className={`category-intro-card ${category.bgClass}`}>
                    <div className="intro-content">
                      <i className={`fas ${category.icon} category-icon`}></i>
                      <h3>{category.label}</h3>
                      <p className="desc">{category.description}</p>
                    </div>
                  </div>

                  {/* Events */}
                  {categoryEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}

                </div>
              );
            })}

          </div>
        </div>
      </section>

      <Footer />
      
    </div>
  );
};

export default App;