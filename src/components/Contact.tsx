import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, MessageSquare, Download, Send, Heart, Coffee } from 'lucide-react';

const ContactItem = ({
  icon,
  title,
  value,
  href,
  delay,
  gradient
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  delay: number;
  gradient: string;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative block"
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
      
      <div className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-neutral-200/50 dark:border-neutral-700/50 hover:border-primary-300 dark:hover:border-primary-600 h-full">
        {/* Icon */}
        <motion.div
          className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white mb-6 shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>

        {/* Content */}
        <div>
          <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
            {value}
          </p>
        </div>

        {/* Hover Effect Arrow */}
        <motion.div
          className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <Send className="w-5 h-5 text-white" />
        </motion.div>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "adnanmoeen183@gmail.com",
      href: "mailto:adnanmoeen183@gmail.com",
      gradient: "from-red-500 to-pink-500",
      delay: 0
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "Connect professionally",
      href: "https://www.linkedin.com/in/adnan-moeen-128679209/",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "View my repositories",
      href: "https://github.com/Dani-183",
      gradient: "from-gray-700 to-gray-900",
      delay: 0.2
    }
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-gradient-to-br from-neutral-50 via-primary-50/20 to-secondary-50/20 dark:from-dark-800 dark:via-dark-900 dark:to-dark-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary-400/10 to-accent-400/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heart className="w-4 h-4" />
            <span>Let's Connect</span>
            <Coffee className="w-4 h-4" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neutral-800 dark:text-white">Get In </span>
            <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <motion.div
            className="flex items-center justify-center space-x-2 mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
            <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full"></div>
          </motion.div>

          <p className="max-w-3xl mx-auto text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Have an idea you'd like to bring to life or explore a potential collaboration? 
            I'm always open to <span className="text-primary-600 dark:text-primary-400 font-semibold">meaningful conversations</span>—feel 
            free to connect with me through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method) => (
            <ContactItem
              key={method.title}
              icon={method.icon}
              title={method.title}
              value={method.value}
              href={method.href}
              delay={method.delay}
              gradient={method.gradient}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 rounded-3xl p-12 shadow-xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-white mb-6">
            Let's Build Something 
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Amazing</span> Together
          </h3>

          <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's start the conversation and create something extraordinary.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <motion.a
              href="https://wa.ms/923054433058"
              className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5" />
              <span className="relative z-10">Start a Conversation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>

            <motion.a
              href="/pdf/Adnan Moeen.pdf"
              download
              className="group relative px-8 py-4 bg-white/80 dark:bg-dark-700/80 backdrop-blur-sm text-neutral-800 dark:text-white border-2 border-neutral-300 dark:border-neutral-600 hover:border-primary-500 dark:hover:border-primary-400 font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </motion.a>
          </div>

          {/* Response Time Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 border border-primary-200 dark:border-primary-800 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Usually responds within 24 hours</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;