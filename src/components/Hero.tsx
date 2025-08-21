import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-12 overflow-hidden bg-gray-50 dark:bg-dark-900"
    >
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary-400 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-8 relative inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-dark-800 shadow-xl">
              <img
                src="/images/mypic.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-2 -right-2 bg-primary-500 text-white p-2 rounded-full shadow-lg">
              <span className="block w-3 h-3 rounded-full bg-green-400"></span>
            </div> */}
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Mobile App Developer
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I build fast, beautiful, and reliable cross-platform applications. I specialize in crafting high-performance mobile apps using Flutter, with a deep focus on clean architecture, state management, and smooth user experiences. Whether it's building from scratch or scaling existing projects, I bring a sharp eye for detail and a commitment to writing efficient, maintainable code that delivers real impact.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white dark:bg-dark-800 hover:bg-gray-100 dark:hover:bg-dark-700 text-gray-900 dark:text-white border border-gray-300 dark:border-dark-700 font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#projects"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default Hero;

