import React, { useState } from 'react';
import './Resume.css';

const Project = ({ title, description, image }) => (
  <div className="project">
    <div className="project-prism">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const Resume = () => {
  const [activeTab, setActiveTab] = useState('projects');
  return (
    <div className="resume-container">
      <nav className="mini-navbar">
        <div 
          className={activeTab === 'projects' ? 'active' : ''}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </div>
        <div 
          className={activeTab === 'experience' ? 'active' : ''}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </div>
      </nav>
      {activeTab === 'projects' ? (
        <>
          <h2>Projects</h2>
          <div className="projects">
            <Project
              title="Project 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              image="project1-image.png"
            />
            <Project
              title="Project 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              image="project2-image.png"
            />
            <Project
              title="Project 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              image="project3-image.png"
            />
          </div>
        </>
      ) : (
        <>
          <h2>Experience</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam 
            blandit nunc quis magna tincidunt, non commodo quam dapibus.
          </p>
        </>
      )}
    </div>
  );
};

export default Resume;


