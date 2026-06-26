export default function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">

      {/* Soft Glow */}
      <div
        className="
          absolute
          w-[420px]
          h-[420px]
          rounded-full
          bg-gradient-to-br
          from-blue-200/40
          via-purple-200/40
          to-pink-200/40
          blur-3xl
        "
      />

      {/* Background Circle */}
      <div
        className="
          absolute
          w-[420px]
          h-[420px]
          rounded-full
          bg-gradient-to-br
          from-blue-100
          via-purple-100
          to-pink-100
          opacity-80
        "
      />

      {/* Decorative Ring */}
      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          border
          border-slate-200/70
        "
      />

      {/* Purple Dot */}
      <div
        className="
          absolute
          top-14
          right-10
          w-4
          h-4
          rounded-full
          bg-purple-500
          shadow-lg
        "
      />

      {/* Blue Dot */}
      <div
        className="
          absolute
          bottom-20
          left-8
          w-3
          h-3
          rounded-full
          bg-blue-500
          shadow-lg
        "
      />

      {/* Profile Image */}
      <img
        src="/profile.png"
        alt="Anand Kumar"
        className="
          relative
          z-20
          w-[430px]
          lg:w-[500px]
          object-contain
          mt-16
          float
          transition-all
          duration-500
          hover:scale-105
        "
      />

    </div>
  );
}