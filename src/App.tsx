import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleSystem from './components/ParticleSystem';
import CodeRain from './components/CodeRain';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Muhammad Adnan | Expert Mobile App Developer";

    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    // Add smooth scroll to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Preload critical images
    const criticalImages = ['/images/mypic.jpeg'];
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white overflow-x-hidden relative">
      {/* Background Effects - Optimized for performance */}
      <ParticleSystem />
      <CodeRain />
      
      {/* Main Content */}
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;