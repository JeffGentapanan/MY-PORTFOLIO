import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header 
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="logo-section">
          <a href="#about" className="logo">
            <span>JEFF</span>.GENTAPANAN
          </a>
          <a 
            href="https://github.com/JeffGentapanan/MY_PORTFOLIO.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
            title="View Source on GitHub"
          >
            <FaGithub size={20} />
          </a>
        </div>

        <nav className="nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
