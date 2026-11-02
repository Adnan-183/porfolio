import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip">
        <Header />
        <main>
          <Hero />
          <Services />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
