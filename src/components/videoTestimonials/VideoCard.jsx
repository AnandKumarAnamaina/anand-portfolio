import { motion } from "framer-motion";

export default function VideoCard({ item, onPlay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      onClick={() => onPlay(item)}
      className="
        group
        cursor-pointer
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-[0_12px_40px_rgba(15,23,42,0.08)]
        transition-all
        duration-500
        hover:border-blue-200
        hover:shadow-[0_35px_80px_rgba(59,130,246,0.18)]
      "
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden">

        {/* Watch Badge */}
        <div className="absolute left-4 top-4 z-20 rounded-full bg-red-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
          ▶ Watch Now
        </div>

        {/* Thumbnail */}
        <img
          src={item.thumbnail}
          alt={item.name}
          className="
            h-64
            w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
            group-hover:rotate-1
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35 transition-all duration-500 group-hover:bg-black/50" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            whileHover={{
              scale: 1.15,
            }}
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-3xl
              shadow-2xl
              backdrop-blur
            "
          >
            ▶
          </motion.div>

        </div>

        {/* Duration */}
        <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-sm font-medium text-white">
          {item.duration}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Student */}
{/* Student Details */}

<div className="flex items-start justify-between gap-4">

  <div className="flex-1">

    <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
      {item.name}
    </h3>

    {/* Student */}

    {item.type === "student" ? (
      <>
        <p className="mt-2 text-slate-600">
          {item.role}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {item.college} • {item.year}
        </p>
      </>
    ) : (
      <>
        <p className="mt-2 text-slate-600">
          {item.designation}
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {item.company}
        </p>
      </>
    )}

  </div>

  {item.verified && (
    <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
      ✔ Verified
    </span>
  )}

</div>

        {/* Rating */}
{/* Rating */}

<div className="mt-5 flex items-center justify-between">

  <div className="flex items-center gap-1">
    {[...Array(item.rating)].map((_, index) => (
      <motion.span
        key={index}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          delay: index * 0.08,
          duration: 0.25,
        }}
        className="text-lg text-amber-400"
      >
        ★
      </motion.span>
    ))}
  </div>

  <span className="text-sm font-medium text-slate-500">
    {item.rating}.0 / 5
  </span>

</div>

        {/* Course */}
        <div className="mt-5 flex flex-wrap gap-3">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 via-indigo-50 to-purple-100 px-4 py-2 text-xs font-semibold text-blue-700">
            🎓 {item.course}
          </span>
        </div>

      </div>
    </motion.article>
  );
}