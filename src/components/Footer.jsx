import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>LET'S TALK!</h2>
        <a href="mailto:khushiv3052@gmail.com" className="email-link">
          khushiv3052@gmail.com <span className="arrow">→</span>
        </a>
      </div>
      <div className="footer-bottom">
        <span className="copyright">© Khushi Verma - 2025</span>
        <div className="social-links">
          <a href="https://dribbble.com">Dribbble</a>
          <a href="https://behance.net">Behance</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;