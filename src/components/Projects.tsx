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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <section
      ref={ref}
      id="projects"
      className="py-32 relative overflow-hidden"
    >
      {/* Advanced Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/30 dark:from-dark-800 dark:via-dark-900 dark:to-dark-800" />
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-gradient-to-r from-secondary-400/10 to-accent-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Code Pattern Overlay */}
        <div className="absolute inset-0 bg-code-pattern opacity-5" />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={inViewRef}>
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          {/* Floating Badge */}
          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-3 bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl border border-primary-200/50 dark:border-primary-700/50 rounded-full text-primary-600 dark:text-primary-400 font-semibold mb-8 shadow-xl"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Rocket className="w-5 h-5" />
            </motion.div>
            <span>Featured Portfolio</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span 
              className="block text-neutral-800 dark:text-white mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              My Creative
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent"
              style={{ backgroundSize: '200% 200%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 4, repeat: Infinity }}
              whileHover={{ scale: 1.02 }}
            >
              Projects
            </motion.span>
          </motion.h2>
          
          {/* Decorative Line */}
          <motion.div
            className="flex items-center justify-center space-x-4 mb-10"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
            />
            <motion.div
              className="w-3 h-3 bg-accent-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.2 }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="max-w-4xl mx-auto text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            A curated collection of mobile applications built with{' '}
            <motion.span 
              className="text-primary-600 dark:text-primary-400 font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Flutter
            </motion.span>
            , featuring cutting-edge architecture, seamless user experiences, and robust backend integrations. 
            Each project represents a unique solution crafted with precision and innovation.
          </motion.p>

          {/* Tech Stack Icons */}
          <motion.div
            className="flex items-center justify-center space-x-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { icon: Code2, label: 'Flutter', color: 'from-blue-500 to-cyan-500' },
              { icon: Zap, label: 'Performance', color: 'from-yellow-500 to-orange-500' },
              { icon: Star, label: 'Quality', color: 'from-purple-500 to-pink-500' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex flex-col items-center group"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-6 h-6" />
                </motion.div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 font-medium">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.8 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-br from-white/60 via-primary-50/80 to-secondary-50/60 dark:from-dark-800/60 dark:via-dark-700/80 dark:to-dark-800/60 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-12 shadow-2xl"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl flex items-center justify-center shadow-xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            whileHover={{ scale: 1.1 }}
          >
            <Rocket className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h3
            className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.7 }}
          >
            Ready to Build Something{' '}
            <motion.span
              className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Extraordinary
            </motion.span>
            ?
          </motion.h3>

          <motion.p
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.9 }}
          >
            Let's collaborate to transform your innovative ideas into powerful, user-centric mobile applications 
            that drive engagement and deliver exceptional results.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 2.1 }}
          >
            <MagneticButton>
              <motion.a
                href="#contact"
                className="group relative px-10 py-5 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white font-bold text-lg rounded-2xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundSize: '200% 200%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Start Your Project</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-600 via-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.a>
            </MagneticButton>

            <MagneticButton>
              <motion.a
                href="#skills"
                className="group relative px-10 py-5 bg-white/20 dark:bg-white/10 backdrop-blur-xl text-neutral-800 dark:text-white border-2 border-neutral-300/30 dark:border-neutral-600/30 hover:border-primary-500/50 dark:hover:border-primary-400/50 font-bold text-lg rounded-2xl transition-all duration-500 shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>View My Skills</span>
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-6 h-6" />
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.a>
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 2.3 }}
          >
            {[
              { number: '12+', label: 'Apps Published' },
              { number: '50+', label: 'Projects Completed' },
              { number: '100%', label: 'Success Rate' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 2.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-neutral-600 dark:text-neutral-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;