const certifications = [
  {
    title: "Gemini Certified Faculty",
    issuer: "Google for Education",
    year: "2026",
    icon: "🤖",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Google Certified Educator Level 1",
    issuer: "Google for Education",
    year: "2026",
    icon: "🎓",
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "How to Optimize Your Instagram Account",
    issuer: "Coursera Project Network",
    year: "2025",
    icon: "📱",
    color: "from-pink-600 to-rose-500",
  },
  {
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Forage",
    year: "2025",
    icon: "📊",
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Power BI Masterclass",
    issuer: "Infinity Code Nexus",
    year: "2026",
    icon: "📈",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Power BI Internship",
    issuer: "Infinity Code Nexus",
    year: "2026",
    icon: "🏆",
    color: "from-purple-600 to-pink-500",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-16">
          <span className="inline-flex px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
            Achievements
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Licenses & Certifications
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            Professional certifications that demonstrate my expertise in
            Business Intelligence, Data Analytics, Google for Education,
            Microsoft Office, and Technical Training.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certificate, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div
                className={`h-2 bg-gradient-to-r ${certificate.color}`}
              ></div>

              <div className="p-8">
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${certificate.color} flex items-center justify-center text-5xl shadow-lg`}
                >
                  {certificate.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-slate-600 font-medium">
                  {certificate.issuer}
                </p>

                <span className="inline-block mt-4 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold">
                  Issued {certificate.year}
                </span>

                <button
                  disabled
                  className="mt-8 w-full rounded-xl bg-slate-900 py-3 text-white font-semibold cursor-not-allowed hover:bg-slate-800 transition"
                >
                  View Credential
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}