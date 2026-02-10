import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Resume } from './components/Resume/Resume';
import React, { useState, useEffect } from 'react';

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.App}>
      <div className="App">
        <div className={styles.mouseGlow} style={{
          left: `${position.x - 750}px`,
          top: `${position.y - 750}px`,
        }}
        ></div>
        <div className={styles.firstPage}>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
  )
}

export default App
