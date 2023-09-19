import React, { useState } from 'react';
import Whoami from './whoami';
import './about.css';

// Define your hobby data with images
const hobbiesData = [
  {
    name: 'Hiking',
    image: 'url-to-hiking-image.jpg',
  },
  {
    name: 'Watching Hockey',
    image: 'url-to-hockey-image.jpg',
  },
  // Add more hobbies as needed
];

function About() {
  const [showText, setShowText] = useState(false);

  return (
    <div className="about">
      <div className="whoami">
        <Whoami onFinish={() => setShowText(true)} />
      </div>
      {showText && (
        <div className="about-text">
          <h1 className="about-header">About Me</h1>
          <p>Born and raised in the picturesque landscapes of Vancouver, BC, I've always been captivated by the blend of nature's beauty and the digital world's endless possibilities.</p>
          <p>My journey into technology began early, driven by a natural curiosity. Now, as a dedicated tech enthusiast with a strong focus on cloud computing and automation, I'm constantly exploring the ever-evolving tech landscape. Currently studying at BCIT, I'm gaining the skills to make a mark in the industry.</p>
          <p>Beyond tech, I have several hobbies that I'm passionate about:</p>

          {/* Hobby Cards */}
          <div className="hobby-cards">
            {hobbiesData.map((hobby, index) => (
              <div className="hobby-card" key={index}>
                <div className="hobby-image">
                  <img src={hobby.image} alt={hobby.name} />
                </div>
                <p className="hobby-name">{hobby.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
