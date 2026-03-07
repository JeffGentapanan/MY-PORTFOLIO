import React from 'react';
import { motion } from 'framer-motion';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from './ResumePDF';
import './Resume.css';

const ease = [0.22, 1, 0.36, 1] as const;

const Resume: React.FC = () => {
  return (
    <section id="resume">
      <div className="resume-container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
        >
          Resume & Info
        </motion.h2>

        <motion.div 
          className="quick-info"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          <div className="info-item">
            <span>Name:</span>
            <p>Jeff Gentapanan</p>
          </div>
          <div className="info-item">
            <span>Address:</span>
            <p>Igcocolo, Guimbal, Iloilo</p>
          </div>
          <div className="info-item">
            <span>Education:</span>
            <p>BSIT in Western Institute of Technology</p>
          </div>
          <div className="info-item">
            <span>Birthday:</span>
            <p>May 25, 2004</p>
          </div>
        </motion.div>

        <motion.p
          className="resume-intro"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
        >
          You can view and download my resume via the link below.
        </motion.p>

        <motion.div 
          className="resume-actions"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
        >
          <a 
            href="https://drive.google.com/file/d/1zBMBMWVx96HQH1sKYThS32GJTFgdBkIW/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn"
          >
            View My Resume
          </a>

          <PDFDownloadLink 
            document={<ResumePDF />} 
            fileName="Jeff-Gentapanan-Resume.pdf"
            className="btn outline"
          >
            {({ loading }) => 
              loading ? 'Preparing PDF...' : 'Download PDF'
            }
          </PDFDownloadLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
