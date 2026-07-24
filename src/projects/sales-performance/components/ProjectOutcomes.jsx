import { motion } from "framer-motion";

const ProjectOutcomes = ({ outcomes }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
        Project Outcomes
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Business Value Delivered
      </h2>

      <p className="mt-4 text-slate-400">
        Measurable outcomes achieved by implementing the Power BI sales analytics
        solution.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {outcomes.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-slate-700 bg-slate-800 p-6"
          >
            <div className="text-4xl font-bold text-blue-400">
              {item.metric}
            </div>

            <h3 className="mt-4 text-lg font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-400 leading-7">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectOutcomes;