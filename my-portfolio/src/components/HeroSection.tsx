import React from 'react';
import './HeroSection.css'; // Import the CSS file for the hero section
import profileImage from './profile.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-section" id="about">
      <div className="hero-left">
        <div className="profile-card">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-img"
          />
          <h1 className="profile-name">Hansama Rajaguru</h1>
          <p className="profile-position">Undergraduate</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.linkedin.com/in/hansama-rajaguru-865063270" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="mailto:hansamarajaguru@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://github.com/HansamaRajaguru" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="right-text">
          <h1 className="heading-title">Hello I'm Hansama Rajaguru</h1>
          <h2 className="right-text-title">Here's who I am & what I do</h2>
          <div className="button-container">
                <a href="#resume" className="button">RESUME</a>
                <a href="#projects" className="button">PROJECTS</a>
            </div>
          <p className="right-text-content">
            I am an enthusiastic undergraduate at the University of Sri Jayewardenapura, Sri Lanka. I'm in my third year, undertaking a Bachelor of Science (Honours) degree in Information and Communication Technology (ICT).
          </p>
          <br />
          <p className="right-text-content">
            Throughout my academic journey, I've delved into various programming languages, including Python, JavaScript, and TypeScript. I've also honed my skills in developing mobile applications using React Native and extended my expertise to crafting interactive web applications with React and Next.js, showcasing a comprehensive understanding of frontend development across various platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;