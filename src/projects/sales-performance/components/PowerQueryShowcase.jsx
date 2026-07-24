import { motion } from "framer-motion";

const PowerQueryShowcase = ({ transformations }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
        Power Query
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Data Cleaning & Transformation
      </h2>

      <p className="mt-4 text-slate-400">
        ETL operations performed in Power Query before creating the data model.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {transformations.map((item, index) => (
          <motion.div
            key={item}
            whileHover={{ y: -5 }}
            className="rounded-xl border border-slate-700 bg-slate-800 p-5 transition"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              {index + 1}
            </div>

            <p className="font-medium text-slate-200">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PowerQueryShowcase;