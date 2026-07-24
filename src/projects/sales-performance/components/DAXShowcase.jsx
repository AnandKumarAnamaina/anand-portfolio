import { motion } from "framer-motion";

const DAXShowcase = ({ measures }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
        DAX Measures
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Business Calculations
      </h2>

      <p className="mt-4 text-slate-400">
        Reusable DAX measures created to support business intelligence and
        executive reporting.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {measures.map((measure, index) => (
          <motion.div
            key={measure.name}
            whileHover={{ y: -5 }}
            className="rounded-xl border border-slate-700 bg-slate-800 p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                #{index + 1}
              </span>

              <span className="text-sm text-blue-400">
                Measure
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">
              {measure.name}
            </h3>

            <p className="mt-3 text-slate-400">
              {measure.description}
            </p>

            <pre className="mt-5 overflow-x-auto rounded-lg bg-slate-950 p-4 text-sm text-green-400">
{measure.formula}
            </pre>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default DAXShowcase;