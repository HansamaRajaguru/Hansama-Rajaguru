import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('about');

  const handleSetActive = (link: string) => {
    setActiveLink(link);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Hansama Rajaguru</div>
      <ul className="nav-links">
        <li>
          <a
            href="#about"
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => {
              handleSetActive('about');
              scrollToSection('about');
            }}
          >
            ABOUT ME
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={activeLink === 'resume' ? 'active' : ''}
            onClick={() => {
              handleSetActive('resume');
              scrollToSection('resume');
            }}
          >
            RESUME
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeLink === 'projects' ? 'active' : ''}
            onClick={() => {
              handleSetActive('projects');
              scrollToSection('projects');
            }}
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => {
              handleSetActive('contact');
              scrollToSection('contact');
            }}
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
