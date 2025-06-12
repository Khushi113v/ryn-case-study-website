import React from 'react';
import WorkCard from './WorkCard';
import '../styles/Works.css';

const worksData = [
  {
    imageSrc: '/images/analysis.jpg',
    imageAlt: 'Analysis Application',
    title: 'Analysis Application',
    description: 'With user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.',
    labels: ['Figma', 'UX'],
    buttonText: 'View Case Study',
  },
  {
    imageSrc: '/images/fortknox.jpg',
    imageAlt: 'FortKnox',
    title: 'FortKnox',
    description: 'Designed a secure platform with seamless navigation for financial data protection.',
    labels: ['UI', 'Branding'],
    buttonText: 'View Case Study',
  },
  {
    imageSrc: '/images/zenocide.jpg',
    imageAlt: 'Zenocide',
    title: 'Zenocide',
    description: 'Created a minimalist design for a productivity app to enhance user focus.',
    labels: ['Design', 'Prototyping'],
    buttonText: 'View Case Study',
  },
];

const Works = () => {
  return (
    <section className="works">
      <div className="works-header">
        <h2>✷ Works</h2>
        <a href="#view-all" className="view-all">View all</a>
      </div>
      <div className="works-grid">
        {worksData.map((work, index) => (
          <WorkCard
            key={index}
            imageSrc={work.imageSrc}
            imageAlt={work.imageAlt}
            title={work.title}
            description={work.description}
            labels={work.labels}
            buttonText={work.buttonText}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;