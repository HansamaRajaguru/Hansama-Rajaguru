// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import HeroSection from './components/HeroSection'; // Import the HeroSection component
import './App.css';

const App: React.FC = () => {
  return (
    <div className="main-content">
      <Navbar />
      <HeroSection /> {/* Render the HeroSection component */}
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default App;
