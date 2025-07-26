import React, { useState, useRef, useEffect } from 'react';
import { Star, Heart, ShoppingCart, Users, Award, MapPin, Phone, Mail } from 'lucide-react';
import Navbar from '../src/components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import About from './components/About';
import Journey from './components/Journey';
import Products from './components/Products';
import Meet from './components/Meet';
import ProductsPage from './components/ProductsPage';
import FeatureCards from './components/FeatureCards';

const VocalForLocal = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentSection, setCurrentSection] = useState('home');
  const [language, setLanguage] = useState('en'); 
  
  // Create refs for sections (only for landing page)
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const journeyRef = useRef(null);
  const aboutRef = useRef(null);
  
  // Handle URL changes and initial routing
  useEffect(() => {
    const handleRouting = () => {
      const path = window.location.pathname;
      if (path === '/products') {
        setCurrentPage('products');
        setCurrentSection('productsPage');
      } else {
        setCurrentPage('home');
        setCurrentSection('home');
      }
    };

    // Handle initial load
    handleRouting();

    // Handle browser back/forward navigation
    const handlePopState = () => {
      handleRouting();
      // Scroll to top when using browser navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);
  
  // Navigation function for pages
  const navigateToPage = (page) => {
    const newPath = page === 'home' ? '/' : `/${page}`;
    
    // Only update if we're actually changing pages
    if (window.location.pathname !== newPath) {
      setCurrentPage(page);
      setCurrentSection(page === 'home' ? 'home' : 'productsPage');
      
      // Update URL and add to browser history
      window.history.pushState({ page }, '', newPath);
      
      // Scroll to top when navigating to a new page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // Auto-scroll function (only for landing page sections)
  const scrollToSection = (sectionName) => {
    // If trying to navigate to products page
    if (sectionName === 'productsPage') {
      navigateToPage('products');
      return;
    }
    
    // If we're on products page and trying to go to a landing page section
    if (currentPage === 'products' && sectionName !== 'productsPage') {
      navigateToPage('home');
      // Add a small delay to allow page transition before scrolling
      setTimeout(() => {
        const refs = {
          home: heroRef,
          products: productsRef,
          journey: journeyRef,
          about: aboutRef
        };
        
        const targetRef = refs[sectionName];
        if (targetRef && targetRef.current) {
          targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300); // Increased timeout for smoother transition
      setCurrentSection(sectionName);
      return;
    }
    
    // Regular section scrolling on landing page
    if (currentPage === 'home') {
      const refs = {
        home: heroRef,
        products: productsRef,
        journey: journeyRef,
        about: aboutRef
      };
      
      const targetRef = refs[sectionName];
      if (targetRef && targetRef.current) {
        targetRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
      
      setCurrentSection(sectionName);
    }
  };
  
  const MandalaPattern = () => (
    <div className="absolute inset-0 opacity-5 pointer-events-none">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <pattern id="mandala" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            {Array.from({length: 8}).map((_, i) => (
              <line key={i} x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.3" 
                    transform={`rotate(${i * 45} 100 100)`}/>
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mandala)"/>
      </svg>
    </div>
  );

  // Render Products Page
  if (currentPage === 'products') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
        <MandalaPattern />
        
        <Navbar 
          language={language} 
          setLanguage={setLanguage}
          currentSection="productsPage"
          scrollToSection={scrollToSection}
          navigateToPage={navigateToPage}
          currentPage={currentPage}
        />

        <ProductsPage 
          language={language}
          currentSection="productsPage"
          scrollToSection={scrollToSection}
          navigateToPage={navigateToPage}
        />

        <Footer language={language} />
      </div>
    );
  }

  // Render Landing Page (Home)
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 relative overflow-hidden">
      <MandalaPattern />
      
      <Navbar 
        language={language} 
        setLanguage={setLanguage}
        currentSection={currentSection}
        scrollToSection={scrollToSection}
        navigateToPage={navigateToPage}
        currentPage={currentPage}
      />

      {/* Home Section */}
      <section ref={heroRef} id="home">
        <Hero language={language} scrollToSection={scrollToSection} />
        <Meet language={language} />
      </section>
      {/* Products Preview Section */}
      <section ref={productsRef} id="products">
        <Products 
          language={language} 
          navigateToPage={navigateToPage}
          />
      </section>

      {/* Journey Section */}
      <section ref={journeyRef} id="journey">
        <Journey language={language} />
      </section>
        <FeatureCards language={language} navigateToPage={navigateToPage} />
      <hr class="h-px mx-14 border-2 border-amber-400 rounded-full"></hr>
      {/* About Section */}
      <section ref={aboutRef} id="about">
        <About language={language} />
      </section>

      <Footer language={language} />
    </div>
  );
};

export default VocalForLocal;
