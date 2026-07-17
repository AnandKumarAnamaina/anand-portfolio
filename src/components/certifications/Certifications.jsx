const certifications = [
  {
    title: "Power BI Masterclass",
    issuer: "Infinity Code Nexus",
    year: "2026",
    icon: "📊",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Power BI Internship",
    issuer: "Infinity Code Nexus",
    year: "2026",
    icon: "🎖️",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Microsoft Excel",
    issuer: "Professional Training",
    year: "2025",
    icon: "📈",
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Google Workspace",
    issuer: "Professional Training",
    year: "2025",
    icon: "☁️",
    color: "from-red-500 to-pink-500",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-flex px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
            Achievements
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Certifications
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            Professional certifications demonstrating my expertise in
            Business Intelligence, Data Analytics, Microsoft Office,
            and Technical Training.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {certifications.map((certificate, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >

              <div
                className={`h-2 bg-gradient-to-r ${certificate.color}`}
              ></div>

              <div className="p-8 text-center">

                <div
                  className={`mx-auto w-20 h-20 rounded-full bg-gradient-to-r ${certificate.color} flex items-center justify-center text-4xl shadow-lg`}
                >
                  {certificate.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {certificate.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {certificate.issuer}
                </p>

                <span className="mt-4 inline-block rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                  {certificate.year}
                </span>

                <button
                  className="mt-8 w-full rounded-xl bg-slate-900 py-3 text-white font-semibold transition hover:bg-blue-700"
                >
                  View Certificate
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}