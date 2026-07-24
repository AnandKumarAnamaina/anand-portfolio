import { motion } from "framer-motion";

const ProjectHero = ({ hero }) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 lg:p-14">

      {/* Background Glow */}
      <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            ⭐ Featured Enterprise Case Study
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 max-w-5xl text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl"
        >
          {hero.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-xl font-medium text-blue-400"
        >
          {hero.subtitle}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-4xl text-lg leading-8 text-slate-300"
        >
          {hero.description}
        </motion.p>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {hero.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-800 px-5 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-blue-500 hover:bg-slate-700"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Explore Dashboard
          </button>

          <button className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-white transition hover:border-blue-500">
            GitHub
          </button>

          <button className="rounded-xl border border-slate-700 bg-slate-800 px-6 py-3 font-semibold text-white transition hover:border-blue-500">
            Documentation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;