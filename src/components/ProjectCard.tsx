import { motion } from 'framer-motion';
import { ExternalLink, Play, Apple, Globe } from 'lucide-react';
import { Project } from '../types';
import { useInView } from 'react-intersection-observer';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="group relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-200/50 dark:border-neutral-700/50 hover:border-primary-300 dark:hover:border-primary-600"
      whileHover={{ y: -8 }}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      <div className="relative z-10 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-64 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 rounded-t-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10"></div>
          
          <div className="relative h-full flex items-center justify-center p-8">
            {project.thumbnail.endsWith('.svg') ? (
              <motion.img
                src={project.thumbnail}
                alt={project.title}
                className="h-32 w-32 object-contain filter drop-shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.img
                src={project.thumbnail}
                alt={project.title}
                className="h-32 w-32 object-contain rounded-2xl shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Tech Badge */}
          <motion.span
            className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 rounded-full mb-4 w-fit"
            whileHover={{ scale: 1.05 }}
          >
            {project.tech}
          </motion.span>

          {/* Title */}
          <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 flex-grow leading-relaxed">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-3">
              Available on:
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
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-4 h-4" />
                  <span>Play Store</span>
                </motion.a>
              )}
              
              {project.appStoreLink && 
               project.appStoreLink !== '' && 
               project.appStoreLink.includes('apps.apple.com') && (
                <motion.a
                  href={project.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-neutral-800 to-neutral-900 text-white text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Apple className="w-4 h-4" />
                  <span>App Store</span>
                </motion.a>
              )}
              
              {project.googlePlayLink === 'In Development' && (
                <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-medium rounded-xl">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>In Development</span>
                </div>
              )}
              
              {(!project.googlePlayLink || project.googlePlayLink === '' || project.googlePlayLink === 'In Development') && 
               (!project.appStoreLink || project.appStoreLink === '') && 
               project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-4 h-4" />
                  <span>View App</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
              
              {/* Show message when no links are available */}
              {(!project.googlePlayLink || project.googlePlayLink === '' || project.googlePlayLink === 'In Development') && 
               (!project.appStoreLink || project.appStoreLink === '') && 
               !project.link && (
                 <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-500 text-white text-sm font-medium rounded-xl">
                   <div className="w-2 h-2 bg-white rounded-full"></div>
                   <span>Coming Soon</span>
                 </div>
               )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;