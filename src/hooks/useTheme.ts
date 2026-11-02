import { useState, useEffect } from 'react';

export const useTheme = () => {
  // index.html sets the initial class before paint; read it back here.
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // Storage can be unavailable (private mode); the theme still applies.
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((d) => !d);

  return { isDark, toggleTheme };
};
