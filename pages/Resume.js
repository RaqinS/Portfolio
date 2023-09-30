import React, { useState } from 'react';
import './Resume.css';
import volt from '..//images/volterra.png';
import roll from '..//images/rollahippo.png';
import server from "..//images/server.jpg"
import pp from "..//images/pp.jpg"
import bcit from "..//images/bcit.png"
import recipie from "..//images/NewRecipieLogo.png"

const Project = ({ title, position, description, image }) => (
  <div className="project">
    <div className="project-prism">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{position}</p>
      <p>{description}</p>
    </div>
  </div>
);

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="resume-container">
      <nav className="mini-navbar">
        <div
          className={activeTab === 'experience' ? 'active' : ''}
          onClick={() => setActiveTab('experience')}
        >
          Experience
        </div>
        <div
          className={activeTab === 'projects' ? 'active' : ''}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </div>
      </nav>

      {activeTab === 'experience' ? (
        <div className="Experience">
          <div className="project-container">
            <Project
              title="Volterra Technologies"
              position="Devops Intern"
              description="
              
At Volterra Technologies, I established and managed a scalable infrastructure for EV battery data collection and analysis using AWS CloudFormation, Amazon S3, RDS, and Kinesis. I also implemented access control with Amazon IAM and automated code deployment with a CI/CD pipelin"
              image={volt}
            />
          </div>
          <div className="project-container">
            <Project
              title="Roll-a-hippo Foundation"
              position="Software Intern"
              description="During my time at Roll-a-hippo Foundation, I designed and developed a web application using Django and SQLite to streamline the process of gathering information from surveys by automating data collection from mobile numbers via WhatsApp. The project aimed to improve accessibility to Hippo Rollers for women in Africa, facilitating their access to clean water."
              image={roll}
            />
          </div>
          <Project
              title="BCIT"
              position="Student"
              description="During my time at BCIT, I gained hands-on experience with a wide range of tools and technologies through relevant courses. These included Service-Based Architecture, Linux System Administration, Docker and Kubernetes, Infrastructure Provisioning, Enterprise Networking, and Object-Oriented Programming. These courses provided me with a solid foundation in various aspects of IT and software development, enhancing my skills and knowledge in these areas.





              "
              image={bcit}
            />
        </div>
      ) : (
        <div className="projects">
          <div className="project-container">
            <Project
              title="Personal Portfolio"
              description="This is what you're currently viewing! Made using React and hosted on my personal Ubuntu server."
              image={pp}
            />
          </div>
          <div className="project-container">
            <Project
              title="Home Lab"
              description="Created a personal Ubuntu home lab server for hosting diverse services, including a home media server, VPN, personal portfolio website, while effectively implementing port forwarding and reverse proxy configurations for seamless access and management."
              image={server}
            />
          </div>
          <div className="project-container">
            <Project
              title="Recipe"
              description="Collaborated with a group of BCIT students to develop an intuitive Ingredient-Based Recipe Finder application. The app empowers users to discover recipes tailored to the ingredients they have on hand."
              image={recipie}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;
