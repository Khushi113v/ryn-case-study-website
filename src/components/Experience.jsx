import React from 'react';
import ExperienceCard from './ExperienceCard';
import '../styles/Experience.css';

const experienceData = [
  { role: 'Lead Product Designer', company: 'Fortknox', date: 'May 2022 - Oct 2023' },
  { role: 'Intern Designer', company: 'OmniSafe', date: 'May 2021 - Oct 2022' },
  { role: 'UI Designer', company: 'Doradesign', date: 'Mar 2022 - Oct 2023' },
  { role: 'Frontend Developer', company: 'Opacity Author', date: 'Mar 2022 - Oct 2023' },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>✷ Experience</h2>
      <ul>
        {experienceData.map((exp, index) => (
          <ExperienceCard
            key={index}
            role={exp.role}
            company={exp.company}
            date={exp.date}
          />
        ))}
      </ul>
    </section>
  );
};

export default Experience;