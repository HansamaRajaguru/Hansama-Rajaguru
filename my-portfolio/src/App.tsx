import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Resume from './pages/resume/Resume'; 
import Projects from './pages/projects/Project';
import './App.css';

const App: React.FC = () => {
  const location = useLocation(); // Moved this inside WrappedApp

  return (
    <div className="main-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} /> 
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/projects" element={<Projects />} />
      </Routes>
      {/* Conditionally render Footer only on the HeroSection (home page) */}
      {location.pathname === '/' && <Footer />}
    </div>
  );
};

// Moved the useLocation inside the correct Router scope
const WrappedApp: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
