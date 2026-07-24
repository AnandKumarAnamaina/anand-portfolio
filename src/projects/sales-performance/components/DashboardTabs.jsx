import { motion } from "framer-motion";

const DashboardTabs = ({ dashboards, activeTab, onTabChange }) => {
  return (
    <div className="mt-16 flex flex-wrap justify-center gap-4">
      {dashboards.map((dashboard) => (
        <motion.button
          key={dashboard.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onTabChange(dashboard.id)}
          className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${
            activeTab === dashboard.id
              ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          {dashboard.title}
        </motion.button>
      ))}
    </div>
  );
};

export default DashboardTabs;