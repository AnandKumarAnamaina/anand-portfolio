const stats = [
  {
    number: "15",
    title: "Days Power BI Master Class",
    icon: "📊",
    color: "from-blue-600 to-cyan-500",
  },
  {
    number: "45+",
    title: "Hours of Live Training",
    icon: "🎤",
    color: "from-purple-600 to-pink-500",
  },
  {
    number: "50+",
    title: "Master Class Participants",
    icon: "👨‍🎓",
    color: "from-green-600 to-emerald-500",
  },
  {
    number: "100%",
    title: "Real-Time Project Mentoring",
    icon: "🚀",
    color: "from-yellow-500 to-orange-500",
  },
  {
    number: "6+",
    title: "Professional Certifications",
    icon: "🏆",
    color: "from-red-500 to-rose-500",
  },
  {
    number: "3+",
    title: "Years of Teaching & Lab Experience",
    icon: "💼",
    color: "from-indigo-600 to-violet-500",
  },
];

export default function Statistics() {
  return (
    <section
      id="statistics"
      className="py-24 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="inline-flex px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            Achievements
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            My Journey in Numbers
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            A snapshot of my professional journey as a Data Analyst,
            Power BI Lead Trainer, Laboratory Assistant and Technical Mentor.
          </p>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {stats.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >

              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>

              <div className="p-8 text-center">

                <div
                  className={`mx-auto w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-5xl shadow-lg`}
                >
                  {item.icon}
                </div>

                <h3 className="mt-8 text-5xl font-extrabold text-slate-900">
                  {item.number}
                </h3>

                <p className="mt-4 text-lg font-semibold text-slate-700">
                  {item.title}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}