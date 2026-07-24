import { motion } from "framer-motion";

const DatasetOverview = ({ dataset }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
        Dataset Overview
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Enterprise Sales Dataset
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dataset.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-700 bg-slate-800 p-6 text-center"
          >
            <h3 className="text-3xl font-bold text-blue-400">
              {item.value}
            </h3>

            <p className="mt-2 text-slate-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default DatasetOverview;