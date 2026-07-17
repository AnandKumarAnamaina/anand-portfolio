import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    year: "Present",
    company: "CVR College of Engineering",
    role: "Laboratory Assistant – CSE (Data Science)",
    location: "Hyderabad, India",
    points: [
      "Conduct laboratory sessions for undergraduate students.",
      "Guide students in Power BI dashboard development and data analytics.",
      "Support practical sessions, projects, and technical documentation.",
      "Maintain laboratory systems and software.",
    ],
  },
  {
    year: "2023 – 2025",
    company: "Pallavi Engineering College",
    role: "Laboratory Assistant | Teaching Faculty – Power BI, Node.js & Real-Time Projects",
    location: "Hyderabad, India",
    points: [
      "Delivered hands-on training in Power BI and Node.js.",
      "Mentored students on real-time academic and mini projects.",
      "Conducted laboratory practical sessions.",
      "Assisted students in project development and technical problem-solving.",
      "Maintained laboratory infrastructure and software.",
    ],
  },
  {
    year: "2026",
    company: "Infinity Code Nexus",
    role: "Power BI Trainer",
    location: "Online",
    points: [
      "Delivered a 15-Day Power BI Masterclass.",
      "Trained students in Power BI, DAX, Power Query and Dashboard Development.",
      "Mentored mini and major projects.",
      "Evaluated assignments and provided technical guidance.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-white py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-20">

          <span className="inline-flex items-center rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-700">
            Professional Journey
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Work
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Experience
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            My journey as a Laboratory Assistant, Technical Trainer, and
            Power BI Educator has allowed me to mentor students while
            developing practical data analytics and business intelligence skills.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative max-w-5xl mx-auto">

          {/* Center Line */}

          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-20"
              >
                {/* Timeline Dot */}

                <div className="absolute left-0 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                  <Briefcase size={18} />
                </div>

                {/* Card */}

                <div
                  className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  <div className="flex flex-wrap items-center gap-4">

                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                      <Calendar size={16} />
                      {exp.year}
                    </span>

                    <span className="inline-flex items-center gap-2 text-slate-500">
                      <MapPin size={16} />
                      {exp.location}
                    </span>

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {exp.role}
                  </h3>

                  <h4 className="mt-2 text-lg font-semibold text-purple-600">
                    {exp.company}
                  </h4>

                  <ul className="mt-6 space-y-3">

                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-600 leading-7"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-600"></span>

                        <span>{point}</span>
                      </li>
                    ))}

                  </ul>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}