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

    // Add custom cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-6 h-6 bg-primary-500/20 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out';
    cursor.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(cursor);

    const updateCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    const scaleCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
    };

    const resetCursor = () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    document.addEventListener('mousemove', updateCursor);
    
    // Add cursor effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', scaleCursor);
      el.addEventListener('mouseleave', resetCursor);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      document.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', scaleCursor);
        el.removeEventListener('mouseleave', resetCursor);
      });
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 text-neutral-900 dark:text-white overflow-x-hidden relative">
      {/* Background Effects */}
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
      
      {/* Performance Optimization */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-500/[0.02] to-transparent" />
      </div>
    </div>
  );
}

export default App;