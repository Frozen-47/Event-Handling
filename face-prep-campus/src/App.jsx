import React, { useRef, useEffect, useState } from 'react';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import { categories, events } from './data/eventsData';
import './index.css'; 

const App = () => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  
  // State to track which category is currently visible
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  // 1. GLOBAL SCROLL LOGIC (Vertical Wheel -> Horizontal Scroll)
  useEffect(() => {
    const container = scrollContainerRef.current;
    const section = sectionRef.current;

    const handleWheel = (evt) => {
      // Check if the Events Section is currently in the viewport
      const rect = section.getBoundingClientRect();
      const isSectionActive = rect.top >= -50 && rect.top <= 50; // Tolerance for snap

      if (isSectionActive && container) {
        
        // Logic to allow scrolling back UP to the Hero section
        // If user scrolls UP (deltaY < 0) AND we are at the start (scrollLeft = 0)
        if (evt.deltaY < 0 && container.scrollLeft <= 0) {
          return; // Allow default vertical scroll
        }

        // Otherwise, hijack the scroll for Horizontal movement
        evt.preventDefault();
        container.scrollLeft += evt.deltaY;
      }
    };

    // Attach to WINDOW so it works "everywhere of the cursor"
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // 2. INTERSECTION OBSERVER (Updates Header based on scroll position)
  useEffect(() => {
    const container = scrollContainerRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Find the category that matches the visible group
            const categoryId = entry.target.getAttribute('data-category-id');
            const foundCategory = categories.find(c => c.id === categoryId);
            if (foundCategory) {
              setCurrentCategory(foundCategory);
            }
          }
        });
      },
      {
        root: container, // Watch scrolling inside this container
        threshold: 0.3,  // Trigger when 30% of a category is visible
      }
    );

    // Observe all category groups
    const groups = document.querySelectorAll('.category-group');
    groups.forEach(group => observer.observe(group));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Hero />
      
      <section id="events-section" className="events-container" ref={sectionRef}>
        
        {/* --- STICKY DYNAMIC HEADER --- */}
        {/* This stays at the top and changes based on 'currentCategory' */}
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
          {/* Horizontal Scroll Container */}
          <div className="events-grid" ref={scrollContainerRef}>
            
            {/* Render ALL Categories as groups in one line */}
            {categories.map((category) => {
              const categoryEvents = events.filter(e => e.category === category.id);

              return (
                <div 
                  key={category.id} 
                  className="category-group" 
                  data-category-id={category.id}
                >
                  
                  {/* Category Intro Card (Visual Separator) */}
                  <div className={`category-intro-card ${category.bgClass}`}>
                    <div className="intro-content">
                      <i className={`fas ${category.icon} category-icon`}></i>
                      <h3>{category.label}</h3>
                      <p className="desc">{category.description}</p>
                    </div>
                  </div>

                  {/* Events for this Category */}
                  {categoryEvents.map(event => (
                    <EventCard key={event.id} event={event} />
                  ))}

                </div>
              );
            })}

          </div>
        </div>
      </section>
    </div>
  );
};

export default App;