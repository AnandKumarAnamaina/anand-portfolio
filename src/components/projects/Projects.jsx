import {
  GitHub,
  ExternalLink,
  BarChart3,
  Database,
  GraduationCap,
  Briefcase,
  Folder,
  FileText,
} from "lucide-react";

const projects = [
  {
    title: "Food Delivery Analytics Dashboard",
    category: "Power BI",
    description:
      "Interactive Power BI dashboard analyzing restaurant performance, customer behavior, revenue, delivery efficiency, and business KPIs.",
    tech: ["Power BI", "DAX", "Power Query"],
    icon: BarChart3,
    github:
      "https://github.com/AnandKumarAnamaina/FOOD-DELIVERY-ANALYTICS-DASHBOARD-Power-BI-Project",
  },
  {
    title: "Sales Performance Dashboard",
    category: "Power BI",
    description:
      "Business Intelligence dashboard providing sales trends, profitability analysis, regional performance, and executive KPIs.",
    tech: ["Power BI", "Excel", "DAX"],
    icon: Database,
    github:
      "https://github.com/AnandKumarAnamaina/Sales-Performance-Analysis-Dashboard-Power-BI-Project",
  },
  {
    title: "HR Analytics Dashboard",
    category: "Excel",
    description:
      "Interactive HR dashboard analyzing employee performance, attrition, department statistics, and workforce insights.",
    tech: ["Excel", "Pivot Tables", "Charts"],
    icon: Briefcase,
    github:
      "https://github.com/AnandKumarAnamaina/HR-Analytics-Dashboard",
  },
  {
    title: "Student Performance Dashboard",
    category: "Excel",
    description:
      "Dashboard for monitoring student attendance, academic performance, subject analysis, and overall progress.",
    tech: ["Excel", "Dashboard", "KPIs"],
    icon: GraduationCap,
    github:
      "https://github.com/AnandKumarAnamaina/STUDENT-PERFORMANCE-DASHBOARD-PROJECT",
  },
  {
    title: "Excel Sales Dashboard",
    category: "Excel",
    description:
      "Professional Excel dashboard using Pivot Tables, KPIs, slicers, and dynamic charts.",
    tech: ["Excel", "Pivot Tables", "Dashboard"],
    icon: FileText,
    github:
      "https://github.com/AnandKumarAnamaina/Excel-sales-Dashboard",
  },
  {
    title: "WordCount using Hadoop",
    category: "Big Data",
    description:
      "Classic Hadoop MapReduce implementation demonstrating distributed word counting using Cloudera.",
    tech: ["Java", "Hadoop", "MapReduce"],
    icon: Folder,
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
          <span className="inline-flex px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            A collection of Power BI, Excel, and Big Data projects showcasing my
            expertise in Business Intelligence, Dashboard Development, and Data
            Analytics.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

                <div className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
                    <Icon size={30} />
                  </div>

                  <span className="inline-block mt-6 px-4 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold">
                    {project.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-7">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition"
                    >
                      <GitHub size={18} />
                      GitHub
                    </a>

                    <button
                      disabled
                      className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-slate-500 cursor-not-allowed"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}