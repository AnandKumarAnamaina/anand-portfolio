import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Database,
  BarChart3,
  Layers3,
} from "lucide-react";

const ProjectCard = ({ project, onOpen }) => {
  if (!project) return null;

  return (
    <motion.article
      layout
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl"
    >
      {/* Dashboard Preview */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-gray-400">
          {project.subtitle}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies?.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* KPI Summary */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="rounded-xl bg-white/5 p-3 text-center">
            <Database
              className="mx-auto mb-2 text-blue-400"
              size={20}
            />

            <p className="text-xl font-bold text-white">
              {project.metrics?.dataSources ?? 0}
            </p>

            <span className="text-xs text-gray-400">
              Sources
            </span>
          </div>

          <div className="rounded-xl bg-white/5 p-3 text-center">
            <BarChart3
              className="mx-auto mb-2 text-blue-400"
              size={20}
            />

            <p className="text-xl font-bold text-white">
              {project.metrics?.visuals ?? 0}
            </p>

            <span className="text-xs text-gray-400">
              Visuals
            </span>
          </div>

          <div className="rounded-xl bg-white/5 p-3 text-center">
            <Layers3
              className="mx-auto mb-2 text-blue-400"
              size={20}
            />

            <p className="text-xl font-bold text-white">
              {project.metrics?.pages ?? 0}
            </p>

            <span className="text-xs text-gray-400">
              Pages
            </span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => onOpen(project)}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
        >
          View Case Study

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>
      </div>
    </motion.article>
  );
};

export default ProjectCard;