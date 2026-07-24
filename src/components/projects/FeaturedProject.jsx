import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Database,
  BarChart3,
  Layers3,
  Clock3,
} from "lucide-react";

const FeaturedProject = ({ project, onOpen }) => {
  if (!project) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl"
    >
      <div className="grid gap-10 p-10 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <span className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
            ⭐ Featured Case Study
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            {project.title}
          </h2>

          <p className="mt-3 text-lg text-slate-300">
            {project.subtitle}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Business Challenge
            </h3>

            <p className="mt-2 text-slate-300">
              {project.businessChallenge}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              Objective
            </h3>

            <p className="mt-2 text-slate-300">
              {project.objective}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              Solution
            </h3>

            <p className="mt-2 text-slate-300">
              {project.solution}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">
              Business Impact
            </h3>

            <p className="mt-2 text-green-400">
              {project.businessImpact}
            </p>
          </div>

          {/* Technology Chips */}
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-2 gap-6 border-t border-white/10 p-8 md:grid-cols-4">
        <div className="rounded-xl bg-white/5 p-5 text-center">
          <Database className="mx-auto text-blue-400" />

          <h3 className="mt-3 text-3xl font-bold text-white">
            {project.dataset}
          </h3>

          <p className="text-slate-400">Records</p>
        </div>

        <div className="rounded-xl bg-white/5 p-5 text-center">
          <BarChart3 className="mx-auto text-blue-400" />

          <h3 className="mt-3 text-3xl font-bold text-white">
            {project.metrics.visuals}
          </h3>

          <p className="text-slate-400">Visuals</p>
        </div>

        <div className="rounded-xl bg-white/5 p-5 text-center">
          <Layers3 className="mx-auto text-blue-400" />

          <h3 className="mt-3 text-3xl font-bold text-white">
            {project.metrics.daxMeasures}
          </h3>

          <p className="text-slate-400">DAX Measures</p>
        </div>

        <div className="rounded-xl bg-white/5 p-5 text-center">
          <Clock3 className="mx-auto text-blue-400" />

          <h3 className="mt-3 text-3xl font-bold text-white">
            {project.duration}
          </h3>

          <p className="text-slate-400">Duration</p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-wrap gap-4 border-t border-white/10 p-8">
        <a
          href={project.github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white transition ${
            project.github
              ? "bg-slate-800 hover:bg-slate-700"
              : "cursor-not-allowed bg-slate-700 opacity-50"
          }`}
        >
          <ExternalLink size={18} />
          GitHub
        </a>

        <a
          href={project.liveDemo || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white transition ${
            project.liveDemo
              ? "bg-blue-600 hover:bg-blue-500"
              : "cursor-not-allowed bg-blue-900 opacity-50"
          }`}
        >
          <ExternalLink size={18} />
          Live Demo
        </a>

        <button
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 text-white transition hover:bg-white/10"
        >
          View Full Case Study
          <ArrowUpRight size={18} />
        </button>
      </div>
    </motion.section>
  );
};

export default FeaturedProject;