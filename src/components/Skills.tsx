import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/projects-data';
import { Smartphone, Server, Code, Zap, Star } from 'lucide-react';

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
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
      
      <div className="relative bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-neutral-200/50 dark:border-neutral-700/50 hover:border-primary-300 dark:hover:border-primary-600 h-full">
        {/* Header */}
        <div className="flex items-center mb-8">
          <motion.div
            className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white mr-4 shadow-lg`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
        </div>

        {/* Skills List */}
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: delay + 0.1 + (index * 0.05) }}
              className="group/item flex items-start space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-secondary-50/50 dark:hover:from-primary-900/20 dark:hover:to-secondary-900/20 transition-all duration-300"
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 mt-2 flex-shrink-0"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.2 }}
              />
              <span className="text-neutral-700 dark:text-neutral-300 group-hover/item:text-neutral-800 dark:group-hover/item:text-white transition-colors leading-relaxed">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Skill Count Badge */}
        <motion.div
          className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.4, delay: delay + 0.3 }}
        >
          {skills.length} skills
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
      icon: <Smartphone size={28} />,
      skills: skills.mobile,
      gradient: "from-primary-500 to-primary-600",
      delay: 0
    },
    {
      title: "Backend Engineering",
      icon: <Server size={28} />,
      skills: skills.backend,
      gradient: "from-secondary-500 to-secondary-600",
      delay: 0.2
    },
    {
      title: "Other Skills",
      icon: <Code size={28} />,
      skills: skills.others,
      gradient: "from-accent-500 to-accent-600",
      delay: 0.4
    }
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-secondary-400/10 to-accent-400/10 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
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
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 border border-primary-200 dark:border-primary-800 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium mb-6 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Star className="w-4 h-4" />
            <span>Technical Expertise</span>
            <Zap className="w-4 h-4" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neutral-800 dark:text-white">My </span>
            <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
              Skillset
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
            A comprehensive set of technologies I use to build <span className="text-primary-600 dark:text-primary-400 font-semibold">robust</span>, 
            <span className="text-secondary-600 dark:text-secondary-400 font-semibold"> scalable</span>, and 
            <span className="text-accent-600 dark:text-accent-400 font-semibold"> beautiful</span> applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
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
              className="text-center p-6 bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-neutral-600 dark:text-neutral-400 text-sm font-medium">
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