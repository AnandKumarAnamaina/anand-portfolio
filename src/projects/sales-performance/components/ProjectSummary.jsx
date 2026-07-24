import { motion } from "framer-motion";

const ProjectSummary = ({ summary }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 text-center"
    >
      <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
        Project Summary
      </span>

      <h2 className="mt-4 text-4xl font-bold text-white">
        {summary.title}
      </h2>

      <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-300">
        {summary.description}
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {summary.highlights.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-slate-700 bg-slate-800 p-5"
          >
            <p className="font-medium text-white">
              ✔ {item}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-5">

        <a
          href={summary.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          GitHub Repository
        </a>

        <a
          href={summary.pbix}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-700 bg-slate-800 px-8 py-4 font-semibold text-white transition hover:border-blue-500"
        >
          Download PBIX
        </a>

        <a
          href={summary.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-700 bg-slate-800 px-8 py-4 font-semibold text-white transition hover:border-blue-500"
        >
          Live Dashboard
        </a>

        <a
          href={summary.contact}
          className="rounded-xl border border-slate-700 bg-slate-800 px-8 py-4 font-semibold text-white transition hover:border-blue-500"
        >
          Contact Me
        </a>

      </div>

      <div className="mt-16 border-t border-slate-700 pt-10">

        <h3 className="text-3xl font-bold text-white">
          Thank You
        </h3>

        <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-400">
          Thank you for exploring this Power BI case study.
          This project demonstrates my ability to transform raw
          business data into actionable insights using modern
          Business Intelligence techniques.
          I look forward to contributing these skills to
          real-world analytics projects.
        </p>

      </div>
    </motion.section>
  );
};

export default ProjectSummary;