import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Code, Smartphone, Zap, Star, Rocket, Download } from 'lucide-react';
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
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
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
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-12 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      {/* Optimized Background */}
      <motion.div 
        className="absolute inset-0 opacity-60"
        style={{ y, opacity }}
      >
        {/* Simplified gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-emerald-500/10" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      {/* Floating Tech Icons - Hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <FloatingElement delay={0} duration={8} className="absolute top-1/4 left-1/6">
          <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
            <Code className="w-6 h-6 text-blue-600" />
          </div>
        </FloatingElement>
        
        <FloatingElement delay={2} duration={10} className="absolute top-1/3 right-1/6">
          <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
            <Smartphone className="w-6 h-6 text-purple-600" />
          </div>
        </FloatingElement>
        
        <FloatingElement delay={4} duration={12} className="absolute bottom-1/3 left-1/3">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
            <Sparkles className="w-6 h-6 text-emerald-600" />
          </div>
        </FloatingElement>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Section */}
          <motion.div
            className="mb-12 relative inline-block"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Profile Image */}
              <motion.div
                className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl relative z-10 mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/mypic.jpeg"
                  alt="Muhammad Adnan - Mobile App Developer"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent" />
              </motion.div>
              
              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Status Indicator */}
              <motion.div
                className="absolute -bottom-0 -right-0 bg-green-500 p-2 rounded-full shadow-xl z-20 border-4 border-white dark:border-slate-900"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 rounded-full bg-white flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-green-500" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="block text-slate-800 dark:text-white mb-2">
                Mobile App
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            
            {/* Decorative Elements */}
            <div className="flex items-center justify-center space-x-4 mt-6">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <Rocket className="w-6 h-6 text-blue-600" />
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full" />
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              I craft <span className="text-blue-600 font-semibold">exceptional</span>, 
              <span className="text-purple-600 font-semibold"> innovative</span>, and 
              <span className="text-emerald-600 font-semibold"> performant</span> cross-platform 
              mobile applications using Flutter. Specializing in clean architecture and creating 
              seamless user experiences.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <MagneticButton>
              <a
                href="#projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
            
            <MagneticButton>
              <a
                href="/pdf/Adnan Moeen.pdf"
                download
                className="group px-8 py-4 bg-white/20 backdrop-blur-xl text-slate-800 dark:text-white border-2 border-slate-300/30 hover:border-blue-500/50 font-bold text-lg rounded-2xl transition-all duration-300 shadow-lg flex items-center space-x-3"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {[
              { number: '50+', label: 'Projects', icon: Rocket },
              { number: '2+', label: 'Years Exp', icon: Star },
              { number: '100%', label: 'Success Rate', icon: Sparkles }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default Hero;