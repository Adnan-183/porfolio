import { motion } from 'framer-motion';
import { Github, Linkedin, Heart, Coffee, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <motion.div
            className="mb-8 md:mb-0 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Muhammad Adnan
              </h3>
            </div>
            <p className="text-slate-300 text-lg font-medium">
              Mobile App Developer
            </p>
            <p className="text-slate-400 text-sm mt-2 max-w-md">
              Crafting beautiful, performant mobile experiences with Flutter.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center space-x-4 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://github.com/Dani-183"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github size={18} className="text-slate-300 hover:text-white transition-colors" />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/adnan-moeen-128679209"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-blue-400 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="text-slate-300 hover:text-white transition-colors" />
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-white/10 mt-12 pt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            {/* Copyright */}
            <motion.p
              className="text-slate-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              © {currentYear} Muhammad Adnan. All rights reserved.
            </motion.p>

            {/* Made with Love */}
            <motion.div
              className="flex items-center space-x-2 text-slate-400 text-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-current" />
              </motion.div>
              <span>and</span>
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Coffee className="w-4 h-4 text-amber-400" />
              </motion.div>
              <span>in Pakistan</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Back to Top */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#home"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 text-blue-300 hover:text-white rounded-xl transition-all duration-300 hover:bg-blue-600/40"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm font-medium">Back to Top</span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↑
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;