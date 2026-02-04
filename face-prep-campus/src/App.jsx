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

  // 1. GLOBAL SCROLL LOGIC
  useEffect(() => {
    const container = scrollContainerRef.current;
    const section = sectionRef.current;

    const handleWheel = (evt) => {
      // 1. Check if Events Section is in view (snapped)
      const rect = section.getBoundingClientRect();
      const isSectionActive = rect.top >= -50 && rect.top <= 50;

      if (isSectionActive && container) {
        // Only run horizontal scroll logic if the container actually scrolls horizontally (Desktop)
        // We check if scrollWidth is greater than clientWidth
        if (container.scrollWidth > container.clientWidth) {
          const { scrollLeft, scrollWidth, clientWidth } = container;
          
          // 2. Detect Edges with Tolerance
          const isAtStart = scrollLeft <= 0;
          const isAtEnd = (scrollLeft + clientWidth) >= (scrollWidth - 5);

          // 3. EXIT STRATEGIES
          if (evt.deltaY < 0 && isAtStart) return; 
          if (evt.deltaY > 0 && isAtEnd) return;

          // 4. Horizontal Scroll Execution
          evt.preventDefault();
          container.scrollLeft += evt.deltaY * 2.5; 
        }
      }
    };

    // Passive: false is required to prevent default window scrolling
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // 2. HEADER UPDATE LOGIC (FIXED)
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
        // FIX: Removed 'root: container' so it uses the browser viewport instead.
        // This ensures it works correctly on both Mobile (Vertical) and Desktop (Horizontal).
        root: null, 
        threshold: 0.2, // Lowered slightly to catch elements earlier on mobile
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
            
            {categories.map((category) => {
              const categoryEvents = events.filter(e => e.category === category.id);

              return (
                <div 
                  key={category.id} 
                  className="category-group" 
                  data-category-id={category.id}
                >
                  <div className={`category-intro-card ${category.bgClass}`}>
                    <div className="intro-content">
                      <i className={`fas ${category.icon} category-icon`}></i>
                      <h3>{category.label}</h3>
                      <p className="desc">{category.description}</p>
                    </div>
                  </div>

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