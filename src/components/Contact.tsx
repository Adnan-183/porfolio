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
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative block"
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-white/20 dark:border-white/10 h-full">
        {/* Icon */}
        <motion.div
          className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white mb-4 shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>

        {/* Content */}
        <div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors text-sm">
            {value}
          </p>
        </div>

        {/* Hover Effect Arrow */}
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <Send className="w-4 h-4 text-white" />
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
      icon: <Mail size={20} />,
      title: "Email",
      value: "adnanmoeen183@gmail.com",
      href: "mailto:adnanmoeen183@gmail.com",
      gradient: "from-red-500 to-pink-500",
      delay: 0
    },
    {
      icon: <Linkedin size={20} />,
      title: "LinkedIn",
      value: "Connect professionally",
      href: "https://www.linkedin.com/in/adnan-moeen-128679209/",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.1
    },
    {
      icon: <Github size={20} />,
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
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/20 to-purple-50/20 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heart className="w-4 h-4" />
            <span>Let's Connect</span>
            <Coffee className="w-4 h-4" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-800 dark:text-white">Get In </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          
          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full" />
          </motion.div>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Have an idea you'd like to bring to life? I'm always open to 
            <span className="text-blue-600 dark:text-blue-400 font-semibold"> meaningful conversations</span>—feel 
            free to connect with me through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
          className="text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
            Let's Build Something 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Amazing</span> Together
          </h3>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Let's start the conversation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a
              href="https://wa.ms/923054433058"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5" />
              <span>Start a Conversation</span>
            </motion.a>

            <motion.a
              href="/pdf/Adnan Moeen.pdf"
              download
              className="px-8 py-4 bg-white/20 dark:bg-slate-700/20 backdrop-blur-xl text-slate-800 dark:text-white border-2 border-slate-300/30 hover:border-blue-500/50 font-bold text-lg rounded-2xl transition-all duration-300 shadow-lg flex items-center space-x-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.a>
          </div>

          {/* Response Time Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Usually responds within 24 hours</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;