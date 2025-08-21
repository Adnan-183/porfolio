// import { Github, Linkedin, Twitter } from 'lucide-react';
//
// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//
//   return (
//     <footer className="bg-white dark:bg-dark-900 py-12 border-t border-gray-200 dark:border-dark-700">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-6 md:mb-0">
//             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//               Muhammad Adnan
//             </h3>
//             <p className="text-gray-600 dark:text-gray-300">
//               Mobile App Developer
//             </p>
//           </div>
//
//           <div className="flex space-x-4 mb-6 md:mb-0">
//             <a
//               href="https://github.com/Dani-183"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
//               aria-label="GitHub"
//             >
//               <Github size={20} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/adnan-moeen-128679209"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
//               aria-label="LinkedIn"
//             >
//               <Linkedin size={20} />
//             </a>
//             {/* <a
//               href="https://x.com/dawood_qurashi?s=09"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
//               aria-label="Twitter"
//             >
//               <Twitter size={20} />
//             </a> */}
//           </div>
//         </div>
//
//         <div className="border-t border-gray-200 dark:border-dark-800 mt-8 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
//           <p>© {currentYear} Muhammad Adnan. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };
//
// export default Footer;
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart, Code, Coffee, Zap, Star, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Dani-183",
      label: "GitHub",
      color: "hover:bg-gray-700 hover:text-white",
      followers: "50+"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/adnan-moeen-128679209",
      label: "LinkedIn",
      color: "hover:bg-blue-600 hover:text-white",
      followers: "500+"
    },
    {
      icon: Mail,
      href: "mailto:your.email@gmail.com",
      label: "Email",
      color: "hover:bg-red-500 hover:text-white",
      followers: "Quick Reply"
    }
  ];

  const stats = [
    { icon: Code, label: "Lines of Code", value: "100K+" },
    { icon: Coffee, label: "Cups of Coffee", value: "1,000+" },
    { icon: Zap, label: "Problems Solved", value: "500+" },
    { icon: Star, label: "GitHub Stars", value: "200+" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}
      />

      <div className="relative z-10">

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">

          {/* Top Section */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">

            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Muhammad Adnan
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-cyan-300 font-medium">Available for Projects</span>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Crafting exceptional mobile experiences with Flutter.
                  Transforming ideas into powerful, scalable applications that drive business success.
                </p>

                {/* Quick Contact */}
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Lahore, Punjab, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>Available 24/7</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-white mb-6">By the Numbers</h4>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl text-center"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social & Time Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-white mb-6">Let's Connect</h4>

              {/* Current Time */}
              <div className="mb-6 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl">
                <div className="text-sm text-gray-400 mb-1">Current Time (PKT)</div>
                <div className="text-2xl font-bold text-cyan-400">
                  {currentTime.toLocaleTimeString('en-US', {
                    hour12: true,
                    hour: 'numeric',
                    minute: '2-digit',
                    second: '2-digit'
                  })}
                </div>
                <div className="text-sm text-gray-400">
                  {currentTime.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-slate-700 rounded-xl group-hover:bg-transparent transition-colors">
                      <social.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{social.label}</div>
                      <div className="text-sm text-gray-400">{social.followers}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center py-12 border-t border-b border-slate-700/50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's turn your mobile app idea into reality. Get in touch for a free consultation.
            </p>
            <motion.button
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Your Project Today
                <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-gray-400 text-sm mb-4">
              <span>© {currentYear} Muhammad Adnan. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
                <span>and lots of</span>
                <Coffee className="w-4 h-4 text-yellow-600" />
              </div>
            </div>
            <div className="text-xs text-gray-500">
              Powered by Flutter • React • Next.js • Tailwind CSS
            </div>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-2xl shadow-cyan-500/25 flex items-center justify-center transition-all duration-300 ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollTop ? 1 : 0 }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;