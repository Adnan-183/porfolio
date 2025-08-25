import { motion } from 'framer-motion';
import { ExternalLink, Play, Apple, Globe, Star, Code, Zap } from 'lucide-react';
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

  return (
    <motion.div
      ref={ref}
      className="group relative h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 dark:border-white/10 h-full flex flex-col">
        
        {/* Image Container */}
        <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-t-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10" />
          
          {/* Project Image */}
          <div className="relative h-full flex items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="h-32 w-32 object-contain filter drop-shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Quality Badge */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
            <Star className="w-3 h-3" />
            <span>Premium</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Tech Badge */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Code className="w-3 h-3 text-white" />
            </div>
            <span className="px-3 py-1 text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
              {project.tech}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow leading-relaxed text-sm">
            {project.description}
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-700 dark:text-slate-200 mb-3">
              <Zap className="w-3 h-3 text-emerald-500" />
              <span>Available on:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {/* Play Store Button */}
              {project.googlePlayLink && 
               project.googlePlayLink !== 'In Development' && 
               project.googlePlayLink !== '' && 
               project.googlePlayLink.includes('play.google.com') && (
                <a
                  href={project.googlePlayLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-3 h-3" />
                  <span>Play Store</span>
                </a>
              )}
              
              {/* App Store Button */}
              {project.appStoreLink && 
               project.appStoreLink !== '' && 
               project.appStoreLink.includes('apps.apple.com') && (
                <a
                  href={project.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Apple className="w-3 h-3" />
                  <span>App Store</span>
                </a>
              )}
              
              {/* In Development Badge */}
              {project.googlePlayLink === 'In Development' && (
                <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold rounded-xl shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  <span>In Development</span>
                </div>
              )}
              
              {/* View App Button */}
              {(!project.googlePlayLink || project.googlePlayLink === '' || project.googlePlayLink === 'In Development') && 
               (!project.appStoreLink || project.appStoreLink === '') && 
               project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Globe className="w-3 h-3" />
                  <span>View App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              
              {/* Coming Soon Badge */}
              {(!project.googlePlayLink || project.googlePlayLink === '' || project.googlePlayLink === 'In Development') && 
               (!project.appStoreLink || project.appStoreLink === '') && 
               !project.link && (
                 <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-400 to-gray-500 text-white text-sm font-bold rounded-xl shadow-lg">
                   <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                   <span>Coming Soon</span>
                 </div>
               )}
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;