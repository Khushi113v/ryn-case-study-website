import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    toggleMenu();
  };

  return (
    <header>
      <div className="header-content">
        <div className="logo">RYN</div>
        <button className="burger-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <nav className={isMenuOpen ? 'nav-open' : ''}>
          <ul>
            <li>
              <a
                href="#home"
                className={activeLink === 'home' ? 'active' : ''}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeLink === 'about' ? 'active' : ''}
                onClick={() => handleLinkClick('about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeLink === 'projects' ? 'active' : ''}
                onClick={() => handleLinkClick('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeLink === 'contact' ? 'active' : ''}
                onClick={() => handleLinkClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <a href="#hire-me" className="hire-me-btn">Hire Me</a>
      </div>
    </header>
  );
};

export default Header;