import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { projectData } from "../data/projects-data";
import { Globe, Smartphone, ExternalLink } from "lucide-react";
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
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
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A showcase of mobile applications built with Flutter, integrated with scalable backend services"
      background="white"
    >
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category.key}
            variant={filter === category.key ? "primary" : "outline"}
            size="sm"
            onClick={() => setFilter(category.key as any)}
            className="flex items-center gap-2"
          >
            {category.icon}
            {category.label}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            <Card className="h-full flex flex-col overflow-hidden group">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </div>
                {project.working && (
                  <div className="absolute bottom-2 right-4">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getWorkingColor(
                        project.working
                      )}`}
                    >
                      {project.working}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {project.tech}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
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
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.links.googlePlay && (
                    <Button
                      variant="primary"
                      size="sm"
                      href={project.links.googlePlay}
                      external
                      className="flex-1 min-w-0"
                    >
                      Play Store
                    </Button>
                  )}
                  {project.links.appStore && (
                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.links.appStore}
                      external
                      className="flex-1 min-w-0"
                    >
                      App Store
                    </Button>
                  )}
                  {project.links.web && (
                    <Button
                      variant="outline"
                      size="sm"
                      href={project.links.web}
                      external
                      className="flex-1 min-w-0 flex items-center gap-1"
                    >
                      <ExternalLink size={14} />
                      Live
                    </Button>
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
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 dark:text-gray-400">
            No projects found for the selected category.
          </p>
        </motion.div>
      )}
    </Section>
  );
};

export default Projects;
