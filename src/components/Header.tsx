import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from '../types';
import MagneticButton from './MagneticButton';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollAnimation();

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl shadow-2xl border-b border-blue-200/30 dark:border-blue-700/30 py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#home"
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden">
                    <Code2 className="w-5 h-5 text-white" />
                    <motion.div 
                      className="absolute inset-0 bg-white/20 rounded-2xl"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                    Muhammad Adnan
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Mobile Developer
                  </span>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <MagneticButton>
                    <a
                      href={link.href}
                      className="relative px-5 py-3 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 rounded-xl group font-semibold"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm" />
                      <div className="absolute inset-0 border border-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </MagneticButton>
                </motion.div>
              ))}
              
              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <MagneticButton>
                  <button
                    onClick={toggleDarkMode}
                    className="relative p-3 ml-4 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-800 dark:text-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 dark:border-white/10"
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    <AnimatePresence mode="wait">
                      {darkMode ? (
                        <motion.div
                          key="sun"
                          initial={{ rotate: -180, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 180, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Sun size={20} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="moon"
                          initial={{ rotate: -180, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 180, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Moon size={20} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </MagneticButton>
              </motion.div>
            </nav>

            {/* Mobile Menu Controls */}
            <div className="flex items-center space-x-2 md:hidden">
              <MagneticButton>
                <button
                  onClick={toggleDarkMode}
                  className="p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-800 dark:text-slate-200 shadow-xl border border-white/50 dark:border-white/10"
                  aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </MagneticButton>

              <MagneticButton>
                <button
                  onClick={toggleMobileMenu}
                  className="p-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 text-slate-800 dark:text-slate-200 shadow-xl border border-white/50 dark:border-white/10"
                  aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X size={18} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu size={18} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-20 left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border-b border-blue-200/30 dark:border-blue-700/30 shadow-2xl"
          >
            <div className="container mx-auto px-6 py-8 space-y-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="block py-4 px-6 text-lg font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-emerald-500/10 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200/30 dark:hover:border-blue-700/30"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;