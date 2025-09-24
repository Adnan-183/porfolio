import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Code, Smartphone, Zap, Star, Rocket, Download, Award, Users, Coffee } from 'lucide-react';
import { useRef } from 'react';
import MagneticButton from './MagneticButton';
import AnimatedText from './ui/AnimatedText';
import GlassCard from './ui/GlassCard';
import { fadeInUp, staggerContainer, floatingAnimation } from '../utils/animations';

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

  const achievements = [
    { number: '50+', label: 'Projects Delivered', icon: Rocket, color: 'from-blue-500 to-cyan-500' },
    { number: '3+', label: 'Years Experience', icon: Award, color: 'from-purple-500 to-pink-500' },
    { number: '100%', label: 'Client Satisfaction', icon: Users, color: 'from-emerald-500 to-teal-500' },
    { number: '24/7', label: 'Support Available', icon: Coffee, color: 'from-amber-500 to-orange-500' }
  ];

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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-emerald-500/20" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </motion.div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div className="absolute top-1/4 left-1/6 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl" animate={floatingAnimation} />
        <motion.div className="absolute bottom-1/3 right-1/6 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl" animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }} />
      </div>

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

      <motion.div 
        className="container mx-auto px-4 md:px-6 relative z-10"
        variants={staggerContainer} initial="hidden" animate="visible">
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
              <GlassCard hover={false} className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto p-1">
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
              </GlassCard>
              
              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500/50"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Status Indicator */}
              <motion.div
                className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-full shadow-xl z-20 border-4 border-white dark:border-slate-900"
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
            <AnimatedText 
              text="Mobile App Developer"
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent"
              delay={0.3}
            />
            
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
            <GlassCard className="p-8 max-w-4xl mx-auto" gradient>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-700 dark:text-slate-200 leading-relaxed">
                I craft <span className="text-blue-600 dark:text-blue-400 font-bold bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-lg">exceptional</span>, 
                <span className="text-purple-600 dark:text-purple-400 font-bold bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-lg mx-2">innovative</span>, and 
                <span className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-lg">performant</span> cross-platform 
                mobile applications using Flutter. Specializing in clean architecture and creating 
                seamless user experiences.
              </p>
            </GlassCard>
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
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center space-x-3 border border-white/20"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
              </a>
            </MagneticButton>
            
            <MagneticButton>
              <a
                href="/pdf/Adnan Moeen.pdf"
                download
                className="group px-10 py-5 bg-white/20 backdrop-blur-xl text-slate-800 dark:text-white border-2 border-slate-300/30 hover:border-blue-500/50 font-bold text-lg rounded-2xl transition-all duration-500 shadow-xl hover:shadow-2xl flex items-center space-x-3"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </a>
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {achievements.map((achievement, index) => (
              <GlassCard
                key={achievement.label}
                className="p-6 text-center group"
                whileHover={{ scale: 1.05 }}
                delay={index * 0.1}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <motion.div 
                  className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {achievement.number}
                </motion.div>
                <div className="text-slate-600 dark:text-slate-300 text-sm font-semibold">
                  {achievement.label}
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;