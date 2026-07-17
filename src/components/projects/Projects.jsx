const projects = [
  {
    title: "Food Delivery Analytics Dashboard",
    category: "Power BI",
    icon: "📊",
    description:
      "Interactive Power BI dashboard analyzing restaurant performance, customer behavior, revenue, delivery efficiency and KPIs.",
    tech: ["Power BI", "DAX", "Power Query"],
    github:
      "https://github.com/AnandKumarAnamaina/FOOD-DELIVERY-ANALYTICS-DASHBOARD-Power-BI-Project",
  },
  {
    title: "Sales Performance Dashboard",
    category: "Power BI",
    icon: "📈",
    description:
      "Business Intelligence dashboard for sales, profit, regional analysis and executive KPIs.",
    tech: ["Power BI", "Excel", "DAX"],
    github:
      "https://github.com/AnandKumarAnamaina/Sales-Performance-Analysis-Dashboard-Power-BI-Project",
  },
  {
    title: "HR Analytics Dashboard",
    category: "Excel",
    icon: "👨‍💼",
    description:
      "Excel dashboard analyzing employee performance, attrition, department statistics and workforce insights.",
    tech: ["Excel", "Pivot Tables", "Charts"],
    github:
      "https://github.com/AnandKumarAnamaina/HR-Analytics-Dashboard",
  },
  {
    title: "Student Performance Dashboard",
    category: "Excel",
    icon: "🎓",
    description:
      "Dashboard for monitoring attendance, academic performance and student progress.",
    tech: ["Excel", "Dashboard", "KPIs"],
    github:
      "https://github.com/AnandKumarAnamaina/STUDENT-PERFORMANCE-DASHBOARD-PROJECT",
  },
  {
    title: "Excel Sales Dashboard",
    category: "Excel",
    icon: "📑",
    description:
      "Professional sales dashboard using Pivot Tables, KPIs, slicers and charts.",
    tech: ["Excel", "Pivot Tables", "Dashboard"],
    github:
      "https://github.com/AnandKumarAnamaina/Excel-sales-Dashboard",
  },
  {
    title: "WordCount using Hadoop",
    category: "Big Data",
    icon: "💻",
    description:
      "Classic Hadoop MapReduce implementation demonstrating distributed word counting using Cloudera.",
    tech: ["Java", "Hadoop", "MapReduce"],
    github:
      "https://github.com/AnandKumarAnamaina/WordCount-MapReduce-program-using-Hadoop-in-Cloudera",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">
            Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            A collection of Power BI, Excel and Big Data projects showcasing my
            expertise in Business Intelligence, Dashboard Development and Data
            Analytics.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

              <div className="p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-3xl text-white shadow-lg">
                  {project.icon}
                </div>

                <span className="mt-6 inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-700">
                  {project.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-800"
                  >
                    🐙 GitHub
                  </a>

                  <button
                    disabled
                    className="cursor-not-allowed rounded-xl border border-slate-300 px-5 py-3 text-slate-500"
                  >
                    🔗 Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}