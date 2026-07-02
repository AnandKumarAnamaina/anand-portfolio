import {
  BarChart3,
  Database,
  GraduationCap,
  Code2,
} from "lucide-react";
export default function AboutImage() {
  return (
    <div className="flex justify-center">

      <div
        className="
          max-w-[330px] w-full
          rounded-[34px]
          overflow-hidden
          bg-white
          shadow-xl
          border border-slate-100
          transition-all
          duration-500
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >

        {/* Gradient Top */}

        <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>

        {/* Image */}

        <div className="p-5 pb-3">

          <img
            src="/about-profile.png"
            alt="Anand Kumar"
            className="
              w-full
              h-[400px]
              object-cover
              rounded-3xl
            "
          />

        </div>

        {/* Name */}

        <div className="text-center px-6">

          <h2 className="text-3xl font-bold text-slate-900">
            Anand Kumar
          </h2>

          <p className="mt-2 text-blue-600 font-medium">
            Power BI Developer
          </p>

        </div>

        {/* Divider */}

        <div className="my-6 border-t border-slate-200"></div>

        {/* Skills */}

        <div className="px-6 py-3 space-y-4">

  <div className="flex items-center gap-3">
    <BarChart3 size={18} className="text-blue-600" />
    <span>Power BI</span>
  </div>

  <div className="flex items-center gap-3">
    <Database size={18} className="text-purple-600" />
    <span>Data Analytics</span>
  </div>

  <div className="flex items-center gap-3">
    <GraduationCap size={18} className="text-blue-600" />
    <span>Technical Trainer</span>
  </div>

  <div className="flex items-center gap-3">
    <Code2 size={18} className="text-purple-600" />
    <span>React Developer</span>
  </div>

</div>

        {/* Experience */}

        <div className="mt-6 bg-slate-50 py-4 text-center">

          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            3+
          </h2>

          <p className="mt-2 text-slate-500">
            Years Experience
          </p>

        </div>

      </div>

    </div>
  );
}