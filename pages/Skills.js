import React, { useState } from 'react';
import './Skills.css';
import awsImage from '..//images/aws.jpg';
import dockerImage from '..//images/docker.jpg';
import kubernetesImage from '..//images/kubernetes.jpg';
import ansibleImage from '..//images/ansible.jpg';
import javascriptImage from '..//images/javascript.jpg';
import pythonImage from '..//images/python.jpg';
import reactImage from '..//images/react.jpg';
import angularImage from '..//images/angular.jpg';
import djangoImage from '..//images/django.jpg';
import flaskImage from '..//images/flask.jpg';
import packer from '..//images/packer.png'
import sql from '..//images/sql.png';
import puppet from '..//images/puppet.png';
import ga from '..//images/ga.png';
import vmware from '..//images/vmware.png';
import networking from '..//images/networking.jpg';
import git from '..//images/git.png'
import chef from '..//images/chef.png'
import jenkins from '..//images/jenkins.png'
import virtualBox from '..//images/virtualbox.jpg'
import linux from '..//images/linux.jpg'
import node from '..//images/node.png'
import mdb from '..//images/mdb.png'
import Nginx from '..//images/nginx.png'


const Skills = () => {
  const categories = [
    {
      name: 'DevOps',
      icon: '🛠️',
      skills: [
        { name: 'AWS', image: awsImage },
        { name: 'Docker', image: dockerImage },
        { name: 'Kubernetes', image: kubernetesImage },
        { name: 'Ansible', image: ansibleImage },
        { name: 'packer', image: packer},
        { name: 'puppet', image:  puppet},
        { name: 'github actions', image: ga },
        { name: 'jenkins', image: jenkins }, 
        { name: 'vmware', image: vmware },
        { name: 'git', image: git },
        { name: 'networking', image: networking },
        { name: 'chef', image: chef },
        { name: 'Virtual Box', image: virtualBox },
        { name: 'Linux', image: linux },
        { name: 'Nginx', image: Nginx }
      ],
    },
    {
      name: 'Software Developement',
      icon: '💻',
      skills: [
        { name: 'JavaScript', image: javascriptImage },
        { name: 'Python', image: pythonImage },
        { name: 'React', image: reactImage },
        { name: 'Angular', image: angularImage },
        { name: 'Django', image: djangoImage },
        { name: 'Flask', image: flaskImage },
        { name: 'sql', image: sql},
        { name: 'NodeJS', image: node},
        { name: 'MongoDB', image: mdb}
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
