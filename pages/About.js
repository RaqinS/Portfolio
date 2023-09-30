import React, { useState } from 'react';
import Whoami from './whoami';
import './about.css';
import basketball from '../images/basketball.jpg';
import guitar from '../images/guitar.png';
import math from '../images/math.jpg';

const hobbiesData = [
  {
    name: 'Basketball',
    image: basketball,
    description: 
    "Ever since my early high school days, you could always find me on a basketball court, whether it was the polished hardwood indoors or the open-air courts outside. I passionately pursued basketball and competed at a high level, culminating in a triumphant victory at the provincial championship. Basketball has remained an integral part of my life, not only keeping me physically fit but also sharpening my skills and enriching my overall well-being."
  },
  {
    name: 'Mathematics',
    image: math,
    description : "Throughout my high school years, I delved deeply into the world of mathematics, participating enthusiastically in various math contests and competitions. These experiences fueled my passion for problem-solving and mathematical exploration. They challenged me to think critically and creatively, providing valuable opportunities for growth and learning. While I may not have a provincial championship to boast of in mathematics, the pursuit of mathematical excellence has undeniably enriched my intellectual journey and contributed to my overall personal development."
  },
  {
    name: 'Guitar',
    image: guitar,
    description: "When I first picked up a guitar, it opened up a whole new world for me. I remember those early days, struggling with chords and getting acquainted with the fretboard. It was a humble start marked by curiosity and determination. Gradually, with each practice session, my skills improved, and the melodies I played began to take shape. While I may not have been a virtuoso from the outset, that journey of self-discovery through music in my early days laid the foundation for my drive for improvement."
  },
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
          <p>
            Born and raised in the picturesque landscapes of Vancouver, BC, I've always been captivated by the blend of nature's beauty and the digital world's endless possibilities. My journey into technology began early, driven by a natural curiosity. As a child, I often found myself dismantling gadgets just to see how they worked, sparking a lifelong passion for understanding the inner workings of technology.
            Now, as a dedicated tech enthusiast with a strong focus on cloud computing and automation, I'm constantly exploring the ever-evolving tech landscape. I thrive on staying at the forefront of industry trends, absorbing knowledge from books, online courses, and hands-on experimentation. This drive to learn and adapt fuels my ambition to make meaningful contributions to the world of technology.
            Currently, I am pursuing my education at BCIT, where I am honing my skills and expanding my knowledge base. This academic journey serves as the foundation upon which I plan to build a successful career in the tech industry. Outside of tech, some of my hobbies are:
          </p>

          <div className="hobby-cards">
            {hobbiesData.map((hobby, index) => (
              <div className="hobby-card" key={index}>
                <div className="hobby-image">
                  <img src={hobby.image} alt={hobby.name} />
                  <div className='hobby-blurb'>{hobby.description}</div> 
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

