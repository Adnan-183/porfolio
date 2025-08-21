import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Muhammad Adnan | Mobile App Developer";

    // Create placeholder SVG directories and files for development purposes
    // These would be replaced with actual assets in production
    const createPlaceholders = async () => {
      try {
        // This is just for development as the actual SVGs would be provided in production
        console.log('In production, actual SVG files would be used instead of placeholders');
      } catch (error) {
        console.error('Error creating placeholders:', error);
      }
    };

    createPlaceholders();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white">
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