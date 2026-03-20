import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SpotlightCard from './animations/SpotlightCard';
import projectPreview from '../assets/todos-preview.png';
import studyusPreview from '../assets/studyus-preview.png';
import './Projects.css';

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    title: "Awesome Todo's App",
    description: "A full-stack task management application with a decoupled client-server architecture. Features a clean user interface and persistent data storage.",
    image: projectPreview,
    github: "https://github.com/JeffGentapanan/awesometodosapp.git",
    link: "https://awesometodosapp-otag.onrender.com",
    tags: ["React", "Vite", "Node.js", "Express", "JavaScript", "HTML/CSS"]
  },
  {
    title: "StudyUS",
    description: "An intuitive collaborative study platform design. StudyUS focuses on connecting students and streamlining resource management to enhance group learning experiences.",
    image: studyusPreview,
    github: "#",
    link: "https://www.figma.com/design/0uqB0FEeRu1delexuKWxOa/StudyUS?node-id=0-1&t=DixsH0kV5ArFLCg1-1",
    tags: ["UI/UX Design", "Figma", "Interaction Design", "EdTech"]
  }
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentIndex];

  return (
    <section id="projects">
      <motion.div 
        className="projects-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
      >
        <h2>Featured Projects</h2>
        
        <div className="project-navigation">
          <button onClick={handlePrev} className="nav-btn prev" aria-label="Previous project">
            <FaChevronLeft />
          </button>
          <button onClick={handleNext} className="nav-btn next" aria-label="Next project">
            <FaChevronRight />
          </button>
        </div>
      </motion.div>

      <div className="project-slider">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease }}
            className="single-project-container"
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
                  <div className="project-header-row">
                    <h3>{project.title}</h3>
                    <span className="project-counter">
                      PROJECT 0{currentIndex + 1} / 0{projects.length}
                    </span>
                  </div>
                  <p>{project.description}</p>
                  
                  <div className="stack-container">
                    <span className="stack-label">TECH STACK</span>
                    <ul className="tags">
                      {project.tags.map(tag => <li key={tag}>{tag}</li>)}
                    </ul>
                  </div>
                  
                  <div className="project-links">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                    )}
                    <a href={project.link} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Live Demo</a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
