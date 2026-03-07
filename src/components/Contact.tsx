import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const ease = [0.22, 1, 0.36, 1] as const;

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-container">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          <h3>Let's talk!</h3>
          <p>I'm always open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          <ul className="contact-details">
            <li><FaEnvelope /> jeff.gentapanan2004525@gmail.com</li>
            <li><FaPhoneAlt /> 09276886821</li>
            <li><FaLinkedin /> <a href="https://www.linkedin.com/in/jeff-gentapanan-4b76b8370/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
            <li><FaMapMarkerAlt /> Philippines</li>
          </ul>
        </motion.div>

        <motion.form 
          className="contact-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" rows={5} required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
