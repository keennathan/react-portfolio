import { useEffect } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar.jsx'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Contact from './pages/contact'



function App() {
  const scrollToHash = () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  useEffect(() => {
    window.addEventListener('hashchange', scrollToHash, false);
    return () => {
      window.removeEventListener('hashchange', scrollToHash, false);
    }
  }, []);

  return (
    <Router>
      <div className="background-container">
        <video autoPlay loop muted className="background-video">
          <source src="/assets/techBrackground.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Navbar />
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
      </div>
    </Router>
  );
}

export default App;
