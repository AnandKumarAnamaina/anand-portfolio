import {
  BarChart3,
  Database,
  FileSpreadsheet,
  BrainCircuit,
  Code2,
  Server,
  Layers3,
  MonitorSmartphone,
} from "lucide-react";

const skills = [
  {
    icon: BarChart3,
    title: "Power BI",
    description: "Interactive Dashboards, DAX, Power Query, Data Modeling",
  },
  {
    icon: FileSpreadsheet,
    title: "Excel",
    description: "Advanced Excel, Pivot Tables, Charts, Power Query",
  },
  {
    icon: Database,
    title: "SQL",
    description: "MySQL, SQL Server, Oracle Database",
  },
  {
    icon: BrainCircuit,
    title: "Data Analytics",
    description: "Data Cleaning, Reporting, Business Intelligence",
  },
  {
    icon: Code2,
    title: "Programming",
    description: "Python, Java, JavaScript",
  },
  {
    icon: Server,
    title: "Big Data",
    description: "Hadoop, Hive, Pig, Spark",
  },
  {
    icon: Layers3,
    title: "Tools",
    description: "Git, GitHub, VS Code, Canva",
  },
  {
    icon: MonitorSmartphone,
    title: "Web",
    description: "React, Tailwind CSS, HTML, CSS",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">
            My Expertise
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Skills &
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Technologies
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-600 leading-8">
            My technical expertise spans Business Intelligence, Data Analytics,
            Programming, Big Data technologies, and modern Web Development.
          </p>

        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.title}
                className="
                  group
                  rounded-3xl
                  bg-white
                  p-8
                  border
                  border-slate-200
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-3
                  hover:shadow-2xl
                  hover:border-blue-200
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
                    shadow-lg
                    group-hover:scale-110
                    transition
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