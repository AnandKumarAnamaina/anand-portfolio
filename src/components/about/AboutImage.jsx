export default function AboutImage() {
  return (
    <div className="flex justify-center">

      <div
        className="
          relative
          w-[380px]
          rounded-[36px]
          overflow-hidden
          bg-white
          border
          border-slate-200
          shadow-[0_30px_70px_rgba(0,0,0,0.08)]
          hover:-translate-y-2
          transition-all
          duration-500
        "
      >

        {/* Gradient Top */}

        <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600"></div>

        {/* Image */}

        <div className="p-8 pb-2">

          <img
            src="/profile.png"
            alt="Anand Kumar"
            className="
              w-[250px]
              mx-auto
              object-contain
            "
          />

        </div>

        {/* Name */}

        <div className="px-8 text-center">

          <h3 className="text-2xl font-bold text-slate-900">
            Anand Kumar
          </h3>

          <p className="text-blue-600 font-medium mt-1">
            Power BI Developer
          </p>

        </div>

        {/* Divider */}

        <div className="my-6 border-t border-slate-200"></div>

        {/* Skills */}

        <div className="px-8 space-y-4">

          <div>📊 Power BI</div>

          <div>📈 Data Analytics</div>

          <div>🎓 Technical Trainer</div>

          <div>💻 React Developer</div>

        </div>

        {/* Experience */}

        <div className="mt-8 rounded-t-[30px] bg-slate-50 p-8 text-center">

          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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