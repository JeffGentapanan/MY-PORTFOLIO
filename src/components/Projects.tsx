import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SpotlightCard from './animations/SpotlightCard';
import './Projects.css';

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    title: "Awesome Todo's App",
    description: "A full-stack task management application with a decoupled client-server architecture. Features a clean user interface and persistent data storage.",
    image: "todos-preview.png",
    github: "https://github.com/JeffGentapanan/awesometodosapp.git",
    link: "https://awesometodosapp-otag.onrender.com",
    tags: ["React", "Vite", "Node.js", "Express", "JavaScript", "HTML/CSS"]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease, delay: index * 0.15 }}
          >
            <SpotlightCard className="project-card-wrapper" spotlightColor="rgba(255, 255, 255, 0.1)">
              <div className="project-card-static">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-image-link">
                  <div className="project-browser-frame">
                    <div className="browser-header">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <div className="browser-content">
                      <img src={project.image} alt={`${project.title} Preview`} />
                    </div>
                    <div className="image-overlay">
                      <span>View Live Project</span>
                    </div>
                  </div>
                </a>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  
                  <div className="stack-container">
                    <span className="stack-label">Tech Stack</span>
                    <ul className="tags">
                      {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                    </ul>
                  </div>
                  
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Demo</a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
