import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './contact.css';

const Contact: React.FC = () => {
    return (
        <div className="contact-section">
            <div className="heading">
                <h1>Contact Me</h1>
            </div>
            <div className="contact-content">
                <p className="contact-description">
                    Looking to connect? Feel free to reach out! Whether you have questions, feedback, or just want to say hello, I'm here to listen. Connect with me on LinkedIn, GitHub, or send me an email directly!
                </p>
                <div className="social-media-icons">
                    <a href="https://www.linkedin.com/in/hansama-rajaguru-865063270/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                    </a>
                    <a href="https://github.com/HansamaRajaguru" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="icon" />
                    </a>
                    <a href="mailto:hansamarajaguru@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    </a>
                </div>
                <p className="email-text">
                    Email: <a href="mailto:hansamarajaguru@gmail.com">hansamarajaguru@gmail.com</a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
