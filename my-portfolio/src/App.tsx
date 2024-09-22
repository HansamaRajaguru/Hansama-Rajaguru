import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Resume from './pages/resume/Resume'; 
import Projects from './pages/projects/Project';
import Contact from './pages/contacts/contacts';
import './App.css';

const App: React.FC = () => {
  const location = useLocation();

  return (
    <div className="main-content">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} /> 
        <Route path="/resume" element={<Resume />} /> 
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {location.pathname === '/' && <Footer />}
    </div>
  );
};

const WrappedApp: React.FC = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
