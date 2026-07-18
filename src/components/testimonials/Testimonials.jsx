import { motion } from "framer-motion";
import testimonials from "./testimonialsData";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            What My Students Say
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
            Feedback from students who completed my Power BI Master Class and
            Internship Program.
          </p>
        </motion.div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: "⭐", value: "4.9/5", label: "Average Rating" },
            { icon: "👨‍🎓", value: "50+", label: "Students" },
            { icon: "📊", value: "15 Days", label: "Master Class" },
            { icon: "⏰", value: "45+", label: "Training Hours" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl bg-white shadow-lg p-6 text-center"
            >
              <div className="text-4xl">{stat.icon}</div>
              <h3 className="mt-3 text-3xl font-bold">{stat.value}</h3>
              <p className="text-slate-500 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: item.id * 0.12,
              }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:border-blue-200 hover:shadow-[0_25px_70px_rgba(59,130,246,0.18)]"
            >
              {/* Top Gradient */}
              <div className="h-3 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500"></div>

              {/* Card Body */}
              <div className="relative flex flex-1 flex-col p-8 overflow-hidden">
                {/* Background Glow */}
                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-100 opacity-30 blur-3xl transition-all duration-500 group-hover:scale-125"></div>

                {/* Header */}
                <div className="relative z-10 flex justify-between items-center mb-6">
                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5 text-amber-400"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.719c-.783-.57-.38-1.81.588-1.81H7.03a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 border border-green-200 px-4 py-1 text-xs font-bold text-green-700">
                    ✓ Verified
                  </span>
                </div>

                {/* Quote */}
                <div className="absolute top-14 right-8 text-[110px] font-serif font-bold text-blue-50 select-none pointer-events-none">
                  "
                </div>

                {/* Feedback */}
                <p className="relative z-10 mt-8 text-[15px] italic leading-8 text-slate-600">
                  {item.feedback}
                </p>

                <div className="my-8 border-t border-slate-200"></div>

                {/* Footer */}
                <div className="relative z-10 mt-auto flex items-center gap-5">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 rounded-full object-cover border-4 border-white shadow-xl ring-2 ring-blue-100 transition-all duration-500 group-hover:scale-110 group-hover:ring-blue-400"
                    />

                    <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full border-2 border-white bg-green-500"></span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {item.role}
                    </p>

                    <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-1.5 text-xs font-semibold text-blue-700">
                      🎓 {item.course}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}