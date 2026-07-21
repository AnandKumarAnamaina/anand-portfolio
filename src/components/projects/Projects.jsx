import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "./projectsData";

const categories = ["All", "Power BI", "Excel", "Big Data"];

export default function Projects() {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projects
      : projects.filter((project) => project.category === selected);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ---------------- HEADER ---------------- */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Portfolio Showcase
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            A curated collection of Power BI, Excel, and Big Data projects
            demonstrating dashboard development, business intelligence,
            data modeling, and analytics expertise.
          </p>
        </motion.div>

        {/* ---------------- FILTERS ---------------- */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelected(category)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
                selected === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-slate-700 shadow hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* ---------------- PROJECT GRID ---------------- */}

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.45 }}
            className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ---------------- FOOTER TEXT ---------------- */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-slate-600">
            Every project reflects my passion for transforming
            <span className="font-semibold text-blue-600">
              {" "}raw data into meaningful business insights
            </span>
            through modern analytics and visualization.
          </p>
        </motion.div>
      </div>
    </section>
  );
}