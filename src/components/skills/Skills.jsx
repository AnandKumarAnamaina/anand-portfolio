import {
  BarChart3,
  FileSpreadsheet,
  Database,
  BrainCircuit,
  Code2,
  Server,
  Globe,
  Palette,
} from "lucide-react";

const skills = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "Power BI, DAX, Power Query, Data Modeling, Dashboard Development",
  },
  {
    icon: FileSpreadsheet,
    title: "Microsoft Office",
    description:
      "Advanced Excel, Microsoft Word, Microsoft PowerPoint",
  },
  {
    icon: Code2,
    title: "Programming",
    description:
      "Python (Basic), SQL (Basic)",
  },
  {
    icon: Database,
    title: "Database",
    description:
      "MySQL, Oracle Database",
  },
  {
    icon: Server,
    title: "Big Data",
    description:
      "Hadoop, Hive, Pig, MapReduce",
  },
  {
    icon: Globe,
    title: "Web Fundamentals",
    description:
      "HTML (Basic), CSS (Basic)",
  },
  {
    icon: Palette,
    title: "Design & Productivity",
    description:
      "Canva, VS Code, GitHub, Google Workspace",
  },
  {
    icon: BrainCircuit,
    title: "Data Analytics",
    description:
      "Data Cleaning, Reporting, Data Visualization, Business Insights",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen bg-slate-50 py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Heading */}
        <div className="text-center mb-16">

          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Technical Skills
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Skills &
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Technologies
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
            My technical skills focus on Business Intelligence, Data Analytics,
            Big Data technologies, and software tools that I use for dashboard
            development, data analysis, and technical training.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-blue-200
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-purple-600
                    text-white
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {skill.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  {skill.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}