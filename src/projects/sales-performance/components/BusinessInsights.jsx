import { motion } from "framer-motion";

const BusinessInsights = ({ insights }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
        Business Insights
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Key Findings from Sales Analytics
      </h2>

      <p className="mt-4 text-slate-400">
        Actionable insights generated through Power BI dashboards and DAX analysis.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {insights.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="rounded-xl border border-slate-700 bg-slate-800 p-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                {index + 1}
              </div>

              <h3 className="text-lg font-bold text-white">
                {item.title}
              </h3>
            </div>

            <p className="mt-4 text-slate-400 leading-7">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default BusinessInsights;