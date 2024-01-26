import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    document.querySelector('#menu-icon').classList.toggle('bx-x');
    document.querySelector('.navbar').classList.toggle('active');
  };

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on the scroll position
      const sections = document.querySelectorAll('section');
      let top = window.scrollY;

      sections.forEach((sec) => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          setActiveSection(id);

          // Update active class for navigation links
          const navlinks = document.querySelectorAll('header nav a');
          navlinks.forEach((links) => {
            links.classList.remove('active');
            document
              .querySelector(`header nav a[href*=${id}]`)
              .classList.add('active');
          });
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <a href="Ashish Pandey.docx" className="btn cvbtn">
        Download CV
      </a>
      <a href="/" className="logo">
        <span>Ashish's</span> Portfolio
      </a>
      <i
        className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`}
        id="menu-icon"
        onClick={handleMenuClick}
      ></i>

      <nav className="navbar">
        <a
          href="#home"
          className={activeSection === 'home' ? 'active' : ''}
          onClick={() => setActiveSection('home')}
        >
          Home
        </a>
        <a
          href="#about"
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => setActiveSection('about')}
        >
          About
        </a>
        <a
          href="#services"
          className={activeSection === 'services' ? 'active' : ''}
          onClick={() => setActiveSection('services')}
        >
          Services
        </a>
        <a
          href="#projects"
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={() => setActiveSection('projects')}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={() => setActiveSection('contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
