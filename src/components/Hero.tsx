import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Code, Smartphone } from 'lucide-react';

const FloatingElement = ({ children, delay = 0, duration = 6 }: { children: React.ReactNode, delay?: number, duration?: number }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, 0],
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

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-12 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-primary-50/30 to-secondary-50/30 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-secondary-400/20 to-accent-400/20 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-accent-400/10 to-primary-400/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingElement delay={0} duration={8}>
          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
        </FloatingElement>
        
        <FloatingElement delay={2} duration={10}>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-secondary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Smartphone className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
          </div>
        </FloatingElement>
        
        <FloatingElement delay={4} duration={12}>
          <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Sparkles className="w-6 h-6 text-accent-600 dark:text-accent-400" />
          </div>
        </FloatingElement>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            className="mb-12 relative inline-block"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-dark-700 shadow-2xl relative z-10">
                <img
                  src="/images/mypic.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-spin" style={{ animationDuration: '8s' }}></div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-accent-500/30 blur-xl animate-pulse-slow"></div>
              
              {/* Status Indicator */}
              <motion.div
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-green-500 p-3 rounded-full shadow-lg z-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-4 h-4 rounded-full bg-white"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-neutral-800 dark:text-white">Mobile App</span>
              <br />
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
                Developer
              </span>
            </h1>
            
            <motion.div
              className="flex items-center justify-center space-x-2 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="h-1 w-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
              <Sparkles className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <div className="h-1 w-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I build <span className="text-primary-600 dark:text-primary-400 font-semibold">fast</span>, 
            <span className="text-secondary-600 dark:text-secondary-400 font-semibold"> beautiful</span>, and 
            <span className="text-accent-600 dark:text-accent-400 font-semibold"> reliable</span> cross-platform applications. 
            Specializing in Flutter with clean architecture, advanced state management, and smooth user experiences 
            that deliver real impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>View My Work</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowDown className="w-5 h-5 rotate-[-90deg]" />
                </motion.div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.a
              href="#contact"
              className="group relative px-8 py-4 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm text-neutral-800 dark:text-white border-2 border-neutral-200 dark:border-neutral-700 hover:border-primary-500 dark:hover:border-primary-400 font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: '50+', label: 'Projects' },
              { number: '3+', label: 'Years Exp' },
              { number: '100%', label: 'Satisfaction' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#projects"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-neutral-500 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
      >
        <span className="text-sm mb-2 font-medium">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} className="group-hover:text-primary-600 dark:group-hover:text-primary-400" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;