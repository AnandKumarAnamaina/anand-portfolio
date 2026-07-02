export default function AboutImage() {
  return (
    <div className="flex justify-center">

      <div
        className="
          w-[420px]
          rounded-[34px]
          overflow-hidden
          bg-white
          shadow-xl
          border border-slate-100
          transition-all
          duration-500
          hover:-translate-y-2
        "
      >

        {/* Gradient Top */}

        <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>

        {/* Image */}

        <div className="p-6 pb-2">

          <img
            src="/about-profile.png"
            alt="Anand Kumar"
            className="
              w-full
              rounded-3xl
              object-cover
            "
          />

        </div>

        {/* Name */}

        <div className="text-center px-6">

          <h2 className="text-4xl font-bold text-slate-900">
            Anand Kumar
          </h2>

          <p className="mt-2 text-blue-600 font-medium">
            Power BI Developer
          </p>

        </div>

        {/* Divider */}

        <div className="my-6 border-t border-slate-200"></div>

        {/* Skills */}

        <div className="px-8 space-y-5">

          <div>📊 Power BI</div>

          <div>📈 Data Analytics</div>

          <div>🎓 Technical Trainer</div>

          <div>💻 React Developer</div>

        </div>

        {/* Experience */}

        <div className="mt-8 bg-slate-50 p-8 text-center">

          <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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