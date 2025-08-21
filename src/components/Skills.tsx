// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { skills } from '../data/projects-data';
// import { Smartphone, Server, Code } from 'lucide-react';
//
// const SkillCategory = ({
//   title,
//   icon,
//   skills,
//   delay
// }: {
//   title: string;
//   icon: React.ReactNode;
//   skills: string[];
//   delay: number;
// }) => {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });
//
//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//       transition={{ duration: 0.6, delay }}
//       className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6"
//     >
//       <div className="flex items-center mb-6">
//         <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
//           {icon}
//         </div>
//         <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
//       </div>
//
//       <ul className="space-y-3">
//         {skills.map((skill, index) => (
//           <motion.li
//             key={skill}
//             initial={{ opacity: 0, x: -10 }}
//             animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
//             transition={{ duration: 0.4, delay: delay + 0.1 + (index * 0.05) }}
//             className="flex items-center text-gray-700 dark:text-gray-300"
//           >
//             <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
//             {skill}
//           </motion.li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// };
//
// const Skills = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });
//
//   return (
//     <section
//       id="skills"
//       ref={ref}
//       className="py-20 bg-white dark:bg-dark-800"
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             My Skillset
//           </h2>
//           <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
//             A comprehensive set of technologies I use to build robust, scalable, and beautiful applications.
//           </p>
//         </motion.div>
//
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-15 lg:gap-20">
//           <SkillCategory
//             title="Mobile Apps Development"
//             icon={<Smartphone size={24} />}
//             skills={skills.mobile}
//             delay={0}
//           />
//
//           {/* <SkillCategory
//             title="Backend Engineering"
//             icon={<Server size={24} />}
//             skills={skills.backend}
//             delay={0.2}
//           /> */}
//
//           <SkillCategory
//             title="Other Skills"
//             icon={<Code size={24} />}
//             skills={skills.others}
//             delay={0.4}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default Skills;

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Code, Star, Zap, Trophy, Target, Brain, Rocket } from 'lucide-react';
import { skills } from '../data/projects-data';

const SkillCategory = ({
  title,
  icon,
  skills,
  delay,
  gradient,
  iconColor
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      className="group relative"
    >
      {/* Background Card with Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-sm group-hover:blur-none transition-all duration-500" />

      <div className="relative bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group-hover:border-cyan-500/50">

        {/* Header */}
        <div className="flex items-center mb-8">
          <motion.div
            className={`w-16 h-16 flex items-center justify-center rounded-2xl ${gradient} mr-6 shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className={`${iconColor}`}>
              {icon}
            </div>
          </motion.div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
              <span className="text-gray-400 text-sm ml-2">Expert Level</span>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: delay + 0.1 + (index * 0.1) }}
              className="relative group/skill"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`
                relative p-4 rounded-xl border transition-all duration-300 cursor-pointer
                ${hoveredSkill === index
                  ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-500/50 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-700/50 border-slate-600/50 hover:border-slate-500/50'
                }
              `}>

                {/* Skill Icon/Indicator */}
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium text-sm">{skill}</span>
                  <motion.div
                    className={`w-2 h-2 rounded-full ${hoveredSkill === index ? 'bg-cyan-400' : 'bg-gray-500'}`}
                    animate={hoveredSkill === index ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                    transition={{ duration: 0.6, repeat: hoveredSkill === index ? Infinity : 0 }}
                  />
                </div>

                {/* Progress Bar */}
                <div className="mt-3 h-1 bg-slate-600 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${85 + Math.random() * 15}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: delay + 0.3 + (index * 0.1) }}
                  />
                </div>

                {/* Hover Effect */}
                {hoveredSkill === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute -top-2 -right-2"
                  >
                    <div className="bg-cyan-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                      Pro
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 pt-6 border-t border-slate-700/50">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <Target className="w-4 h-4" />
              <span>Years Experience: 2+</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Trophy className="w-4 h-4" />
              <span>Projects: 40+</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Brain, label: "Technologies Mastered", value: "15+" },
    { icon: Rocket, label: "Years Experience", value: "5+" },
    { icon: Zap, label: "Apps Deployed", value: "50+" },
    { icon: Star, label: "Client Rating", value: "5.0" }
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6">

        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Time Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/80 border border-slate-700/50 rounded-full text-cyan-300 text-sm mb-6 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Currently Available • {currentTime.toLocaleTimeString('en-US', {
              hour12: true,
              hour: 'numeric',
              minute: '2-digit'
            })} PKT
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Technical</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Expertise
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
            Cutting-edge technologies and frameworks I leverage to build
            <span className="text-cyan-400 font-semibold"> exceptional mobile experiences</span> that drive business growth.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <SkillCategory
            title="Mobile App Development"
            icon={<Smartphone size={28} />}
            skills={skills.mobile}
            delay={0.2}
            gradient="bg-gradient-to-br from-cyan-500 to-blue-600"
            iconColor="text-white"
          />

          <SkillCategory
            title="Development & Tools"
            icon={<Code size={28} />}
            skills={skills.others}
            delay={0.4}
            gradient="bg-gradient-to-br from-purple-500 to-pink-600"
            iconColor="text-white"
          />
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Let's Build Something Amazing
              <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;