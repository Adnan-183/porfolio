import { motion } from 'framer-motion';
import { skills } from '../data/projects-data';
import { Smartphone, Code, Star, Zap, Award, TrendingUp, Target, Layers } from 'lucide-react';
import GlassCard from './ui/GlassCard';
import AnimatedText from './ui/AnimatedText';
import { fadeInUp, staggerContainer, slideInFromBottom } from '../utils/animations';

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
  return (
    <GlassCard className="group relative h-full" delay={delay} gradient>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <motion.div
            className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white mr-6 shadow-xl`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
            {title}
          </h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                {skills.length} Technologies
              </span>
            </div>
          </div>
        </div>

        {/* Skills List */}
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              variants={slideInFromBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: delay + 0.1 + (index * 0.05) }}
              className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 group/skill border border-transparent hover:border-blue-200/30 dark:hover:border-blue-700/30"
              whileHover={{ x: 5, scale: 1.02 }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0 group-hover/skill:scale-125 transition-transform duration-300" />
              <span className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-300">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Proficiency</span>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full" />
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">Expert</span>
            </div>
          </div>
          <div className="mt-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
            <motion.div 
              className="h-2 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "95%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: delay + 0.5 }}
            />
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone size={28} />,
      skills: skills.mobile,
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      delay: 0
    },
    {
      title: "Other Skills",
      icon: <Code size={28} />,
      skills: skills.others,
      gradient: "from-emerald-500 via-emerald-600 to-teal-500",
      delay: 0.2
    }
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full text-blue-600 dark:text-blue-400 text-sm font-bold mb-8 shadow-xl"
            variants={fadeInUp}
          >
            <Target className="w-5 h-5" />
            <span>Technical Expertise</span>
            <Layers className="w-5 h-5" />
          </motion.div>

          <AnimatedText 
            text="My Skillset"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent"
          />
          
          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            variants={fadeInUp}
          >
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <Award className="w-6 h-6 text-emerald-500" />
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full" />
          </motion.div>

          <motion.p 
            className="max-w-4xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
            variants={fadeInUp}
          >
            A comprehensive set of technologies I use to build <span className="text-blue-600 dark:text-blue-400 font-bold bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-lg">robust</span>, 
            <span className="text-purple-600 dark:text-purple-400 font-bold bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded-lg mx-2">scalable</span>, and 
            <span className="text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-900/30 px-2 py-1 rounded-lg">beautiful</span> applications.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
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
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { number: '15+', label: 'Technologies', icon: Code, color: 'from-blue-500 to-cyan-500' },
            { number: '50+', label: 'Projects Built', icon: Star, color: 'from-purple-500 to-pink-500' },
            { number: '3+', label: 'Years Experience', icon: Award, color: 'from-emerald-500 to-teal-500' },
            { number: '100%', label: 'Code Quality', icon: TrendingUp, color: 'from-amber-500 to-orange-500' }
          ].map((stat, index) => (
            <GlassCard
              key={stat.label}
              className="text-center p-6"
              delay={index * 0.1}
            >
              <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm font-semibold">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;