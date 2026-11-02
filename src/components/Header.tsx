import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from '../types';
import { profile } from '../data/profile';
import { useTheme } from '../hooks/useTheme';
import { useLocalTime } from '../hooks/useLocalTime';

const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const time = useLocalTime(profile.timeZone);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-bg/90 backdrop-blur transition-[border-color] duration-300 ${
        scrolled || menuOpen ? 'border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-14 items-center justify-between gap-6">
        <a href="#home" className="font-serif text-xl leading-none tracking-tight">
          {profile.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="link text-sm">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 text-sm">
          <span className="hidden font-mono text-xs text-muted lg:inline" title="My local time">
            Lahore {time}
          </span>
          <button onClick={toggleTheme} className="link text-sm" aria-label="Toggle colour theme">
            {isDark ? 'Light' : 'Dark'}
          </button>
          <a href={profile.resume} download={profile.resumeFileName} className="link-u hidden sm:inline-flex">
            Résumé ↓
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="link text-sm md:hidden"
            aria-expanded={menuOpen}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
            aria-label="Mobile"
          >
            <ul className="container-page pb-6">
              {navLinks.map((link) => (
                <li key={link.href} className="border-t border-line">
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-serif text-3xl"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="border-t border-line pt-4">
                <a href={profile.resume} download={profile.resumeFileName} className="link-u">
                  Download résumé ↓
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
