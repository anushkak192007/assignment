import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description: 'Developed and maintained web applications using React, Node.js, and MongoDB. Led a team of 3 developers on a major e-commerce project.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      title: 'Frontend Developer',
      company: 'InnovateLabs',
      period: '2021 - 2022',
      description: 'Built responsive user interfaces and improved application performance by 40%. Collaborated with UX designers to implement pixel-perfect designs.',
      technologies: ['React', 'JavaScript', 'CSS', 'Figma']
    },
    {
      title: 'Junior Developer',
      company: 'StartupXYZ',
      period: '2020 - 2021',
      description: 'Assisted in developing mobile applications and learned agile development practices. Contributed to open-source projects during free time.',
      technologies: ['React Native', 'JavaScript', 'Git', 'Scrum']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item fade-in">
              <div className="experience-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <span className="experience-period">{exp.period}</span>
                <p>{exp.description}</p>
                <div className="experience-tech">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
