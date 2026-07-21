import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Star,
  CheckCircle2,
  Database,
  BarChart3,
  LayoutDashboard,
} from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:border-blue-400 hover:shadow-2xl"
    >
      {/* Featured Badge */}

      {project.featured && (
        <div className="absolute right-5 top-5 z-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
          ⭐ Featured
        </div>
      )}

      {/* Dashboard Preview */}

      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-5 left-5">
          <span className="rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-blue-700 backdrop-blur">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="space-y-6 p-7">
        {/* Title */}

        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            {project.title}
          </h3>

          <p className="mt-1 text-sm font-medium text-blue-600">
            {project.subtitle}
          </p>
        </div>

        {/* Business Problem */}

        <div>
          <h4 className="mb-2 flex items-center gap-2 font-semibold text-slate-800">
            <Database className="h-5 w-5 text-blue-600" />
            Business Problem
          </h4>

          <p className="text-sm leading-7 text-slate-600">
            {project.businessProblem}
          </p>
        </div>

        {/* Solution */}

        <div>
          <h4 className="mb-2 flex items-center gap-2 font-semibold text-slate-800">
            <LayoutDashboard className="h-5 w-5 text-purple-600" />
            Solution
          </h4>

          <p className="text-sm leading-7 text-slate-600">
            {project.solution}
          </p>
        </div>

        {/* Features */}

        <div>
          <h4 className="mb-3 flex items-center gap-2 font-semibold text-slate-800">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Key Features
          </h4>

          <div className="grid grid-cols-2 gap-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-sm text-slate-600"
              >
                <Star className="h-4 w-4 text-yellow-500" />

                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}

        <div className="grid grid-cols-4 gap-3 rounded-2xl bg-slate-50 p-4">
          <div className="text-center">
            <p className="text-xl font-bold text-blue-600">
              {project.metrics.pages}
            </p>

            <span className="text-xs text-slate-500">
              Pages
            </span>
          </div>

          <div className="text-center">
            <p className="text-xl font-bold text-purple-600">
              {project.metrics.dax}
            </p>

            <span className="text-xs text-slate-500">
              DAX
            </span>
          </div>

          <div className="text-center">
            <p className="text-xl font-bold text-pink-600">
              {project.metrics.visuals}
            </p>

            <span className="text-xs text-slate-500">
              Visuals
            </span>
          </div>

          <div className="text-center">
            <p className="text-xl font-bold text-green-600">
              {project.metrics.datasource}
            </p>

            <span className="text-xs text-slate-500">
              Sources
            </span>
          </div>
        </div>

        {/* Tech */}

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 transition hover:bg-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="flex gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-slate-800"
          >
            <Github size={18} />

            GitHub
          </a>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-semibold text-white transition duration-300 hover:shadow-lg"
            >
              <ArrowUpRight size={18} />

              Live Demo
            </a>
          ) : (
            <button
              disabled
              className="flex flex-1 cursor-not-allowed items-center justify-center rounded-xl border border-slate-300 bg-slate-100 px-5 py-3 font-semibold text-slate-400"
            >
              Coming Soon
            </button>
          )}
        </div>
      </div>

      {/* Hover Glow */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}