import React, { Component } from 'react';
import './Contact.css';
import resume from '../images/RaqinShikder.pdf';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaFilePdf } from 'react-icons/fa'; 

class Contact extends Component {
  onResumeClick = () => {
    window.open(resume);
  }

  render() {
    return (
      <div className="contact-container">
       
        <div className="contact-info">
          <h2>Contact</h2>
          <div className="contact-item">
            <FaEnvelope /> 
            <span style={{ marginLeft: '8px' }}>Email: Raqin2003@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhone /> 
            <span style={{ marginLeft: '8px' }}>Phone: +1 778-320-7423</span>
          </div>
     
        </div>


        <div className="contact-links">
          <h2>Links</h2>
          <ul>
            <li>
              <a onClick={this.onResumeClick}>
                <FaFilePdf /> View my full resume!
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/raqin-shikder-941760227/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/RaqinS" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;
