import { motion } from "framer-motion";

const Recommendations = ({ recommendations }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
        Business Recommendations
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Strategic Recommendations
      </h2>

      <p className="mt-4 text-slate-400">
        Recommendations derived from business insights and dashboard analysis.
      </p>

      <div className="mt-10 space-y-5">
        {recommendations.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ x: 5 }}
            className="rounded-xl border border-slate-700 bg-slate-800 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {index + 1}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Recommendations;