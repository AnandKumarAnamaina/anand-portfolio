import { motion } from "framer-motion";

const FilterTabs = ({
  categories = [],
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="mb-12 flex w-full justify-center">
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => {
          const active = selectedCategory === category;

          return (
            <motion.button
              key={category}
              type="button"
              aria-pressed={active}
              onClick={() => onCategoryChange(category)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`relative whitespace-nowrap rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                active
                  ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}

              {active && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full border border-blue-400"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 35,
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterTabs;