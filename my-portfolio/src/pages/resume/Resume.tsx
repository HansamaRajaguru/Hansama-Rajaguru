import React from 'react';
import './Resume.css';

const educationDetails = [
    {
        id: 1,
        institution: "UNIVERSITY OF SRI JAYEWARDENAPURA",
        degree: "Bachelor of Science (Hons.) in Information and Communication Technology",
        duration: "2021 - Present",
        description: "Undergraduate",
    },
    {
        id: 2,
        institution: "WAYAMBA UNIVERSITY OF SRI LANKA",
        degree: "Diploma in English",
        duration: "2020 - 2021",
        description: "Passed with Merit Pass.",
    },
    {
        id: 3,
        institution: "SRI SUMANGALA NATIONAL COLLEGE-WARIYAPOLA",
        degree: "G.C.E. Advanced Level",
        duration: "2019",
        description: "",
    },
    {
        id: 4,
        institution: "OPEN UNIVERSITY OF SRI LANKA",
        degree: "Certificate in Human Resource Management",
        duration: "2020",
        description: "Passed",
    }
];

const Resume: React.FC = () => {
    return (
        <div className="resume-section">
            <div className='heading'>
                <h1>Resume</h1>
            </div>
            <div className='title-section'>
                <h2>Education</h2>
                <a href="/Hansama Resume.pdf" download>
                    <button>Download CV</button>
                </a>
            </div>
            <div className='education-cards'>
                {educationDetails.map((detail) => (
                    <div key={detail.id} className='card'>
                        <h3>{detail.duration}</h3>
                        <p>{detail.institution}</p>
                        <p>{detail.degree}</p>
                        <p>{detail.description}</p>
                    </div>
                ))}
                <div className="card">
                    <h3>Professional Skillset</h3>
                    <ul>
                        <li>Programming & Software Development</li>
                        <li>Data Structures & Algorithms</li>
                        <li>Web Development (HTML, CSS, JavaScript)</li>
                        <li>Database Management (SQL, MongoDB)</li>
                        <li>Version Control (Git, GitHub)</li>
                        <li>Problem-Solving & Critical Thinking</li>
                        <li>Teamwork & Collaboration</li>
                    </ul>
                    <br />
                    <h3>Languages</h3>
                    <ul>
                        <li>English</li>
                        <li>Sinhala</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resume;
