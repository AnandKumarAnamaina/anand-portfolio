export default function HeroContent() {
  return (
    <div>

      {/* Badge */}

      <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-6 py-3">
        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>

        <span className="text-purple-700 font-medium">
          Power BI Developer & Data Analyst
        </span>
      </div>

      {/* Heading */}

      <h1 className="mt-6 text-7xl font-extrabold leading-tight text-slate-900">
        Hi, I'm
        <br />

        <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
          Anand Kumar
        </span>

      </h1>

      {/* Subtitle */}

      <h2 className="mt-5 text-5xl font-bold text-slate-900">

        Turning

        <span className="text-blue-600"> Data </span>

        Into

        <span className="text-purple-600"> Insights</span>

      </h2>

      {/* Description */}

      <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
        I build interactive dashboards and data solutions that help businesses
        make smarter decisions and drive growth.
      </p>

      {/* Buttons */}

      <div className="mt-12 flex gap-6">

        <a
          href="#projects"
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
         View My Work
<span className="ml-2 group-hover:translate-x-1 transition">
  →
</span>
        </a>

        <a
          href="#contact"
          className="
group
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
          Contact Me
        </a>

      </div>

    </div>
  );
}