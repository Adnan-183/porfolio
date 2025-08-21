import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-900 py-12 border-t border-gray-200 dark:border-dark-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Muhammad Adnan
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Mobile App Developer
            </p>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="https://github.com/Dani-183"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/adnan-moeen-128679209"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>

          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-800 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>© {currentYear} Muhammad Adnan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
