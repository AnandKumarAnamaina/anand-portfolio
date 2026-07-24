import { motion } from "framer-motion";

const ChallengesSolutions = ({ items }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-700 bg-slate-900 p-8"
    >
      <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
        Challenges & Solutions
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Technical Problems Solved
      </h2>

      <p className="mt-4 text-slate-400">
        Common business intelligence challenges encountered during the project
        and the solutions implemented.
      </p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-700">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-800">
              <th className="border-b border-slate-700 p-4 text-left text-white">
                Challenge
              </th>

              <th className="border-b border-slate-700 p-4 text-left text-white">
                Solution
              </th>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => (
              <tr
                key={index}
                className="border-b border-slate-700 hover:bg-slate-800/50"
              >
                <td className="p-4 text-slate-300">
                  {item.challenge}
                </td>

                <td className="p-4 text-slate-400">
                  {item.solution}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.section>
  );
};

export default ChallengesSolutions;