import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, FaTools, FaReact, FaIcons, FaFilePdf, FaGithub, FaNpm 
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiCss3, SiHtml5, SiVite, SiFramer, SiEslint 
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import TiltCard from './animations/TiltCard';
import './Skills.css';

const ease = [0.22, 1, 0.36, 1] as const;

const skillCategories = [
  {
    title: 'Languages',
    icon: <FaCode />,
    skills: [
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'CSS3', icon: <SiCss3 /> },
      { name: 'HTML5', icon: <SiHtml5 /> }
    ]
  },
  {
    title: 'Libraries',
    icon: <FaReact />,
    skills: [
      { name: 'React 19', icon: <FaReact /> },
      { name: 'Framer Motion', icon: <SiFramer /> },
      { name: 'React Bits', icon: <FaCode style={{ opacity: 0.7 }} /> },
      { name: 'React Icons', icon: <FaIcons /> },
      { name: '@react-pdf', icon: <FaFilePdf /> }
    ]
  },
  {
    title: 'Tools',
    icon: <FaTools />,
    skills: [
      { name: 'Vite', icon: <SiVite /> },
      { name: 'npm', icon: <FaNpm /> },
      { name: 'ESLint', icon: <SiEslint /> },
      { name: 'Git & GitHub', icon: <FaGithub /> },
      { name: 'VS Code', icon: <VscCode /> }
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
