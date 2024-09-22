import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainContent from './MainContent';
import './App.css';

const App: React.FC = () => {
<<<<<<< Updated upstream
  const location = useLocation(); // Moved this inside WrappedApp

  return (
    <div className="main-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} /> 
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* Conditionally render Footer only on the HeroSection (home page) */}
      {location.pathname === '/' && <Footer />}
    </div>
  );
=======
    return (
        <div className="app-container">
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    );
>>>>>>> Stashed changes
};

// Moved the useLocation inside the correct Router scope
const WrappedApp: React.FC = () => (
    <Router>
        <App />
    </Router>
);

export default WrappedApp;
