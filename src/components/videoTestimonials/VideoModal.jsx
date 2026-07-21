import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (video) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-5xl
              overflow-hidden
              rounded-[28px]
              bg-gradient-to-br
              from-blue-500/20
              via-purple-500/10
              to-pink-500/20
              p-[2px]
              shadow-[0_40px_120px_rgba(0,0,0,0.35)]
            "
          >
            <div className="overflow-hidden rounded-[26px] bg-white">

              {/* Close Button */}
              <button
                onClick={onClose}
                className="
                  absolute
                  right-5
                  top-5
                  z-20
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-black/70
                  text-lg
                  text-white
                  transition
                  hover:bg-red-600
                "
              >
                ✕
              </button>

              {/* Video */}
              <video
                src={video.video}
                controls
                autoPlay
                className="aspect-video w-full bg-black"
              />

              {/* Content */}
              <div className="p-8">

                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

                  {/* Left */}
                  <div>

                    <h2 className="text-3xl font-bold text-slate-900">
                      {video.name}
                    </h2>

                    <p className="mt-2 text-slate-500">
                      {video.role}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">

                      <span className="rounded-full border border-green-200 bg-green-50 px-4 py-1 text-sm font-semibold text-green-700">
                        ✔ Verified Student
                      </span>

                      {video.course && (
                        <span className="rounded-full bg-gradient-to-r from-blue-100 via-indigo-50 to-purple-100 px-4 py-1 text-sm font-semibold text-blue-700">
                          🎓 {video.course}
                        </span>
                      )}

                    </div>

                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(video.rating)].map((_, index) => (
                      <span
                        key={index}
                        className="text-2xl text-amber-400"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                </div>

                <div className="mt-8 rounded-2xl bg-slate-50 p-6">

                  <h3 className="mb-3 text-lg font-semibold text-slate-800">
                    About this Testimonial
                  </h3>

                  <p className="leading-8 text-slate-600">
                    This video was shared by one of the students after completing
                    the Power BI Master Class / Internship Program, reflecting
                    their learning experience, practical projects, and overall
                    journey throughout the training.
                  </p>

                </div>

              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}