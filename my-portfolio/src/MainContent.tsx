import React from 'react';
import HeroSection from './components/HeroSection';
import Resume from './pages/resume/Resume';
import Projects from './pages/projects/Project';
import Contact from './pages/contacts/contacts';
import './MainContent.css';

const MainContent: React.FC = () => {
    return (
        <div className="main-content">
            <div id="about">
                <HeroSection />
            </div>
            <div id="resume">
                <Resume />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
};

export default MainContent;