import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactItem = ({
  icon,
  title,
  value,
  href,
  delay
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  delay: number;
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="flex items-start p-6 bg-white dark:bg-dark-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="mr-4 text-primary-500 dark:text-primary-400">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{value}</p>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-dark-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Have an idea you'd like to bring to life or explore a potential collaboration? I'm always open to meaningful conversations—feel free to connect with me through any of the channels below.
          </p>
        </motion.div>

        <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContactItem
            icon={<Mail size={24} />}
            title="Email"
            value="Muhammad Adnan"
            href="mailto:adnanmoeen183@gmail.com"
            delay={0}
          />

          <ContactItem
            icon={<Linkedin size={24} />}
            title="LinkedIn"
            value="linkedin/flutter-Adnan"
            href="https://www.linkedin.com/in/adnan-moeen-128679209/"
            delay={0.1}
          />

          <ContactItem
            icon={<Github size={24} />}
            title="GitHub"
            value="github/Dani-183"
            href="https://github.com/Dani-183"
            delay={0.2}
          />


        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Build Something Amazing Together
          </h3>
          <div className="flex justify-center flex-wrap gap-4">
            <a
              href="https://wa.ms/923054433058"
              className="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Start a Conversation
            </a>

            <a
              href="/pdf/Adnan Moeen.pdf"
              download
              className="inline-block px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Download CV
            </a>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

export default Contact;

//
// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Mail, Linkedin, Github, MessageSquare, Download, Phone, MapPin, Clock, Star, Zap, Send, ArrowRight } from 'lucide-react';
//
// const ContactItem = ({
//   icon,
//   title,
//   value,
//   href,
//   delay,
//   gradient,
//   hoverColor,
//   description
// }) => {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });
//
//   const [isHovered, setIsHovered] = useState(false);
//
//   return (
//     <motion.a
//       ref={ref}
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       initial={{ opacity: 0, y: 30, scale: 0.9 }}
//       animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
//       transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
//       className="group relative block"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Gradient Border Effect */}
//       <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-sm group-hover:blur-none transition-all duration-500`} />
//
//       <div className={`relative bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl transition-all duration-500 group-hover:border-opacity-100 ${hoverColor}`}>
//
//         {/* Icon Container */}
//         <motion.div
//           className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-700 to-slate-600 mb-4 group-hover:shadow-lg transition-all duration-300"
//           whileHover={{ scale: 1.1, rotate: 5 }}
//           transition={{ type: "spring", stiffness: 400, damping: 10 }}
//         >
//           <div className="text-cyan-400 group-hover:text-white transition-colors">
//             {icon}
//           </div>
//         </motion.div>
//
//         {/* Content */}
//         <div>
//           <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
//             {title}
//           </h3>
//           <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-2">
//             {value}
//           </p>
//           <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
//             {description}
//           </p>
//         </div>
//
//         {/* Hover Arrow */}
//         <motion.div
//           className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
//           animate={isHovered ? { x: [0, 5, 0] } : {}}
//           transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
//         >
//           <ArrowRight className="w-5 h-5 text-cyan-400" />
//         </motion.div>
//
//         {/* Status Indicator */}
//         <div className="absolute bottom-4 right-4">
//           <div className="flex items-center gap-2">
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//             <span className="text-xs text-gray-500">Active</span>
//           </div>
//         </div>
//       </div>
//     </motion.a>
//   );
// };
//
// const Contact = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });
//
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [responseTime, setResponseTime] = useState("< 2 hours");
//
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTime(new Date());
//       // Update response time based on current hour
//       const hour = new Date().getHours();
//       if (hour >= 9 && hour <= 18) {
//         setResponseTime("< 30 minutes");
//       } else {
//         setResponseTime("< 2 hours");
//       }
//     }, 60000); // Update every minute
//
//     return () => clearInterval(timer);
//   }, []);
//
//   const contactMethods = [
//     {
//       icon: <Mail size={24} />,
//       title: "Email",
//       value: "adnanmoeen183@gmail.com",
//       href: "mailto:adnanmoeen183@gmail.com",
//       gradient: "from-red-500/20 to-pink-500/20",
//       hoverColor: "group-hover:border-red-500/50",
//       description: "Professional inquiries & project discussions"
//     },
//     {
//       icon: <Linkedin size={24} />,
//       title: "LinkedIn",
//       value: "linkedin/flutter-Adnan",
//       href: "https://www.linkedin.com/in/adnan-moeen-128679209/",
//       gradient: "from-blue-500/20 to-cyan-500/20",
//       hoverColor: "group-hover:border-blue-500/50",
//       description: "Connect professionally & view my network"
//     },
//     {
//       icon: <Github size={24} />,
//       title: "GitHub",
//       value: "github/Dani-183",
//       href: "https://github.com/Dani-183",
//       gradient: "from-gray-500/20 to-slate-500/20",
//       hoverColor: "group-hover:border-gray-500/50",
//       description: "Explore my code & open source projects"
//     }
//   ];
//
//   const stats = [
//     { icon: Clock, label: "Response Time", value: responseTime },
//     { icon: Star, label: "Client Rating", value: "5.0/5.0" },
//     { icon: Zap, label: "Projects Completed", value: "50+" },
//     { icon: MessageSquare, label: "Consultations", value: "Free" }
//   ];
//
//   return (
//     <section
//       id="contact"
//       ref={ref}
//       className="relative py-24 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden"
//     >
//       {/* Background Elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
//       </div>
//
//       {/* Grid Pattern */}
//       <div
//         className="absolute inset-0 opacity-5"
//         style={{
//           backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
//           backgroundSize: '40px 40px'
//         }}
//       />
//
//       <div className="relative z-10 container mx-auto px-6">
//
//         {/* Header Section */}
//         <motion.div
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Status Badge */}
//           <motion.div
//             className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/80 border border-slate-700/50 rounded-full text-green-300 text-sm mb-6 backdrop-blur-sm"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//             Available Now • Response in {responseTime}
//           </motion.div>
//
//           <h2 className="text-5xl md:text-6xl font-bold mb-6">
//             <span className="text-white">Let's Create</span>
//             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
//               Something Great
//             </span>
//           </h2>
//
//           <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
//             Have an innovative idea ready to transform into a powerful mobile app?
//             <span className="text-cyan-400 font-semibold"> I'm here to make it happen.</span>
//             Let's discuss your vision and turn it into reality.
//           </p>
//         </motion.div>
//
//         {/* Stats Bar */}
//         <motion.div
//           className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               className="text-center p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//               transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
//               whileHover={{ scale: 1.05, y: -5 }}
//             >
//               <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
//               <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
//               <div className="text-sm text-gray-400">{stat.label}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//
//         {/* Contact Methods */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {contactMethods.map((method, index) => (
//             <ContactItem
//               key={method.title}
//               icon={method.icon}
//               title={method.title}
//               value={method.value}
//               href={method.href}
//               delay={index * 0.1}
//               gradient={method.gradient}
//               hoverColor={method.hoverColor}
//               description={method.description}
//             />
//           ))}
//         </div>
//
//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-12"
//         >
//           <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
//             Ready to Start Your Project?
//           </h3>
//
//           <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//             Let's discuss your requirements and create a roadmap for success.
//             Free consultation included!
//           </p>
//
//           {/* Current Time Display */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-700/50 rounded-full text-gray-300 text-sm mb-8">
//             <Clock className="w-4 h-4" />
//             <span>
//               Current time in Pakistan: {currentTime.toLocaleTimeString('en-US', {
//                 hour12: true,
//                 hour: 'numeric',
//                 minute: '2-digit'
//               })} PKT
//             </span>
//           </div>
//
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
//             <motion.a
//               href="https://wa.ms/923054433058"
//               className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl overflow-hidden shadow-2xl shadow-green-500/25 flex items-center gap-3"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <MessageSquare className="w-5 h-5" />
//               <span className="relative z-10">Start WhatsApp Chat</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
//             </motion.a>
//
//             <motion.a
//               href="/pdf/Adnan Moeen.pdf"
//               download
//               className="group relative px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 border border-slate-600 hover:border-cyan-500"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Download className="w-5 h-5" />
//               <span>Download Resume</span>
//             </motion.a>
//           </div>
//
//           {/* Additional Info */}
//           <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-400 text-sm">
//             <div className="flex items-center gap-2">
//               <MapPin className="w-4 h-4" />
//               <span>Based in Lahore, Pakistan</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Phone className="w-4 h-4" />
//               <span>Available for remote work worldwide</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };
//
// export default Contact;