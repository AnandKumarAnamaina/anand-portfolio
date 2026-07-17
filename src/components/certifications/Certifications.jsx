const certifications = [
  {
    title: "Gemini Certified Faculty",
    issuer: "Google for Education",
    year: "2026",
    icon: "🤖",
    color: "from-blue-600 to-cyan-500",
    type: "Certification",
  },
  {
    title: "Google Certified Educator Level 1",
    issuer: "Google for Education",
    year: "2026",
    icon: "🎓",
    color: "from-green-600 to-emerald-500",
    type: "Certification",
  },
  {
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Forage",
    year: "2025",
    icon: "📊",
    color: "from-indigo-600 to-blue-500",
    type: "Certification",
  },
  {
    title: "How to Optimize Your Instagram Account",
    issuer: "Coursera Project Network",
    year: "2025",
    icon: "📱",
    color: "from-pink-600 to-rose-500",
    type: "Certification",
  },
  {
    title: "Lead Trainer - Power BI Master Class",
    issuer: "Infinity Code Nexus",
    year: "2026",
    icon: "👨‍🏫",
    color: "from-yellow-500 to-orange-500",
    type: "Professional Achievement",
  },
  {
    title: "Lead Trainer - Power BI Internship Program",
    issuer: "Infinity Code Nexus",
    year: "2026",
    icon: "🏅",
    color: "from-purple-600 to-pink-500",
    type: "Professional Achievement",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="inline-flex px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
            Achievements
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Licenses & Certifications
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            Professional certifications and leadership achievements in
            Business Intelligence, Data Analytics, Google for Education,
            and Technical Training.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>

              <div className="p-8">

                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-5xl shadow-lg`}
                >
                  {item.icon}
                </div>

                <span className="inline-block mt-6 px-4 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
                  {item.type}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600 font-medium">
                  {item.issuer}
                </p>

                <span className="inline-block mt-5 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
                  Issued {item.year}
                </span>

                <button
                  className="mt-8 w-full rounded-xl bg-slate-900 py-3 text-white font-semibold hover:bg-slate-800 transition"
                >
                  View Details
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}