import React from 'react';
import { motion } from 'framer-motion';
import DecryptedText from './animations/DecryptedText';
import Magnet from './animations/Magnet';
import './Hero.css';

const ease = [0.22, 1, 0.36, 1] as const;

const Hero: React.FC = () => {
  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          Hi, my name is
        </motion.h4>

        <Magnet padding={100} magnetStrength={10}>
          <h1 className="name-heading" style={{ cursor: 'default' }}>
            <DecryptedText 
              text="Jeff Gentapanan." 
              animateOn="view" 
              speed={40} 
              maxIterations={15} 
              className="revealed"
              encryptedClassName="encrypted"
            />
          </h1>
        </Magnet>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
        >
          I'm a student who loves designing and building for the web and currently learning full-stack (MERN) and improving my portfolio step by step.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.4 }}
        >
          I’m still pretty new to the world of frontend development and design, but I’m 
          really enjoying the process of exploring how it all works. I’m always looking 
          for new things to learn and ways to expand what I know.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
        >
          <Magnet padding={50} magnetStrength={3}>
            <a href="#projects" className="btn">Check out my work</a>
          </Magnet>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
