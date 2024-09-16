// src/components/Navbar.tsx
import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">Hansama Rajaguru</div>
      <ul className="nav-links">
        <li><a href="#about">ABOUT ME</a></li>
        <li><a href="#resume">RESUME</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
