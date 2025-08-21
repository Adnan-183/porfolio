// import { motion } from 'framer-motion';
// import { ArrowDown } from 'lucide-react';
//
// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-12 overflow-hidden bg-gray-50 dark:bg-dark-900"
//     >
//       <div className="absolute inset-0 opacity-30 dark:opacity-10">
//         <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-400 rounded-full filter blur-3xl"></div>
//         <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary-400 rounded-full filter blur-3xl"></div>
//       </div>
//
//       <div className="container mx-auto px-4 md:px-6 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             className="mb-8 relative inline-block"
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-xl">
//               <img
//                 src="/images/mypic.jpeg"
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             {/* <div className="absolute -bottom-2 -right-2 bg-primary-500 text-white p-2 rounded-full shadow-lg">
//               <span className="block w-3 h-3 rounded-full bg-green-400"></span>
//             </div> */}
//           </motion.div>
//
//           <motion.h1
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Mobile App Developer
//           </motion.h1>
//
//           <motion.p
//             className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             I build fast, beautiful, and reliable cross-platform applications. I specialize in crafting high-performance mobile apps using Flutter, with a deep focus on clean architecture, state management, and smooth user experiences. Whether it's building from scratch or scaling existing projects, I bring a sharp eye for detail and a commitment to writing efficient, maintainable code that delivers real impact.
//           </motion.p>
//
//           <motion.div
//             className="flex flex-col sm:flex-row justify-center items-center gap-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <a
//               href="#projects"
//               className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
//             >
//               View My Work
//             </a>
//             <a
//               href="#contact"
//               className="px-6 py-3 bg-white dark:bg-dark-800 hover:bg-gray-100 dark:hover:bg-dark-700 text-gray-900 dark:text-white border border-gray-300 dark:border-dark-700 font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
//             >
//               Get In Touch
//             </a>
//           </motion.div>
//         </div>
//       </div>
//
//       <motion.a
//         href="#projects"
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
//       >
//         <span className="text-sm mb-2">Scroll Down</span>
//         <ArrowDown size={20} />
//       </motion.a>
//     </section>
//   );
// };
//
// export default Hero;


import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Code, Smartphone } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState(0);

  const texts = ["Flutter Expert", "Mobile Architect", "App Innovator", "Code Craftsman"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x * 0.05}%`,
            top: `${mousePosition.y * 0.05}%`,
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-700 ease-out"
          style={{
            right: `${mousePosition.x * 0.03}%`,
            bottom: `${mousePosition.y * 0.03}%`,
          }}
        />

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-cyan-300 text-sm mb-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4" />
                Available for Projects
              </motion.div>

              {/* Main Heading */}
              <div className="mb-6">
                <motion.h1
                  className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Premium
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    Mobile Apps
                  </span>
                </motion.h1>

                {/* Rotating Text */}
                <motion.div
                  className="h-16 flex items-center justify-center lg:justify-start"
                  key={currentText}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-2xl lg:text-3xl font-semibold text-purple-300">
                    {texts[currentText]}
                  </span>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                I transform ideas into powerful mobile experiences. Specializing in Flutter development with cutting-edge architecture, pixel-perfect UI, and blazing-fast performance that drives real business results.
              </motion.p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-8 mb-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">50+</div>
                  <div className="text-sm text-gray-400">Apps Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">99%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">24h</div>
                  <div className="text-sm text-gray-400">Quick Response</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <motion.button
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/25"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>

                <motion.button
                  className="px-8 py-4 border-2 border-purple-500/50 text-purple-300 font-semibold rounded-xl backdrop-blur-sm hover:bg-purple-500/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Portfolio
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Profile Image Container */}
              <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
                {/* Rotating Border */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 p-1"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-full h-full bg-slate-900 rounded-full" />
                </motion.div>

                {/* Profile Image */}
                <motion.div
                  className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src="/images/mypic.jpeg"
                    alt="Mobile App Developer"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-purple-500/20" />
                </motion.div>

                {/* Floating Icons */}
                {[
                  { Icon: Code, position: "top-4 right-4", delay: 0.8, color: "text-cyan-400" },
                  { Icon: Smartphone, position: "bottom-4 left-4", delay: 1.2, color: "text-purple-400" },
                  { Icon: Zap, position: "top-1/2 -right-4", delay: 1.0, color: "text-blue-400" },
                ].map(({ Icon, position, delay, color }, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${position} p-3 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700/50 ${color}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="flex flex-col items-center text-gray-400 cursor-pointer group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full mb-2 relative">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full absolute left-1/2 transform -translate-x-1/2 top-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-xs font-medium group-hover:text-cyan-400 transition-colors">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;