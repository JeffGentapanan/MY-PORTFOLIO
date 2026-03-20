import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/animations/CustomCursor';
import ScrollProgress from './components/animations/ScrollProgress';
import HeartRate from './components/animations/HeartRate';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="app" style={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <ScrollProgress />
      <CustomCursor />
      <HeartRate color="#ff0000" speed={2.5} />
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Header />
        <main className="main-content">
          <Hero />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
