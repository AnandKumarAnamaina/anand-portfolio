export default function AboutContent() {
  return (
    <div>

      {/* Section Badge */}

      <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">

        👤 Who I Am

      </span>

      {/* Heading */}

      <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">

        Turning Data Into

        <br />

        <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">

          Business Growth

        </span>

      </h2>

      {/* Short Description */}

      <p className="mt-8 text-lg leading-9 text-slate-600 max-w-2xl">

        I help businesses transform complex data into interactive dashboards
        using Power BI, SQL, and analytics. My passion is turning raw data
        into meaningful insights that support smarter business decisions while
        mentoring future professionals.

      </p>

      {/* Skill Chips */}

      <div className="mt-10 flex flex-wrap gap-4">

        <span className="px-5 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
          📊 Power BI
        </span>

        <span className="px-5 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
          🗄 SQL
        </span>

        <span className="px-5 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
          📈 Data Analytics
        </span>

        <span className="px-5 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
          📉 Dashboarding
        </span>

        <span className="px-5 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
          ⚡ DAX
        </span>

        <span className="px-5 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition">
          🎓 Trainer
        </span>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-2 gap-6 mt-12">

        <div className="rounded-3xl bg-white p-6 shadow-lg border border-slate-100">
          <h3 className="text-5xl font-bold text-blue-600">300+</h3>
          <p className="mt-2 text-slate-500">Students Trained</p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg border border-slate-100">
          <h3 className="text-5xl font-bold text-purple-600">50+</h3>
          <p className="mt-2 text-slate-500">Dashboards Built</p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg border border-slate-100">
          <h3 className="text-5xl font-bold text-blue-600">20+</h3>
          <p className="mt-2 text-slate-500">Projects Delivered</p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-lg border border-slate-100">
          <h3 className="text-5xl font-bold text-purple-600">3+</h3>
          <p className="mt-2 text-slate-500">Years Experience</p>
        </div>

      </div>

      {/* Button */}

      <a
        href="/Anand_Kumar_CV.pdf"
        className="
          inline-block
          mt-10
          px-8
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-purple-600
          text-white
          font-semibold
          shadow-xl
          hover:shadow-purple-300
          hover:-translate-y-1
          transition-all
          duration-300
        "
      >
        Download CV
      </a>

    </div>
  );
}