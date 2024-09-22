import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('about');

  const handleSetActive = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="logo">Hansama Rajaguru</div>
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => handleSetActive('about')}
          >
            ABOUT ME
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={activeLink === 'resume' ? 'active' : ''}
            onClick={() => handleSetActive('resume')}
          >
            RESUME
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={activeLink === 'projects' ? 'active' : ''}
            onClick={() => handleSetActive('projects')}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => handleSetActive('contact')}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
