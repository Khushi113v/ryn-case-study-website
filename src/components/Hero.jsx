import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          I AM A FREELANCE <br />
          DESIGNER FROM <br />
          SAN FRANCISCO
        </h1>
        <div className="hero-row">
          <div className="logos">
            <span className="logo-text">doradesign</span>
            <span className="logo-text">wave</span>
            <span className="logo-text sinclair">SILSILA</span>
          </div>
          <div className="welcome-text">
            <p>welcome to my portfolio. Here artistry meets functionality. Dive into a curated showcase of dinstinctive branding and web designs, each crafted to captivate and inspire.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;