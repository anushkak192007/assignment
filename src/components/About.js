import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about fade-in">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I'm anushka kumari, a passionate 17-year-old full-stack developer from Bengaluru, India. I love turning ideas into reality through code, creating innovative solutions that make a difference.
            </p>
            <p>
              With expertise in React, Node.js, and modern web technologies, I focus on building scalable, user-centric applications. My journey in tech started with curiosity and has evolved into a commitment to continuous learning and excellence.
            </p>
            <p>
              When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source projects, or sharing knowledge with the developer community.
            </p>
                <p>Technologies Mastered</p>
              </div>
          <div className="about-image">
            <div className="image-container">
              <img src="/anushka.jpg" alt="Anushka Kumari" />
              <div className="image-overlay">
                <div className="social-links">
                  <a href="https://github.com/anushkakumari" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://linkedin.com/in/anushkakumari" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="https://twitter.com/anuskakumari" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
