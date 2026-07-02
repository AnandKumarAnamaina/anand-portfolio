import {
  User,
  BarChart3,
  Database,
  GraduationCap,
  Briefcase,
  Download,
  BrainCircuit,
  LayoutDashboard,
} from "lucide-react";
export default function AboutContent() {
  return (
    <div>
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">
        <User size={18} />
        <span>Who I Am</span>
      </div>

      {/* Heading */}
      <h2 className="mt-6 max-w-2xl text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
        Turning Data Into
        <br />
        <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Business Growth
        </span>
      </h2>

      {/* Description */}
      <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-600">
        I help businesses transform complex data into interactive dashboards
        using Power BI, SQL, and analytics. My passion is turning raw data into
        meaningful insights that support smarter business decisions while
        mentoring future professionals.
      </p>

      {/* Skill Chips */}
      <div className="mt-10 flex flex-wrap gap-4">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <BarChart3 size={18} className="text-blue-600" />
          <span>Power BI</span>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <Database size={18} className="text-blue-600" />
          <span>SQL</span>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <BrainCircuit size={18} className="text-purple-600" />
          <span>DAX</span>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <LayoutDashboard size={18} className="text-blue-600" />
          <span>Dashboarding</span>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <GraduationCap size={18} className="text-purple-600" />
          <span>Trainer</span>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <Briefcase size={18} className="text-blue-600" />
          <span>Business Intelligence</span>
        </div>
      </div>

      {/* Statistics */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-5xl font-bold text-blue-600">300+</h3>
          <p className="mt-2 text-slate-500">Students Trained</p>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-5xl font-bold text-purple-600">50+</h3>
          <p className="mt-2 text-slate-500">Dashboards Built</p>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-5xl font-bold text-blue-600">20+</h3>
          <p className="mt-2 text-slate-500">Projects Delivered</p>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <h3 className="text-5xl font-bold text-purple-600">3+</h3>
          <p className="mt-2 text-slate-500">Years Experience</p>
        </div>
      </div>

      {/* Button */}
      <a
        href="/Anand_Kumar_CV.pdf"
        className="mt-10 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-300"
      >
        <Download size={18} />
        Download CV
      </a>
    </div>
  );
}