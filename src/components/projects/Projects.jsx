import {
  Github,
  ExternalLink,
  BarChart3,
  Database,
  GraduationCap,
  ShoppingCart,
  FileSpreadsheet,
  Cpu,
} from "lucide-react";

const projects = [
  {
    title: "Food Delivery Analytics Dashboard",
    category: "Power BI",
    description:
      "Interactive Power BI dashboard providing insights into revenue, delivery performance, restaurants, customer behavior, and operational KPIs.",
    technologies: ["Power BI", "DAX", "Power Query"],
    icon: ShoppingCart,
    github:
      "https://github.com/AnandKumarAnamaina/FOOD-DELIVERY-ANALYTICS-DASHBOARD-Power-BI-Project",
  },
  {
    title: "Sales Performance Analysis Dashboard",
    category: "Power BI",
    description:
      "Business intelligence dashboard analyzing sales, profit, regional performance, KPIs, and trends for better decision-making.",
    technologies: ["Power BI", "DAX", "Excel"],
    icon: BarChart3,
    github:
      "https://github.com/AnandKumarAnamaina/Sales-Performance-Analysis-Dashboard-Power-BI-Project",
  },
  {
    title: "HR Analytics Dashboard",
    category: "Excel",
    description:
      "Interactive HR dashboard analyzing employee performance, attrition, department statistics, and workforce insights.",
    technologies: ["Excel", "Pivot Tables", "Charts"],
    icon: Database,
    github:
      "https://github.com/AnandKumarAnamaina/HR-Analytics-Dashboard",
  },
  {
    title: "Student Performance Dashboard",
    category: "Excel",
    description:
      "Dashboard for monitoring student attendance, academic performance, subject analysis, and overall progress.",
    technologies: ["Excel", "Dashboard", "KPIs"],
    icon: GraduationCap,
    github:
      "https://github.com/AnandKumarAnamaina/STUDENT-PERFORMANCE-DASHBOARD-PROJECT",
  },
  {
    title: "Excel Sales Dashboard",
    category: "Excel",
    description:
      "Interactive sales dashboard built using Pivot Tables, KPIs, charts, and automation techniques.",
    technologies: ["Excel", "Pivot Tables", "Dashboard"],
    icon: FileSpreadsheet,
    github:
      "https://github.com/AnandKumarAnamaina/Excel-sales-Dashboard",
  },
  {
    title: "WordCount using Hadoop",
    category: "Big Data",
    description:
      "Implementation of the classic WordCount MapReduce program using Hadoop in Cloudera.",
    technologies: ["Java", "Hadoop", "MapReduce"],
    icon: Cpu,
    github:
      "https://github.com/AnandKumarAnamaina/WordCount-MapReduce-program-using-Hadoop-in-Cloudera",
  },
  {
    title: "Max Temperature using Hadoop",
    category: "Big Data",
    description:
      "MapReduce application for processing weather datasets to determine maximum temperatures using Hadoop.",
    technologies: ["Java", "Hadoop", "MapReduce"],
    icon: Cpu,
    github:
      "https://github.com/AnandKumarAnamaina/Max-Temperature-MapReduce-Cloudera",
  },
  {
    title: "Matrix Multiplication using Hadoop",
    category: "Big Data",
    description:
      "Distributed matrix multiplication using Hadoop MapReduce demonstrating parallel computation.",
    technologies: ["Java", "Hadoop", "MapReduce"],
    icon: Cpu,
    github:
      "https://github.com/AnandKumarAnamaina/Matrix-Multiplication-using-Hadoop-MapReduce-Cloudera",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-50 py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600">
            A collection of real-world dashboards and Big Data projects
            demonstrating my expertise in Power BI, Excel, Business Intelligence,
            and Hadoop technologies.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <Icon size={28} />
                </div>

                <span className="mt-6 inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-600">
                  {project.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-700"
                  >
                    <Github size={18} />
                    GitHub
                  </a>

                  <button
                    className="flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-slate-700 transition hover:bg-slate-100"
                  >
                    <ExternalLink size={18} />
                    Details
                  </button>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}