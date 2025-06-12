import React from 'react';
import '../styles/WorkCard.css';

const WorkCard = ({ imageSrc, imageAlt, title, description, labels, buttonText }) => {
  return (
    <div className="work-card">
      <div className="work-card-inner">
        <img src={imageSrc} alt={imageAlt} />
        <div className="work-content">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="labels">
            {labels.map((label, index) => (
              <span key={index}>{label}</span>
            ))}
          </div>
          <button>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;