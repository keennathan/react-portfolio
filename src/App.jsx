import { useState } from 'react'
<<<<<<< HEAD
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
  )
}

=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'

function App() {
  return (
    <Router>
      <div className="background-container">
        <video autoPlay loop muted className="background-video">
          <source src="/assets/techBrackground.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    </div>
    </Router>
  )
}


>>>>>>> 5ce2a06 (fixed large file)
export default App
