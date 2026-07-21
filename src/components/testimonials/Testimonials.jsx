import { motion } from "framer-motion";
import TestimonialCarousel from "./TestimonialCarousel";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background Glow */}
      <div className="absolute -left-32 top-40 h-96 w-96 rounded-full bg-blue-200/20 blur-[150px]" />
      <div className="absolute -right-32 bottom-40 h-96 w-96 rounded-full bg-purple-200/20 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Transition from Video Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-6 h-1 w-32 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500" />

          <p className="mx-auto max-w-4xl text-lg leading-8 text-slate-600">
            Some students shared their learning journey through video, while many
            others expressed their experience in writing. Every message reflects
            practical learning, hands-on guidance, and real project experience.
          </p>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Student Feedback
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Read Their Experience
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Honest feedback shared by students after completing the Power BI
            Master Class, Internship Program, and hands-on dashboard projects.
          </p>
        </motion.div>

        {/* Written Testimonial Carousel */}
        <TestimonialCarousel />

      </div>
    </section>
  );
}