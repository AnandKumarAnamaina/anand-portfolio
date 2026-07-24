import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  CheckCircle2,
  ExternalLink,
  Database,
  FileBarChart,
  Layers3,
  BarChart3,
} from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 40, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-900 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white transition hover:bg-red-500"
            >
              <X size={20} />
            </button>

            {/* Dashboard Image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-96 w-full object-cover"
            />

            <div className="space-y-10 p-10">
              {/* Header */}
              <div>
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm text-white">
                  {project.category}
                </span>

                <h2 className="mt-4 text-4xl font-bold text-white">
                  {project.title}
                </h2>

                <p className="mt-2 text-slate-300">
                  {project.subtitle}
                </p>
              </div>

              {/* Business Challenge */}
              <section>
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  Business Challenge
                </h3>

                <p className="text-slate-300">
                  {project.businessChallenge}
                </p>
              </section>

              {/* Objective */}
              <section>
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  Objective
                </h3>

                <p className="text-slate-300">
                  {project.objective}
                </p>
              </section>

              {/* Solution */}
              <section>
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  Solution
                </h3>

                <p className="text-slate-300">
                  {project.solution}
                </p>
              </section>

              {/* Business Impact */}
              <section>
                <h3 className="mb-2 text-2xl font-semibold text-white">
                  Business Impact
                </h3>

                <p className="text-green-400">
                  {project.businessImpact}
                </p>
              </section>

              {/* Insights */}
              <section>
                <h3 className="mb-5 text-2xl font-semibold text-white">
                  Key Insights
                </h3>

                <div className="space-y-3">
                  {project.insights.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-xl bg-white/5 p-4"
                    >
                      <CheckCircle2 className="mt-1 text-green-400" />

                      <p className="text-slate-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Features */}
              <section>
                <h3 className="mb-5 text-2xl font-semibold text-white">
                  Features
                </h3>

                <div className="grid gap-3 md:grid-cols-2">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-xl bg-white/5 p-4 text-slate-300"
                    >
                      ✓ {feature}
                    </div>
                  ))}
                </div>
              </section>

              {/* Technology Stack */}
              <section>
                <h3 className="mb-5 text-2xl font-semibold text-white">
                  Technology Stack
                </h3>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-500/10 px-4 py-2 text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Metrics */}
              <section className="grid gap-5 md:grid-cols-4">
                <Metric
                  icon={<Database />}
                  value={project.dataset}
                  label="Records"
                />

                <Metric
                  icon={<FileBarChart />}
                  value={project.metrics.pages}
                  label="Pages"
                />

                <Metric
                  icon={<BarChart3 />}
                  value={project.metrics.visuals}
                  label="Visuals"
                />

                <Metric
                  icon={<Layers3 />}
                  value={project.metrics.daxMeasures}
                  label="DAX Measures"
                />
              </section>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-xl px-6 py-3 text-white transition ${
                    project.github
                      ? "bg-slate-700 hover:bg-slate-600"
                      : "cursor-not-allowed bg-slate-700 opacity-50"
                  }`}
                >
                  <ExternalLink className="mr-2 inline" size={18} />
                  GitHub
                </a>

                <a
                  href={project.liveDemo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-xl px-6 py-3 text-white transition ${
                    project.liveDemo
                      ? "bg-blue-600 hover:bg-blue-500"
                      : "cursor-not-allowed bg-blue-900 opacity-50"
                  }`}
                >
                  <ExternalLink className="mr-2 inline" size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Metric = ({ icon, value, label }) => (
  <div className="rounded-2xl bg-white/5 p-6 text-center">
    <div className="mb-3 flex justify-center text-blue-400">
      {icon}
    </div>

    <h3 className="text-3xl font-bold text-white">
      {value}
    </h3>

    <p className="mt-2 text-slate-400">
      {label}
    </p>
  </div>
);

export default ProjectModal;