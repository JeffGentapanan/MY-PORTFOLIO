import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'var(--accent)', 
        transformOrigin: '0%',
        zIndex: 9999, 
      }}
    />
  );
};

export default ScrollProgress;
