import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleSystem from './components/ParticleSystem';
import CodeRain from './components/CodeRain';
import LoadingSpinner from './components/ui/LoadingSpinner';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

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
      clearTimeout(timer);
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-3xl flex items-center justify-center shadow-2xl">
            <LoadingSpinner size="lg" color="text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Loading Portfolio
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Preparing something amazing for you...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-white overflow-x-hidden relative">
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