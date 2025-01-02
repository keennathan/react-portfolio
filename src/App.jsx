import React, { lazy, Suspense, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer';

// Lazy load the page components
const Home = lazy(() => import('./pages/home'));
const About = lazy(() => import('./pages/about'));
const Projects = lazy(() => import('./pages/projects'));
const Contact = lazy(() => import('./pages/contact'));

function App() {
  /**
   * Scrolls to the element with the ID matching the hash in the URL.
   */
  const scrollToHash = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Add event listener for hash changes to handle smooth scrolling
  useEffect(() => {
    window.addEventListener('hashchange', scrollToHash, false);
    return () => {
      window.removeEventListener('hashchange', scrollToHash, false);
    };
  }, []);

  return (
    <Router>
      <div className="background-container">
        {/* Background video */}
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/assets/techBrackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Navbar component */}
        <Navbar />
        {/* Suspense component to handle lazy loading */}
        <Suspense fallback={<div>Loading...</div>}>
          <div id="home" className='section'>
            <Home />
          </div>
          <div id="about" className='section'>
            <About />
          </div>
          <div id="projects" className='section'>
            <Projects />
          </div>
          <div id="contact" className='section'>
            <Contact />
          </div>
        </Suspense>
        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
