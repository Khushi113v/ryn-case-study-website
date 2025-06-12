import React from 'react';
import '../styles/Card.css';

const Card = ({ imageSrc, imageAlt, date, title, description, labels, buttonText, isBlog }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={imageAlt} />
      <div className="card-content">
        {date && <span className="date">{date}</span>}
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        <div className="labels">
          {labels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
        <button className={isBlog ? 'blog-btn' : ''}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Card;