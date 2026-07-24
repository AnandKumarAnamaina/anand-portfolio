import { motion } from "framer-motion";

const ETLPipeline = ({ pipeline }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
        ETL Pipeline
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Data Transformation Workflow
      </h2>

      <p className="mt-4 text-slate-400">
        Complete ETL workflow used to transform raw enterprise sales
        data into business intelligence dashboards.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-4 lg:grid-cols-7">

        {pipeline.map((step, index) => (
          <div
            key={step.title}
            className="flex flex-col items-center"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-blue-500 bg-blue-500/10 text-center text-sm font-bold text-blue-400">
              {index + 1}
            </div>

            <h3 className="mt-5 text-center font-semibold text-white">
              {step.title}
            </h3>

            <p className="mt-2 text-center text-sm text-slate-400">
              {step.description}
            </p>
          </div>
        ))}

      </div>
    </motion.section>
  );
};

export default ETLPipeline;