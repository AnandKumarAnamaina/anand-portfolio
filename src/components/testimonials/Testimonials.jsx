import { motion } from "framer-motion";
import TestimonialCarousel from "./TestimonialCarousel";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-200/20 blur-[120px]" />
<div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-purple-200/20 blur-[120px]" />

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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
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
              className="rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 p-6 text-center"
            >
              <div className="text-4xl">{stat.icon}</div>
              <h3 className="mt-3 text-3xl font-bold">{stat.value}</h3>
              <p className="text-slate-500 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Carousel */}
        <TestimonialCarousel />
        
    </section>
  );
}