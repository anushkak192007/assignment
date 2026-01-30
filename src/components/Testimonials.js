import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'CEO, TechCorp',
      content: 'Arnav is an exceptional developer who delivered our project ahead of schedule. His attention to detail and problem-solving skills are outstanding.',
      image: 'https://via.placeholder.com/100x100/00d4ff/ffffff?text=JD'
    },
    {
      name: 'Jane Smith',
      position: 'Product Manager, InnovateLabs',
      content: 'Working with Arnav was a pleasure. He transformed our ideas into beautiful, functional applications. Highly recommended!',
      image: 'https://via.placeholder.com/100x100/00d4ff/ffffff?text=JS'
    },
    {
      name: 'Mike Johnson',
      position: 'CTO, StartupXYZ',
      content: 'Arnav\'s technical expertise and dedication to quality work made him an invaluable part of our team. Looking forward to future collaborations.',
      image: 'https://via.placeholder.com/100x100/00d4ff/ffffff?text=MJ'
    }
  ];

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2>What People Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card fade-in">
              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
