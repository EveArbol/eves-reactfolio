/* eslint-disable no-unused-vars */
import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/EveArbol" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        {/* <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer"><FaTwitter /></a> */}
        <a href="https://www.linkedin.com/in/evelinarboleda/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div>
      <div className="contact-info">
        <p>Contact: evelinarboleda23@gmail.com</p>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Evelin Arboleda</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
