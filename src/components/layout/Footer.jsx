export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}

          <div>
            <h2 className="text-3xl font-bold text-white">
              Anand Kumar
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Data Analyst | Power BI Trainer | Business Intelligence
              Enthusiast | Laboratory Assistant passionate about transforming
              data into meaningful insights.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="#experience" className="hover:text-white transition">Experience</a></li>
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#certifications" className="hover:text-white transition">Certifications</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Connect
            </h3>

            <div className="space-y-4">

              <a
                href="https://GitHub.com/AnandKumarAnamaina"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition"
              >
                🐙 GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white transition"
              >
                💼 LinkedIn
              </a>

              <p>📧 yourmail@example.com</p>

              <p>📍 Hyderabad, Telangana, India</p>

            </div>
          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-800 my-10"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-slate-500">
            © {year} Anand Kumar. All Rights Reserved.
          </p>

          <a
            href="#"
            className="rounded-full bg-blue-600 px-5 py-3 text-white hover:bg-blue-700 transition"
          >
            ↑ Back to Top
          </a>

        </div>

      </div>
    </footer>
  );
}