import { motion } from "framer-motion";
import { useState } from "react";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";
import videoTestimonials from "./videoTestimonialsData";

export default function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handlePlay = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section
      id="video-testimonials"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-white via-slate-50 to-blue-50"
    >
      {/* Premium Background */}
      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-blue-300/20 blur-[180px]" />
      <div className="absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-purple-300/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Top Accent */}
        <div className="mx-auto mb-12 h-1 w-36 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500" />

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="inline-flex items-center rounded-full bg-red-100 px-5 py-2 font-semibold text-red-600 shadow-sm">
            🎥 Student Success Stories
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Hear Directly From My Students
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Every testimonial reflects genuine learning, hands-on project
            experience, and the confidence students gained through the
            Power BI Master Class and Internship Program.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {videoTestimonials.map((item) => (
            <VideoCard
              key={item.id}
              item={item}
              onPlay={handlePlay}
            />
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-20 max-w-4xl text-center"
        >
          <p className="text-xl italic leading-9 text-slate-600">
            "The greatest achievement isn't completing a course —
            it's seeing students confidently apply their skills to solve
            real-world business problems."
          </p>
        </motion.div>

        {/* Video Modal */}
        <VideoModal
          video={selectedVideo}
          onClose={closeModal}
        />
      </div>
    </section>
  );
}