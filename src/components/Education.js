import React from 'react';
import './Education.css';

function Education() {
  const education = [
    {
      degree: 'diploma in Computer Science',
      institution: 'acharya Institute of Technology',
      period: '2023 - 2026',
      description: 'Focused on software engineering, algorithms, and data structures. Graduated with honors.',
      achievements: ['Deans List', 'Coding Competition Winner']
    },
    {
      degree: 'High School Certificate',
      institution: 'Delhi Public School',
      period: '2021 - 2023',
      description: 'Completed high school with excellent grades in Mathematics and Science.',
      achievements: ['School Topper', 'Science Fair Winner']
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2>Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item fade-in">
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.institution}</h4>
                <span className="education-period">{edu.period}</span>
                <p>{edu.description}</p>
                <div className="education-achievements">
                  {edu.achievements.map((achievement, achIndex) => (
                    <span key={achIndex} className="achievement-tag">{achievement}</span>
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

export default Education;
