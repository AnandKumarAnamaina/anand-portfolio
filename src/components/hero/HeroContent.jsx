export default function HeroContent() {
  return (
    <div className="max-w-xl">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-purple-500"></span>

        <span className="text-sm font-semibold text-purple-700">
          Power BI Developer & Data Analyst
        </span>
      </div>

      {/* Heading */}
      <h1 className="mt-5 text-6xl lg:text-7xl font-extrabold leading-[1.05] text-slate-900">
        Hi, I'm
        <br />

        <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Anand Kumar
        </span>
      </h1>

      {/* Subtitle */}
      <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
        Turning

        <span className="text-blue-600"> Data </span>

        Into

        <span className="text-purple-600"> Insights</span>
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
        I build interactive dashboards and business intelligence solutions
        that transform raw data into meaningful insights, helping
        organizations make smarter and faster decisions.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">

        <a
          href="#projects"
          className="
            inline-flex
            items-center
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            px-8
            py-4
            font-semibold
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-purple-300
          "
        >
          View My Work

          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

        <a
          href="#contact"
          className="
            inline-flex
            items-center
            rounded-2xl
            border
            border-slate-300
            bg-white
            px-8
            py-4
            font-semibold
            text-slate-800
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:bg-slate-50
            hover:shadow-lg
          "
        >
          Contact Me
        </a>

      </div>

    </div>
  );
}