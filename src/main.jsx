// Import necessary modules from React and ReactDOM
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import main App component
import App from './App.jsx'

/**
 * Main entry point of the application.
 * Renders the App component inside a StrictMode wrapper.
 * StrictMode is a tool for highlighting potential problems in an application.
 * It activates additional checks and warnings for its descendants.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
