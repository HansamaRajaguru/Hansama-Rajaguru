import React from 'react';
import './Projects.css';

const projectDetails = [
    {
        id: 1,
        title: "RecipeHub Web Application",
        description: "A recipe-sharing platform allowing users to browse, share, and manage their favorite recipes using the MERN stack.",
        duration: "2024",
        image: "/images/RecipeHub Web.png"
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing projects, skills, and achievements. Developed using React and CSS.",
        duration: "2024",
        image: "/images/portfolio.png",
    },
    {
        id: 3,
        title: "Botanic Buddy Mobile Application",
        description: "A plant care and disease identification mobile application using React-Native and TypeScript.",
        duration: "2023",
        image: "/images/mobileapp.png",
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
                        <div className='project-image'>
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className='project-info'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p><strong>{project.duration}</strong></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
