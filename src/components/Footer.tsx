import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          <a href="https://github.com/JeffGentapanan" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/jeff-gentapanan-4b76b8370/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.facebook.com/share/182aXsGi6r/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Designed and Built by Jeff Gentapanan.</p>
      </div>
    </footer>
  );
};

export default Footer;
