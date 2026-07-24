import { motion, AnimatePresence } from "framer-motion";

const DashboardViewer = ({ dashboard }) => {
  return (
    <div className="mt-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={dashboard.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900"
        >
          {/* Dashboard Image */}
          <div className="bg-slate-950 p-4">
            <img
              src={dashboard.image}
              alt={dashboard.title}
              className="w-full rounded-2xl object-contain"
            />
          </div>

          {/* Information */}
          <div className="border-t border-slate-700 p-8">
            <h3 className="text-3xl font-bold text-white">
              {dashboard.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              {dashboard.description}
            </p>

            <div className="mt-8">
              <h4 className="mb-4 text-lg font-semibold text-blue-400">
                Key Performance Indicators
              </h4>

              <div className="flex flex-wrap gap-3">
                {dashboard.kpis.map((kpi) => (
                  <span
                    key={kpi}
                    className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                  >
                    {kpi}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DashboardViewer;