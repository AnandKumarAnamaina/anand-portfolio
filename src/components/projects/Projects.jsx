import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import projects from "./projectsData";
import FilterTabs from "./FilterTabs";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

// ⭐ New Enterprise Case Study
import SalesPerformanceCaseStudy from "../../projects/sales-performance/SalesPerformanceCaseStudy";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Categories
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    []
  );

  // Exclude featured project from grid
  const filteredProjects = useMemo(() => {
    const remainingProjects = projects.filter(
      (project) => !project.featured
    );

    if (selectedCategory === "All") {
      return remainingProjects;
    }

    return remainingProjects.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* ========================= */}
        {/* Section Heading */}
        {/* ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
            Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Projects &
            <span className="text-blue-500"> Case Studies</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            Explore enterprise-grade Business Intelligence solutions,
            Power BI dashboards, analytics case studies, and
            real-world data-driven applications.
          </p>
        </motion.div>

        {/* ==================================================== */}
        {/* Enterprise Featured Case Study */}
        {/* ==================================================== */}

        <div className="mb-24">
          <SalesPerformanceCaseStudy />
        </div>

        {/* ========================= */}
        {/* Other Projects Heading */}
        {/* ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="text-3xl font-bold text-white">
            More Projects
          </h3>

          <p className="mt-3 text-slate-400">
            Additional dashboards, analytics solutions, and business
            intelligence projects.
          </p>
        </motion.div>

        {/* ========================= */}
        {/* Filters */}
        {/* ========================= */}

        <FilterTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* ========================= */}
        {/* Project Grid */}
        {/* ========================= */}

        <motion.div
          layout
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ========================= */}
        {/* Empty State */}
        {/* ========================= */}

        {filteredProjects.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-400">
              No projects found for this category.
            </p>
          </div>
        )}
      </div>

      {/* ========================= */}
      {/* Project Modal */}
      {/* ========================= */}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;