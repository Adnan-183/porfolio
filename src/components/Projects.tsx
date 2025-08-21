// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { projectData } from '../data/projects-data';
// import ProjectCard from './ProjectCard';
//
// const Projects = () => {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   });
//
//   return (
//     <section
//       id="projects"
//       ref={ref}
//       className="py-20 bg-gray-50 dark:bg-dark-900"
//     >
//       <div className="container mx-auto px-4 md:px-6">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             My Projects
//           </h2>
//           <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
//             A showcase of mobile applications built with Flutte, integrated with scalable backend services.
//             All projects are live and published on different platforms.
//           </p>
//         </motion.div>
//
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projectData.map((project, index) => (
//             <ProjectCard
//               key={project.title}
//               project={project}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
//
// export default Projects;

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectData } from '../data/projects-data';
import ProjectCard from './ProjectCard';

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6
    }
  }
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    filter: "blur(4px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-50px 0px'
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40
                 dark:from-slate-900 dark:via-slate-800/50 dark:to-indigo-950/30
                 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30
                       text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6
                       border border-blue-200 dark:border-blue-800/50"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            Featured Work
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r
                         from-gray-900 via-blue-800 to-indigo-800
                         dark:from-white dark:via-blue-200 dark:to-indigo-200
                         bg-clip-text text-transparent mb-6 leading-tight">
            My Projects
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-300
                        leading-relaxed font-light">
            A curated collection of{' '}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              mobile applications
            </span>{' '}
            built with Flutter, seamlessly integrated with scalable backend services.
            <br />
            <span className="text-base text-gray-500 dark:text-gray-400 mt-2 inline-block">
              All projects are live and actively maintained across multiple platforms.
            </span>
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projectData.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
              className="h-full"
            >
              <ProjectCard
                project={project}
                index={index}
                className="h-full transform transition-all duration-300
                          hover:shadow-2xl hover:shadow-blue-500/10
                          dark:hover:shadow-blue-400/5"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r
                       from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
                       text-white font-medium rounded-lg shadow-lg hover:shadow-xl
                       transform transition-all duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View All Projects</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;