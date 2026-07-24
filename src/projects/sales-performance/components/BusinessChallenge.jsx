import { motion } from "framer-motion";

const BusinessChallenge = ({ challenge }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
        Business Challenge
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        {challenge.title}
      </h2>

      <p className="mt-6 leading-8 text-slate-300">
        {challenge.description}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {challenge.points.map((point) => (
          <div
            key={point}
            className="rounded-xl border border-slate-700 bg-slate-800 p-5"
          >
            <p className="text-slate-300">{point}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default BusinessChallenge;