import React from 'react';
import './Projects.css';

const projectDetails = [
    {
        id: 1,
        title: "RecipeHub Web Application",
        description: "A recipe-sharing platform allowing users to browse, share, and manage their favorite recipes using the MERN stack.",
        duration: "2024",
        image: "/images/RecipeHub Web.png" // Add image path
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing projects, skills, and achievements. Developed using React and CSS.",
        duration: "2024",
        image: "/images/portfolio.png", // Add image path
    },
    {
        id: 3,
        title: "Botanic Buddy Mobile Application",
        description: "A Plant care and Disease identification mobile application using React-Native and typeScript.",
        duration: "2023",
        image: "/images/mobileapp.png", // Add image path
    }
];

const Projects: React.FC = () => {
    return (
        <div className="projects-section">
            <div className='heading'>
                <h1>PROJECTS</h1>
            </div>
            <div className='project-cards'>
                {projectDetails.map((project) => (
                    <div key={project.id} className='project-card'>
                        <div className='project-info'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p><strong>{project.duration}</strong></p>
                        </div>
                        <div className='project-image'>
                            <img src={project.image} alt={project.title} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
