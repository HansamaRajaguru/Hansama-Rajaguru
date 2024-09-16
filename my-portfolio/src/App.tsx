// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

const App: React.FC = () => {
  return (
    <div className="main-content">
      <Navbar />
      <div>
        {/* Your main content here */}
        <h2>Welcome to My Portfolio</h2>
        {/* More content */}
      </div>
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default App;
