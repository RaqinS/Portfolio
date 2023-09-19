import React, { useState } from 'react';
import './Skills.css';
import awsImage from '..//images/aws.jpg';
import azureImage from '..//images/azure.jpg';
import googleCloudImage from '..//images/google-cloud.jpg';
import dockerImage from '..//images/docker.jpg';
import kubernetesImage from '..//images/kubernetes.jpg';
import ansibleImage from '..//images/ansible.jpg';
import javascriptImage from '..//images/javascript.jpg';
import pythonImage from '..//images/python.jpg';
import reactImage from '..//images/react.jpg';
import angularImage from '..//images/angular.jpg';
import djangoImage from '..//images/django.jpg';
import flaskImage from '..//images/flask.jpg';

const Skills = () => {
  const categories = [
    {
      name: 'Cloud Computing Skills',
      icon: '☁️',
      skills: [
        { name: 'AWS', image: awsImage },
        { name: 'Azure', image: azureImage },
        { name: 'Google Cloud', image: googleCloudImage },
      ],
    },
    {
      name: 'DevOps Skills',
      icon: '🛠️',
      skills: [
        { name: 'Docker', image: dockerImage },
        { name: 'Kubernetes', image: kubernetesImage },
        { name: 'Ansible', image: ansibleImage },
      ],
    },
    {
      name: 'Software Development Skills',
      icon: '💻',
      skills: [
        { name: 'JavaScript', image: javascriptImage },
        { name: 'Python', image: pythonImage },
        { name: 'React', image: reactImage },
        { name: 'Angular', image: angularImage },
        { name: 'Django', image: djangoImage },
        { name: 'Flask', image: flaskImage },
      ],
    },
  ];

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const handleSkillHover = (skillName) => {
    setHoveredSkill(skillName);
  };

  return (
    <div className="Skills">
      {categories.map((category) => (
        <section key={category.name} className="category">
          <div className="category-box">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h2>{category.name}</h2>
            </div>
            <ul className="skills-list">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className={`skill ${hoveredSkill === skill.name ? 'hovered' : ''}`}
                  style={{
                    backgroundImage: `url(${skill.image})`,
                    backgroundSize: 'cover',
                  }}
                  onMouseEnter={() => handleSkillHover(skill.name)}
                  onMouseLeave={() => handleSkillHover(null)}
                >
                  {hoveredSkill === skill.name && (
                    <div className="skill-name">
                      {skill.name}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Skills;
