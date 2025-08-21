import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/projects-data';
import { Smartphone, Server, Code } from 'lucide-react';

const SkillCategory = ({
  title,
  icon,
  skills,
  delay
}: {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  delay: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>

      <ul className="space-y-3">
        {skills.map((skill, index) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.4, delay: delay + 0.1 + (index * 0.05) }}
            className="flex items-center text-gray-700 dark:text-gray-300"
          >
            <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-white dark:bg-dark-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skillset
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            A comprehensive set of technologies I use to build robust, scalable, and beautiful applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-15 lg:gap-20">
          <SkillCategory
            title="Mobile Apps Development"
            icon={<Smartphone size={24} />}
            skills={skills.mobile}
            delay={0}
          />

           <SkillCategory
            title="Backend Engineering"
            icon={<Server size={24} />}
            skills={skills.backend}
            delay={0.2}
          />

          <SkillCategory
            title="Other Skills"
            icon={<Code size={24} />}
            skills={skills.others}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

