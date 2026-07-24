import { motion } from "framer-motion";

const ProjectTimeline = ({ timeline }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
        Project Timeline
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        End-to-End Development Lifecycle
      </h2>

      <p className="mt-4 text-slate-400">
        Complete workflow followed while developing the Enterprise Sales
        Performance Analytics Solution.
      </p>

      <div className="mt-12 relative">

        <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-600 rounded-full"></div>

        <div className="space-y-10">

          {timeline.map((step, index) => (

            <div
              key={step.title}
              className="relative flex gap-6"
            >

              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                {index + 1}
              </div>

              <div className="flex-1 rounded-xl border border-slate-700 bg-slate-800 p-6">

                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-slate-400 leading-7">
                  {step.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </motion.section>
  );
};

export default ProjectTimeline;