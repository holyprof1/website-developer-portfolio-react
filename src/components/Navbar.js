import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const toggleMenu = () => setIsMenuActive(!isMenuActive);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/Untitled design.png" alt="holyprof logo" />
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
      <ul className={`menu ${isMenuActive ? 'active' : ''}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;