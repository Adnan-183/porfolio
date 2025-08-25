import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/projects-data';
import { Smartphone, Code, Star, Zap } from 'lucide-react';

const SkillCategory = ({
  title,
  icon,
  skills,
  delay,
  gradient
}: {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay: number;
  gradient: string;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative"
    >
      <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 border border-white/20 dark:border-white/10 h-full">
        {/* Header */}
        <div className="flex items-center mb-6">
          <motion.div
            className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white mr-4 shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </div>

        {/* Skills List */}
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: delay + 0.1 + (index * 0.05) }}
              className="flex items-start space-x-3 p-2 rounded-lg hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0" />
              <span className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Skill Count Badge */}
        <motion.div
          className="absolute top-4 right-4 px-2 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
        >
          {skills.length}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      skills: skills.mobile,
      gradient: "from-blue-500 to-blue-600",
      delay: 0
    },
    {
      title: "Other Skills",
      icon: <Code size={24} />,
      skills: skills.others,
      gradient: "from-emerald-500 to-emerald-600",
      delay: 0.2
    }
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl" />
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
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-4 h-4" />
            <span>Technical Expertise</span>
            <Zap className="w-4 h-4" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-slate-800 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
              Skillset
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
            A comprehensive set of technologies I use to build <span className="text-blue-600 dark:text-blue-400 font-semibold">robust</span>, 
            <span className="text-purple-600 dark:text-purple-400 font-semibold"> scalable</span>, and 
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold"> beautiful</span> applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              icon={category.icon}
              skills={category.skills}
              delay={category.delay}
              gradient={category.gradient}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { number: '15+', label: 'Technologies' },
            { number: '50+', label: 'Projects Built' },
            { number: '3+', label: 'Years Experience' },
            { number: '100%', label: 'Code Quality' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;