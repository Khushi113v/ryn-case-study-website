import React, { useState } from 'react';
import '../styles/FAQ.css';

const faqData = [
  {
    question: 'What is your design process?',
    answer: 'My design process typically involves four key phases: research, design, prototype and test. In the research  phase, i gather insights about the user  and their needs. In the design phase, i create wireframes and visual designs that meet those needs, In the prototype phase, i create interactive models of the design for testing. In the test phase, i collect feedback from users to refine the design.'
  },
  {
    question: 'How long does a project take?',
    answer: 'Project timelines vary depending on complexity, but typically range from 2 weeks to 2 months.'
  },
  {
    question: 'What services do you offer?',
    answer: 'I offer a range of services including UI/UX design, branding, and web design, tailored to meet your needs.'
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>✷ Frequently asked questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="toggle-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;