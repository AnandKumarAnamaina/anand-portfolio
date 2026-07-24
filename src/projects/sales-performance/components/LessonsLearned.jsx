import { motion } from "framer-motion";

const LessonsLearned = ({ lessons }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
        Lessons Learned
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Key Learnings from This Project
      </h2>

      <p className="mt-4 text-slate-400">
        This project strengthened both my technical capabilities and business
        understanding while developing an enterprise-level Power BI solution.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {lessons.map((lesson, index) => (
          <motion.div
            key={lesson.title}
            whileHover={{ y: -5 }}
            className="rounded-2xl border border-slate-700 bg-slate-800 p-6"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
              {index + 1}
            </div>

            <h3 className="text-xl font-semibold text-white">
              {lesson.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-400">
              {lesson.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LessonsLearned;