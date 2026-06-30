import StatCard from "./StatCard";

export default function AboutContent() {
  return (
    <div>

      <span className="px-5 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">
        About Me
      </span>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Turning Data Into
        <br />

        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Business Growth
        </span>

      </h2>

      <p className="mt-8 text-lg text-slate-600 leading-9">

        I'm Anand Kumar Anamaina, a passionate Power BI Developer,
        Data Analyst and Technical Trainer with expertise in Business Intelligence,
        Dashboard Development, Data Visualization and Analytics.

        I enjoy transforming raw data into meaningful dashboards that help
        organizations make smarter business decisions.

      </p>

      <div className="grid grid-cols-2 gap-6 mt-10">

        <StatCard
          number="3+"
          title="Years Experience"
          color="text-blue-600"
        />

        <StatCard
          number="300+"
          title="Students Trained"
          color="text-purple-600"
        />

        <StatCard
          number="15+"
          title="Projects"
          color="text-blue-600"
        />

        <StatCard
          number="50+"
          title="Dashboards"
          color="text-purple-600"
        />

      </div>

      <button className="mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:scale-105 transition">
        Download Resume
      </button>

    </div>
  );
}