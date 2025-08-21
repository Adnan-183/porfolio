import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectData } from '../data/projects-data';
import ProjectCard from './ProjectCard';
import { Sparkles, Rocket } from 'lucide-react';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 bg-gradient-to-br from-neutral-50 via-primary-50/20 to-secondary-50/20 dark:from-dark-800 dark:via-dark-900 dark:to-dark-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-secondary-400/10 to-accent-400/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Rocket className="w-4 h-4" />
            <span>Featured Work</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neutral-800 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <motion.div
            className="flex items-center justify-center space-x-2 mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full"></div>
          </motion.div>

          <p className="max-w-3xl mx-auto text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            A showcase of mobile applications built with <span className="text-primary-600 dark:text-primary-400 font-semibold">Flutter</span>, 
            integrated with scalable backend services. All projects are live and published on different platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Let's Build Something Amazing</span>
            <Sparkles className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;