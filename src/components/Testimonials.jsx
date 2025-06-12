import React, { useState } from 'react';
import '../styles/Testimonials.css';

const testimonialsData = [
  {
    image: '/images/user.jpg',
    name: 'Floyd Miles',
    profession: 'Product Manager',
    review: "Synergy’s resume builder is fantastic! It helped me create a professional resume quickly, and I love how easy it is to customize. The templates are modern and sleek, and it helped me stand out to employers."
  },
  {
    image: '/images/user.jpg',
    name: 'Jane Doe',
    profession: 'UX Designer',
    review: "I loved working with this team! Their attention to detail and creativity made my project stand out. Highly recommend their services."
  },
  {
    image: '/images/user.jpg',
    name: 'John Smith',
    profession: 'Developer',
    review: "The design process was seamless, and the final product exceeded my expectations. Truly a game-changer for my business!"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const { image, name, profession, review } = testimonialsData[currentIndex];

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>✷ What they say</h2>
      </div>
      <div className="testimonials-content">
        <div className="user-info">
          <img src={image} alt={name} className="user-image" />
          <div className="user-details">
            <span className="user-name">{name}</span>
            <span className="user-profession">{profession}</span>
          </div>
        </div>
        <div className="review-section">
          <p>{review}</p>
          <div className="arrows">
            <button onClick={handlePrev}>←</button>
            <button onClick={handleNext}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;