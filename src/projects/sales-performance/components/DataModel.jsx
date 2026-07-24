import { motion } from "framer-motion";

const DataModel = ({ model }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
        Data Modeling
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Star Schema Architecture
      </h2>

      <p className="mt-4 text-slate-400">
        The Power BI data model follows a Star Schema design to improve
        performance, simplify relationships, and enable efficient DAX calculations.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        {/* Dimension Tables */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-blue-400">
            Dimension Tables
          </h3>

          <div className="space-y-4">
            {model.dimensions.map((table) => (
              <div
                key={table}
                className="rounded-xl border border-slate-700 bg-slate-800 p-4"
              >
                {table}
              </div>
            ))}
          </div>
        </div>

        {/* Fact Table */}
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-2xl border-2 border-blue-500 bg-blue-500/10 p-8 text-center">
            <h3 className="text-2xl font-bold text-white">
              {model.fact}
            </h3>

            <p className="mt-2 text-blue-300">
              Central Fact Table
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div>
          <h3 className="mb-4 text-xl font-semibold text-blue-400">
            Benefits
          </h3>

          <div className="space-y-4">
            {model.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border border-slate-700 bg-slate-800 p-4"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default DataModel;