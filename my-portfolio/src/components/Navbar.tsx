import React, { useEffect, useState } from 'react';
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
      handleSetActive(id); // Set active link immediately on click
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let scrollPosition = window.scrollY; // Get the current scroll position

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if the section is currently in view
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          handleSetActive(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">Hansama Rajaguru</div>
      <ul className="nav-links">
        <li>
          <a
            href="#about"
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => scrollToSection('about')}
          >
            ABOUT ME
          </a>
        </li>
        <li>
          <a
            href="#resume"
            className={activeLink === 'resume' ? 'active' : ''}
            onClick={() => scrollToSection('resume')}
          >
            RESUME
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeLink === 'projects' ? 'active' : ''}
            onClick={() => scrollToSection('projects')}
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => scrollToSection('contact')}
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
