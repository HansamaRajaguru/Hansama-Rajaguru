import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Resume from './pages/resume/Resume'; // Import Resume component
import './App.css';

const App: React.FC = () => {
  // Using the useLocation hook to determine the current path
  const location = useLocation();

  return (
    <div className="main-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} /> {/* Home page with HeroSection */}
        <Route path="/resume" element={<Resume />} /> {/* Resume page */}
      </Routes>
      {/* Conditionally render Footer only on the HeroSection (home page) */}
      {location.pathname === '/' && <Footer />}
    </div>
  );
};

// App needs to be wrapped in Router
const WrappedApp: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
