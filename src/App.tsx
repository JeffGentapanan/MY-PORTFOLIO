import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Waves from './components/animations/Waves';
import CustomCursor from './components/animations/CustomCursor';
import ScrollProgress from './components/animations/ScrollProgress';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <ScrollProgress />
      <CustomCursor />
      <div className="background-fixed">
        <Waves 
          lineColor="rgba(255, 255, 255, 0.05)" 
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
        />
      </div>
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
  );
};

export default App;
