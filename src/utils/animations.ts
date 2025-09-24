import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotate: -5
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const slideInFromBottom: Variants = {
  hidden: { 
    opacity: 0, 
    y: 100,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const glowAnimation = {
  boxShadow: [
    "0 0 20px rgba(59, 130, 246, 0.3)",
    "0 0 40px rgba(59, 130, 246, 0.6)",
    "0 0 20px rgba(59, 130, 246, 0.3)"
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};