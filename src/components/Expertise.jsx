import React from 'react';
import '../styles/Expertise.css';

const Expertise = () => {
  return (
    <section className="expertise">
      <h2>✷ Expertise</h2>
      <div className="expertise-grid">
        <div className="expertise-card">
          <h3>Branding</h3>
          <p>Brand strategy, visual identity, logo design, and guidelines to create a cohesive and memorable brand presence.</p>
        </div>
        <div className="expertise-card">
          <h3>UI Design</h3>
          <p>Interface design, wireframes, prototypes, and user flows to craft intuitive and visually appealing digital products.</p>
        </div>
        <div className="expertise-card">
          <h3>UX Design</h3>
          <p>User research, personas, journey mapping, and usability testing to enhance user satisfaction and engagement.</p>
        </div>
        <div className="expertise-card">
          <h3>Development</h3>
          <p>Front-end development, responsive design, and performance optimization to bring designs to life with clean code.</p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;