import React from 'react';
import '../styles/ExperienceCard.css';

const ExperienceCard = ({ role, company, date }) => {
  return (
    <li className="experience-card">
      <span className="role">{role}</span>
      <div className="company-details">
        <span className="company">{company}</span>
        <span className="date">{date}</span>
      </div>
    </li>
  );
};

export default ExperienceCard;