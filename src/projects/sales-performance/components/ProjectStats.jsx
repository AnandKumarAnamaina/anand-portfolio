import { motion } from "framer-motion";

const ProjectStats = ({ statistics }) => {
  return (
    <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {statistics.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center"
        >
          <h3 className="text-3xl font-bold text-blue-400">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectStats;