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
    <div className="bg-dark-navy w-full min-h-screen overflow-hidden relative max-[830px]:h-auto max-[830px]:overflow-auto">
      <div
        className="fixed w-[1500px] h-[1500px] rounded-full pointer-events-none z-[999] overflow-hidden bg-[radial-gradient(circle,_rgba(0,61,144,0.28)_0%,_rgba(0,61,144,0)_70%)] max-[830px]:hidden"
        style={{
          left: `${position.x - 750}px`,
          top: `${position.y - 750}px`,
        }}
      ></div>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
