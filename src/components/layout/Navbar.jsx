export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">

        {/* Logo */}

        <div className="flex items-center gap-3">

          <div className="
          w-12
          h-12
          rounded-xl
          bg-gradient-to-br
          from-blue-600
          via-indigo-500
          to-purple-500
          flex
          items-center
          justify-center
          text-white
          text-2xl
          font-bold
          ">
            AK
          </div>

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              Anand Kumar
            </h2>

            <p className="text-sm text-slate-500">
              Power BI Developer
            </p>

          </div>

        </div>

        {/* Menu */}

        <div className="hidden lg:flex gap-10 font-medium">

          <a href="#home" className="text-indigo-600">
            Home
          </a>

          <a href="#about" className="hover:text-indigo-600 transition">
            About
          </a>

          <a href="#skills" className="hover:text-indigo-600 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-indigo-600 transition">
            Projects
          </a>

          <a href="#experience" className="hover:text-indigo-600 transition">
            Experience
          </a>

          <a href="#certifications" className="hover:text-indigo-600 transition">
            Certifications
          </a>

          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>

        </div>

        {/* Button */}

        <a
          href="/resume.pdf"
          target="_blank"
          className="
          px-6
          py-3
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-purple-600
          text-white
          font-semibold
          shadow-lg
          hover:scale-105
          transition
          "
        >
          Download CV
        </a>

      </div>
    </nav>
  );
}