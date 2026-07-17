export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <span className="inline-flex px-5 py-2 rounded-full bg-blue-600 text-white font-semibold">
            Contact
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Let's Work Together
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-300 leading-8">
            I'm always interested in collaborating on Data Analytics,
            Business Intelligence, Power BI, Excel, and Technical Training
            opportunities. Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-lg font-medium">
                    yourmail@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl">📱</div>
                <div>
                  <p className="text-slate-400 text-sm">Phone</p>
                  <p className="text-lg font-medium">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-lg font-medium">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-10">
              <a
                href="https://github.com/AnandKumarAnamaina"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-slate-200 transition"
              >
                🐙 GitHub
              </a>
            </div>

          </div>

          {/* Right Side */}

          <div className="bg-slate-800 rounded-3xl p-8 shadow-xl">

            <h3 className="text-3xl font-bold mb-8">
              Send a Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl bg-slate-700 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-xl bg-slate-700 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl bg-slate-700 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full rounded-xl bg-slate-700 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-4 font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}