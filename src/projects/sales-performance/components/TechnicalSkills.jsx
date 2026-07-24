import { motion } from "framer-motion";

const TechnicalSkills = ({ skills }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
        Technical Skills
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Technologies & Tools Used
      </h2>

      <p className="mt-4 text-slate-400">
        Complete technology stack used to design, develop, and deliver this
        enterprise Power BI solution.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl border border-slate-700 bg-slate-800 p-5 text-center"
          >
            <div className="text-2xl font-bold text-blue-400">
              {index + 1}
            </div>

            <div className="mt-3 text-white font-semibold">
              {skill}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TechnicalSkills;