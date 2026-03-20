import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaTools, FaJs, FaCss3Alt, FaHtml5, FaReact, 
  FaGithub, FaBook, FaServer, FaFilePdf, FaFigma
} from 'react-icons/fa';
import { SiTypescript, SiFramer, SiVite, SiMongodb } from 'react-icons/si';
import TiltCard from './animations/TiltCard';
import './Skills.css';

const ease = [0.22, 1, 0.36, 1] as const;

const skillCategories = [
  {
    title: 'Languages',
    icon: <FaCode />,
    skills: [
      { name: 'JavaScript (ES6+)', icon: <FaJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'HTML5 (Semantic)', icon: <FaHtml5 /> },
      { name: 'CSS3 (Modern)', icon: <FaCss3Alt /> }
    ]
  },
  {
    title: 'Libraries',
    icon: <FaBook />,
    skills: [
      { name: 'React 19', icon: <FaReact /> },
      { name: 'Node.js & Express', icon: <FaServer /> },
      { name: 'Framer Motion', icon: <SiFramer /> },
      { name: '@react-pdf', icon: <FaFilePdf /> }
    ]
  },
  {
    title: 'Tools',
    icon: <FaTools />,
    skills: [
      { name: 'Vite (Build Tool)', icon: <SiVite /> },
      { name: 'Git & GitHub', icon: <FaGithub /> },
      { name: 'Figma (UI/UX)', icon: <FaFigma /> },
      { name: 'MongoDB', icon: <SiMongodb /> }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
      >
        My Expertise
      </motion.h2>
      
      <div className="grid">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease, delay: index * 0.15 }}
            style={{ perspective: 1000 }}
          >
            <TiltCard className="skill-category">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <ul>
                {category.skills.map((skill, sIndex) => (
                  <li key={sIndex}>
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
