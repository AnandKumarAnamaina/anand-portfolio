export default function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">

      {/* Large Gradient Circle */}
      <div
        className="
          absolute
          w-[480px]
          h-[480px]
          rounded-full
          bg-gradient-to-br
          from-blue-100
          via-purple-100
          to-pink-100
          blur-xl
          opacity-90
        "
      ></div>

      {/* Decorative Ring */}
      <div
        className="
          absolute
          w-[520px]
          h-[520px]
          rounded-full
          border
          border-slate-200
        "
      ></div>

      {/* Small Top Dot */}
      <div
        className="
          absolute
          top-10
          right-10
          w-4
          h-4
          rounded-full
          bg-purple-500
        "
      ></div>

      {/* Small Bottom Dot */}
      <div
        className="
          absolute
          bottom-14
          left-10
          w-3
          h-3
          rounded-full
          bg-blue-500
        "
      ></div>

      {/* Profile Image */}
      <img
        src="/profile.png"
        alt="Anand Kumar"
        className="
          relative
          z-20
          w-[440px]
          lg:w-[560px]
          object-contain
          drop-shadow-[0_30px_70px_rgba(0,0,0,0.18)]
          transition-all
          duration-500
          hover:scale-105
        "
      />

    </div>
  );
}