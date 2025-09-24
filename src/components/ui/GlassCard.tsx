import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  gradient?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0,
  gradient = false
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay }}
      whileHover={hover ? { 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3 }
      } : undefined}
      className={`
        relative group
        bg-white/10 dark:bg-white/5
        backdrop-blur-xl
        border border-white/20 dark:border-white/10
        rounded-3xl
        shadow-xl hover:shadow-2xl
        transition-all duration-500
        overflow-hidden
        ${gradient ? 'bg-gradient-to-br from-white/20 via-white/10 to-white/5 dark:from-white/10 dark:via-white/5 dark:to-white/2' : ''}
        ${className}
      `}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
           style={{ padding: '1px' }}>
        <div className="w-full h-full rounded-3xl bg-white/10 dark:bg-white/5 backdrop-blur-xl" />
      </div>
    </motion.div>
  );
};

export default GlassCard;