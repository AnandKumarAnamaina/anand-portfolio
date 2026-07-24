import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import projects from "./projectsData";
import FeaturedProject from "./FeaturedProject";
import FilterTabs from "./FilterTabs";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Categories
  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    []
  );

  // Featured Project
  const featuredProject = useMemo(
    () => projects.find((project) => project.featured),
    []
  );

  // Remaining Projects
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
      className="relative py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
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
            A collection of business intelligence dashboards,
            analytics solutions, and data-driven applications
            built to solve real-world business problems.
          </p>
        </motion.div>

        {/* Filter */}
        <FilterTabs
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Featured Project */}
        {featuredProject && (
          <FeaturedProject
            project={featuredProject}
            onOpen={setSelectedProject}
          />
        )}

        {/* Project Grid */}
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

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-lg text-slate-400">
              No projects found for this category.
            </p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;