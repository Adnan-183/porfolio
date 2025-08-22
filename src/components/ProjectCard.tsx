import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Play, Apple, Globe, Star, Code, Zap } from 'lucide-react';
import { Project } from '../types';
import { useInView } from 'react-intersection-observer';
import { useRef, MouseEvent } from 'react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    hidden: { opacity: 0, y: 80, scale: 0.8, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group relative perspective-1000"
    >
      <motion.div
        ref={cardRef}
        className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-neural transition-all duration-700 overflow-hidden border border-white/20 dark:border-white/10 h-full flex flex-col"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ 
          y: -15,
          transition: { duration: 0.4, ease: "easeOut" }
        }}
      >
        {/* Gradient Border Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(14, 165, 233, 0.2), rgba(217, 70, 239, 0.2), rgba(16, 185, 129, 0.2))",
              "linear-gradient(45deg, rgba(217, 70, 239, 0.2), rgba(16, 185, 129, 0.2), rgba(14, 165, 233, 0.2))",
              "linear-gradient(45deg, rgba(16, 185, 129, 0.2), rgba(14, 165, 233, 0.2), rgba(217, 70, 239, 0.2))",
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Enhanced Image Container */}
          <div className="relative h-72 bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-100 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 rounded-t-3xl overflow-hidden">
            {/* Animated Background Pattern */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10"
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(217, 70, 239, 0.1), rgba(16, 185, 129, 0.1))",
                  "linear-gradient(135deg, rgba(217, 70, 239, 0.1), rgba(16, 185, 129, 0.1), rgba(14, 165, 233, 0.1))",
                  "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(14, 165, 233, 0.1), rgba(217, 70, 239, 0.1))",
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            {/* Floating Particles */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary-400/30 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            
            <div className="relative h-full flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-700">
              {project.thumbnail.endsWith('.svg') ? (
                <motion.img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-40 w-40 object-contain filter drop-shadow-2xl"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    filter: "drop-shadow(0 20px 40px rgba(14, 165, 233, 0.3))"
                  }}
                  transition={{ duration: 0.6 }}
                />
              ) : (
                <motion.img
                  src={project.thumbnail}
                  alt={project.title}
                  className="h-40 w-40 object-contain rounded-3xl shadow-2xl"
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 15,
                    rotateX: 5,
                  }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </div>

            {/* Overlay Effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />

            {/* Quality Badge */}
            <motion.div
              className="absolute top-4 right-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className="flex items-center space-x-1">
                <Star className="w-3 h-3" />
                <span>Premium</span>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Content */}
          <div className="p-8 flex flex-col flex-grow">
            {/* Tech Badge with Animation */}
            <motion.div
              className="flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Code className="w-4 h-4 text-white" />
              </motion.div>
              <span className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 rounded-full border border-primary-200 dark:border-primary-800">
                {project.tech}
              </span>
            </motion.div>

            {/* Title with Hover Effect */}
            <motion.h3
              className="text-2xl font-bold text-neutral-800 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              {project.title}
            </motion.h3>

            {/* Description */}
            <motion.p
              className="text-neutral-600 dark:text-neutral-300 mb-8 flex-grow leading-relaxed text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              {project.description}
            </motion.p>

            {/* Enhanced Action Buttons */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <div className="flex items-center space-x-2 text-sm font-bold text-neutral-700 dark:text-neutral-200 mb-4">
                <Zap className="w-4 h-4 text-accent-500" />
                <span>Available on:</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.googlePlayLink && 
                 project.googlePlayLink !== 'In Development' && 
                 project.googlePlayLink !== '' && 
                 project.googlePlayLink.includes('play.google.com') && (
                  <motion.a
                    href={project.googlePlayLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-4 h-4" />
                    <span className="relative z-10">Play Store</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </motion.a>
                )}
                
                {project.appStoreLink && 
                 project.appStoreLink !== '' && 
                 project.appStoreLink.includes('apps.apple.com') && (
                  <motion.a
                    href={project.appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Apple className="w-4 h-4" />
                    <span className="relative z-10">App Store</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-neutral-700 to-neutral-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </motion.a>
                )}
                
                {project.googlePlayLink === 'In Development' && (
                  <motion.div
                    className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold rounded-xl shadow-lg"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span>In Development</span>
                  </motion.div>
                )}
                
                {(!project.googlePlayLink || project.googlePlayLink === '' || project.googlePlayLink === 'In Development') && 
                 (!project.appStoreLink || project.appStoreLink === '') && 
                 project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Globe className="w-4 h-4" />
                    <span className="relative z-10">View App</span>
                    <ExternalLink className="w-4 h-4" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-accent-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                  </motion.a>
                )}
                
                {(!project.googlePlayLink || project.googlePlayLink === '' || project.googlePlayLink === 'In Development') && 
                 (!project.appStoreLink || project.appStoreLink === '') && 
                 !project.link && (
                   <motion.div
                     className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-gray-400 to-gray-500 text-white text-sm font-bold rounded-xl shadow-lg"
                     animate={{ opacity: [0.7, 1, 0.7] }}
                     transition={{ duration: 2, repeat: Infinity }}
                   >
                     <motion.div
                       className="w-2 h-2 bg-white rounded-full"
                       animate={{ scale: [1, 1.2, 1] }}
                       transition={{ duration: 1, repeat: Infinity }}
                     />
                     <span>Coming Soon</span>
                   </motion.div>
                 )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-secondary-500/5 to-accent-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(14, 165, 233, 0.05), rgba(217, 70, 239, 0.05), rgba(16, 185, 129, 0.05))",
              "linear-gradient(45deg, rgba(217, 70, 239, 0.05), rgba(16, 185, 129, 0.05), rgba(14, 165, 233, 0.05))",
              "linear-gradient(45deg, rgba(16, 185, 129, 0.05), rgba(14, 165, 233, 0.05), rgba(217, 70, 239, 0.05))",
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;