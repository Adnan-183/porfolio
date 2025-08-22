import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from '../types';
import MagneticButton from './MagneticButton';

const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-white/70 dark:bg-dark-900/70 backdrop-blur-2xl shadow-2xl border-b border-primary-200/20 dark:border-primary-700/20 py-2'
            : 'bg-transparent py-6'
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
              <motion.a
                href="#home"
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="relative">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-2xl flex items-center justify-center shadow-xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Code2 className="w-6 h-6 text-white" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500 via-secondary-500 to-accent-500 rounded-2xl blur-lg opacity-50"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
                <div className="flex flex-col">
                  <motion.span
                    className="text-xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent"
                    animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Muhammad Adnan
                  </motion.span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                    Mobile Developer
                  </span>
                </div>
              </motion.a>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <MagneticButton>
                    <a
                      href={link.href}
                      className="relative px-6 py-3 text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 rounded-xl group font-medium"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-accent-500/10 rounded-xl opacity-0 group-hover:opacity-100"
                        layoutId="navbar-hover"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                    </a>
                  </MagneticButton>
                </motion.div>
              ))}
              
              {/* Theme Toggle */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <MagneticButton>
                  <button
                    onClick={toggleDarkMode}
                    className="relative p-3 ml-4 rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 text-neutral-800 dark:text-neutral-200 shadow-lg hover:shadow-glow transition-all duration-300 group"
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    <AnimatePresence mode="wait">
                      {darkMode ? (
                        <motion.div
                          key="sun"
                          initial={{ rotate: -180, opacity: 0, scale: 0 }}
                          animate={{ rotate: 0, opacity: 1, scale: 1 }}
                          exit={{ rotate: 180, opacity: 0, scale: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Sun size={20} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="moon"
                          initial={{ rotate: -180, opacity: 0, scale: 0 }}
                          animate={{ rotate: 0, opacity: 1, scale: 1 }}
                          exit={{ rotate: 180, opacity: 0, scale: 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <Moon size={20} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </MagneticButton>
              </motion.div>
            </nav>

            {/* Mobile Menu Controls */}
            <div className="flex items-center space-x-3 md:hidden">
              <MagneticButton>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-lg"
                  aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </MagneticButton>

              <MagneticButton>
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-lg"
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
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-20 left-0 right-0 z-40 md:hidden bg-white/90 dark:bg-dark-900/90 backdrop-blur-2xl border-b border-primary-200/20 dark:border-primary-700/20 shadow-2xl"
          >
            <div className="container mx-auto px-4 py-8 space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="block py-4 px-6 text-lg font-medium text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gradient-to-r hover:from-primary-500/10 hover:to-secondary-500/10 rounded-xl transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5" />
                    <span>{link.label}</span>
                  </div>
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