import React, { useState } from 'react';
import './Navbar.css';
import Home from './Home';
import Skills from './Skills';
import About from './About';
import Resume from './Resume';
import Contact from './contact'; // Import the Contact component

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <nav className="Navbar">
        <div
          className={activeTab === 'home' ? 'active' : ''}
          onClick={() => handleTabClick('home')}
        >
          Home
        </div>
        <div
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => handleTabClick('about')}
        >
          About
        </div>
        <div
          className={activeTab === 'skills' ? 'active' : ''}
          onClick={() => handleTabClick('skills')}
        >
          Skills
        </div>
        <div
          className={activeTab === 'resume' ? 'active' : ''}
          onClick={() => handleTabClick('resume')}
        >
          Resume
        </div>
        <div
          className={activeTab === 'contact' ? 'active' : ''}
          onClick={() => handleTabClick('contact')}
        >
          Contact
        </div>
      </nav>
      {activeTab === 'home' ? (
        <Home />
      ) : activeTab === 'about' ? (
        <About />
      ) : activeTab === 'skills' ? (
        <Skills />
      ) : activeTab === 'resume' ? (
        <Resume />
      ) : (
        <Contact /> // Display the Contact component when the "contact" tab is active
      )}
    </>
  );
};

export default Navbar;

