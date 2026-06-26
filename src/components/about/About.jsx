export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-8 relative overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-[150px] opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-[150px] opacity-30"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

{/* LEFT */}
<div className="relative flex justify-center">

  {/* Background Glow */}
  <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 blur-[120px] opacity-40"></div>

  {/* Gradient Border */}
  <div className="relative p-[2px] rounded-[30px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl">

    {/* White Card */}
    <div className="bg-white rounded-[32px] p-2">

    <img
  src="/profile.png"
  alt="Anand Kumar"
  className="w-[250px] lg:w-[280px] mx-auto object-contain transition duration-500 hover:scale-105"
/>

    </div>

  </div>

  {/* Floating Badge 1 */}
  <div className="absolute -top-6 -left-6 bg-white shadow-xl rounded-3xl px-6 py-4">
    <h3 className="text-3xl font-bold text-blue-600">3+</h3>
    <p className="text-gray-500 text-sm">Years Experience</p>
  </div>

  {/* Floating Badge 2 */}
  <div className="absolute bottom-6 -right-6 bg-white shadow-xl rounded-3xl px-6 py-4">
    <h3 className="text-3xl font-bold text-purple-600">50+</h3>
    <p className="text-gray-500 text-sm">Dashboards</p>
  </div>

</div>

        {/* RIGHT */}

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

          {/* Cards */}

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-white rounded-3xl p-6 shadow-lg border">

              <h3 className="text-4xl font-bold text-blue-600">
                3+
              </h3>

              <p className="text-slate-500 mt-2">
                Years Experience
              </p>

            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border">

              <h3 className="text-4xl font-bold text-purple-600">
                300+
              </h3>

              <p className="text-slate-500 mt-2">
                Students Trained
              </p>

            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border">

              <h3 className="text-4xl font-bold text-blue-600">
                15+
              </h3>

              <p className="text-slate-500 mt-2">
                Projects
              </p>

            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border">

              <h3 className="text-4xl font-bold text-purple-600">
                50+
              </h3>

              <p className="text-slate-500 mt-2">
                Dashboards
              </p>

            </div>

          </div>

          <button className="mt-10 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:scale-105 transition">
            Download Resume
          </button>

        </div>

      </div>

    </section>
  )
}