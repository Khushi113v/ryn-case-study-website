import React from 'react';
import '../styles/ClientsMarquee.css';

const ClientsMarquee = () => {
  const logos = ['FIGMA', 'DESIGNER', 'DEVELOPER', 'FIGMA', 'DESIGNER', 'DEVELOPER'];

  return (
    <section className="clients-marquee">
      <div className="marquee">
        <div className="marquee-content">
          {logos.map((logo, index) => (
            <span key={index} className="logo">
              {logo} ✷
            </span>
          ))}
          {logos.map((logo, index) => (
            <span key={`duplicate-${index}`} className="logo">
              {logo} ✷
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;