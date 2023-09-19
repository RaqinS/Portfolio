import React, { useState } from 'react';
import Whoami from './whoami';
import './about.css'

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
          <p>Born and raised in the picturesque landscapes of Vancouver, BC, I've always been captivated by the blend of nature's beauty and the digital world's endless possibilities.

My journey into technology began early, driven by a natural curiosity. Now, as a dedicated tech enthusiast with a strong focus on cloud computing and automation, I'm constantly exploring the ever-evolving tech landscape. Currently studying at BCIT, I'm gaining the skills to make a mark in the industry.

Beyond tech, I'm passionate about sports. Whether it's cheering for the Vancouver Canucks or hiking in the Pacific Northwest, I find inspiration in the fusion of physical and digital realms, where innovation meets athleticism..</p>
        </div>
      )}
    </div>
  );
}

export default About;



