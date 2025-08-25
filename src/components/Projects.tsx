import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectData } from '../data/projects-data';
import ProjectCard from './ProjectCard';
import { Sparkles, Rocket, Code2, Zap, Star, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';

const Projects = () => {
  const ref = useRef<HTMLElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    <section
      ref={ref}
      id="projects"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Simplified Background */}
      <motion.div 
        className="absolute inset-0 opacity-40"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={inViewRef}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-blue-200/50 dark:border-blue-700/50 rounded-full text-blue-600 dark:text-blue-400 font-semibold mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Rocket className="w-4 h-4" />
            <span>Featured Portfolio</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-slate-800 dark:text-white mb-2">My Creative</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          {/* Decorative Line */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full" />
          </div>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            A curated collection of mobile applications built with{' '}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">Flutter</span>
            , featuring cutting-edge architecture and seamless user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.6 + index * 0.1
              }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
            <Rocket className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Ready to Build Something{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Extraordinary
            </span>
            ?
          </h3>

          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to transform your ideas into powerful mobile applications.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <MagneticButton>
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#skills"
                className="px-8 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-xl text-slate-800 dark:text-white border-2 border-slate-300/30 hover:border-blue-500/50 font-bold text-lg rounded-2xl transition-all duration-300 shadow-lg flex items-center space-x-2"
              >
                <span>View My Skills</span>
                <Sparkles className="w-5 h-5" />
              </a>
            </MagneticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-10 max-w-lg mx-auto">
            {[
              { number: '12+', label: 'Apps Published' },
              { number: '50+', label: 'Projects' },
              { number: '100%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;