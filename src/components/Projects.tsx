import { motion } from "framer-motion";
import { useState } from "react";
import { projectData } from "../data/projects-data";
import { Globe, Smartphone, ExternalLink, Filter, Star, TrendingUp, Award } from "lucide-react";
import GlassCard from './ui/GlassCard';
import AnimatedText from './ui/AnimatedText';
import { fadeInUp, staggerContainer } from '../utils/animations';

type Project = typeof projectData[number];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "mobile" | "web" | "backend">(
    "all"
  );

  const filteredProjects = projectData.filter(
    (project) => filter === "all" || project.category === filter
  );

  const categories = [
    { key: "all", label: "All Projects", icon: <Globe size={16} /> },
    { key: "mobile", label: "Mobile Apps", icon: <Smartphone size={16} /> },
  ];

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "In-Development":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  const getWorkingColor = (status: Project["working"]) => {
    switch (status) {
      case "Feature Development":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300";
      case "Self-Driven Project":
        return "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300";
      case "Worked within Agile Team":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header Section */}
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
            <Award className="w-5 h-5" />
            <span>Featured Work</span>
            <TrendingUp className="w-5 h-5" />
          </motion.div>

          <AnimatedText 
            text="Featured Projects"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent"
          />
          
          <motion.div
            className="flex items-center justify-center space-x-4 mb-8"
            variants={fadeInUp}
          >
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <Star className="w-6 h-6 text-emerald-500" />
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-emerald-500 rounded-full" />
          </motion.div>

          <motion.p 
            className="max-w-4xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed"
            variants={fadeInUp}
          >
            A showcase of <span className="text-blue-600 dark:text-blue-400 font-bold">mobile applications</span> built with Flutter, 
            integrated with <span className="text-purple-600 dark:text-purple-400 font-bold">scalable backend services</span> and 
            <span className="text-emerald-600 dark:text-emerald-400 font-bold"> modern architectures</span>.
          </motion.p>
        </motion.div>

      {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 text-sm font-medium mb-4"
            variants={fadeInUp}
          >
            <Filter className="w-4 h-4" />
            <span>Filter by category</span>
          </motion.div>
          <div className="w-full flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
            <motion.button
            key={category.key}
              variants={fadeInUp}
            onClick={() => setFilter(category.key as any)}
              className={`
                flex items-center gap-3 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-500 shadow-lg hover:shadow-xl
                ${filter === category.key 
                  ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white border-2 border-white/20 scale-105' 
                  : 'bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl text-slate-700 dark:text-slate-300 border-2 border-white/20 dark:border-white/10 hover:border-blue-500/30'
                }
              `}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
          >
            {category.icon}
            {category.label}
            </motion.button>
        ))}
          </div>
        </motion.div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <GlassCard className="h-full flex flex-col overflow-hidden group" delay={index * 0.1} gradient>
              {/* Project Image */}
              <div className="relative h-56 bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 dark:from-slate-700 dark:via-slate-600 dark:to-slate-800 overflow-hidden rounded-t-3xl">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg"
                />
                
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-2 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
                
                {/* Working Badge */}
                {project.working && (
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`px-3 py-2 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm ${getWorkingColor(
                        project.working
                      )}`}
                    >
                      {project.working}
                    </span>
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-bold rounded-full mb-4 border border-blue-200 dark:border-blue-800">
                    {project.tech}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full font-medium border border-slate-200 dark:border-slate-600"
                        >
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="mt-auto flex flex-wrap gap-3">
                  {project.links.googlePlay && (
                    <motion.a
                      href={project.links.googlePlay}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-0 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Play Store
                    </motion.a>
                  )}
                  {project.links.appStore && (
                    <motion.a
                      href={project.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-0 px-4 py-3 bg-gradient-to-r from-slate-800 to-slate-900 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      App Store
                    </motion.a>
                  )}
                  {project.links.web && (
                    <motion.a
                      href={project.links.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-0 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={14} />
                      Live
                    </motion.a>
                  )}
                  {project.category !== "backend" &&
                    !project.links.googlePlay &&
                    !project.links.appStore &&
                    !project.links.web && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 italic">
                        {project.status === "Unpublished"
                          ? "Unpublished"
                          : "Coming Soon"}
                      </span>
                    )}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <GlassCard className="max-w-md mx-auto p-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full flex items-center justify-center">
              <Globe className="w-10 h-10 text-slate-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">No Projects Found</h3>
            <p className="text-slate-600 dark:text-slate-400">
              No projects found for the selected category. Try selecting a different filter.
            </p>
          </GlassCard>
        </motion.div>
      )}
      </div>
    </section>
  );
};

export default Projects;