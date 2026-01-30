import React from 'react';
import { FaJsSquare, FaReact, FaHtml5, FaNodeJs, FaPython, FaGit } from 'react-icons/fa';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'HTML/CSS', icon: <FaHtml5 /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Git', icon: <FaGit /> }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-icon">
                {skill.icon}
              </div>
              <div className="skill-content">
                <h3 className="skill-name">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
