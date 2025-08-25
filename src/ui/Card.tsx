import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      className={`
        bg-white dark:bg-gray-800 
        rounded-2xl shadow-lg hover:shadow-2xl 
        transition-all duration-300 
        border border-gray-100 dark:border-gray-700
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;