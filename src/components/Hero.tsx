import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Code, Smartphone, Zap, Star, Rocket } from 'lucide-react';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';

const FloatingElement = ({ 
  children, 
  delay = 0, 
  duration = 6,
  className = ""
}: { 
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) => (
  <motion.div
    className={className}
    animate={{
      y: [0, -30, 0],
      rotate: [0, 10, -10, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      transition={{ duration: 2, delay, ease: "easeInOut" }}
      className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-primary-500"
    >
      {text}
    </motion.span>
  );
};

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-12 overflow-hidden"
    >
      {/* Advanced Background */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, opacity }}
      >
        {/* Neural Network Background */}
        <div className="absolute inset-0 bg-neural-network opacity-30" />
        
        {/* Animated Gradient Mesh */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(217, 70, 239, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(217, 70, 239, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 60%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 60%, rgba(14, 165, 233, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(217, 70, 239, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Morphing Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 blur-3xl"
          animate={{ 
            borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-400/20 to-accent-400/20 blur-3xl"
          animate={{ 
            borderRadius: ["30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%"],
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
      </motion.div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement delay={0} duration={12} className="absolute top-1/4 left-1/6">
          <motion.div 
            className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.2, rotate: 15 }}
          >
            <Code className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </motion.div>
        </FloatingElement>
        
        <FloatingElement delay={2} duration={15} className="absolute top-1/3 right-1/6">
          <motion.div 
            className="w-16 h-16 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.2, rotate: -15 }}
          >
            <Smartphone className="w-8 h-8 text-secondary-600 dark:text-secondary-400" />
          </motion.div>
        </FloatingElement>
        
        <FloatingElement delay={4} duration={18} className="absolute bottom-1/3 left-1/3">
          <motion.div 
            className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.2, rotate: 15 }}
          >
            <Sparkles className="w-8 h-8 text-accent-600 dark:text-accent-400" />
          </motion.div>
        </FloatingElement>

        <FloatingElement delay={1} duration={10} className="absolute top-1/2 right-1/3">
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-primary-500/15 to-accent-500/15 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.3, rotate: -20 }}
          >
            <Zap className="w-6 h-6 text-primary-500" />
          </motion.div>
        </FloatingElement>

        <FloatingElement delay={3} duration={14} className="absolute bottom-1/4 right-1/5">
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-secondary-500/15 to-primary-500/15 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.3, rotate: 25 }}
          >
            <Star className="w-6 h-6 text-secondary-500" />
          </motion.div>
        </FloatingElement>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Profile Section */}
          <motion.div
            className="mb-16 relative inline-block"
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Profile Image */}
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl relative z-10 mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/mypic.jpeg"
                  alt="Muhammad Adnan - Mobile App Developer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-transparent to-transparent" />
              </motion.div>
              
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute inset-[-10px] rounded-full border border-primary-400/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 blur-2xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Status Indicator */}
              <motion.div
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-400 to-green-500 p-4 rounded-full shadow-xl z-20 border-4 border-white dark:border-dark-900"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                whileHover={{ scale: 1.2 }}
              >
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.span 
                className="block text-neutral-800 dark:text-white mb-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Mobile App
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 200%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity }}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <TypewriterText text="Developer" delay={1.2} />
              </motion.span>
            </motion.h1>
            
            {/* Decorative Elements */}
            <motion.div
              className="flex items-center justify-center space-x-4 mt-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <motion.div 
                className="h-1 w-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 1, delay: 1.8 }}
              />
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Rocket className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </motion.div>
              <motion.div 
                className="h-1 w-20 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full"
                animate={{ scaleX: [0, 1] }}
                transition={{ duration: 1, delay: 1.8 }}
              />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-300 max-w-5xl mx-auto leading-relaxed font-light">
              I craft <motion.span 
                className="text-primary-600 dark:text-primary-400 font-semibold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                exceptional
              </motion.span>, 
              <motion.span 
                className="text-secondary-600 dark:text-secondary-400 font-semibold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {" "}innovative
              </motion.span>, and 
              <motion.span 
                className="text-accent-600 dark:text-accent-400 font-semibold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {" "}performant
              </motion.span> cross-platform mobile applications using Flutter. 
              Specializing in clean architecture, advanced state management, and creating 
              seamless user experiences that drive real business impact.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <MagneticButton>
              <motion.a
                href="#projects"
                className="group relative px-10 py-5 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white font-bold text-lg rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ backgroundSize: '200% 200%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Explore My Work</span>
                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown className="w-6 h-6 rotate-[-90deg]" />
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
                href="#contact"
                className="group relative px-10 py-5 bg-white/10 dark:bg-white/5 backdrop-blur-xl text-neutral-800 dark:text-white border-2 border-neutral-300/30 dark:border-neutral-600/30 hover:border-primary-500/50 dark:hover:border-primary-400/50 font-bold text-lg rounded-2xl transition-all duration-500 shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center space-x-3">
                  <span>Let's Connect</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-6 h-6" />
                  </motion.div>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.a>
            </MagneticButton>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { number: '50+', label: 'Projects Delivered', icon: Rocket },
              { number: '3+', label: 'Years Experience', icon: Star },
              { number: '100%', label: 'Client Satisfaction', icon: Sparkles }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:shadow-glow transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </motion.div>
                <motion.div
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.6 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-neutral-600 dark:text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <MagneticButton>
          <a
            href="#projects"
            className="flex flex-col items-center text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
          >
            <motion.span 
              className="text-sm mb-3 font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Discover More
            </motion.span>
            <motion.div
              className="relative"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={24} className="group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              <motion.div
                className="absolute inset-0 bg-primary-500/20 rounded-full blur-lg"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </a>
        </MagneticButton>
      </motion.div>
    </section>
  );
};

export default Hero;