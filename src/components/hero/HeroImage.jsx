export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

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
          blur-[90px]
          -z-20
        "
      />

      {/* Background Circle */}
      <div
        className="
          absolute
          w-[400px]
          h-[400px]
          rounded-full
          bg-gradient-to-br
          from-blue-100
          via-purple-100
          to-pink-100
          opacity-80
        "
      />

      {/* Orbit Ring */}
      <svg
        className="
          absolute
          w-[560px]
          h-[560px]
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          pointer-events-none
          -z-10
        "
        viewBox="0 0 620 620"
        fill="none"
      >
        <ellipse
          cx="310"
          cy="310"
          rx="250"
          ry="120"
          stroke="url(#orbit)"
          strokeWidth="2"
          transform="rotate(-18 310 310)"
        />

        <defs>
          <linearGradient
            id="orbit"
            x1="0"
            y1="0"
            x2="620"
            y2="620"
          >
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Purple Dot */}
      <div
        className="
          absolute
          top-12
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
          bottom-16
          left-8
          w-3
          h-3
          rounded-full
          bg-blue-500
          shadow-lg
        "
      />

      {/* Glass Card */}
      <div
        className="
          relative
          z-20
          rounded-[34px]
          border
          border-white/60
          bg-white/20
          backdrop-blur-xl
          shadow-[0_25px_60px_rgba(0,0,0,0.12)]
          p-4
        "
      >
        <img
          src="/profile.png"
          alt="Anand Kumar"
          className="
            relative
            z-20
            w-[420px]
            lg:w-[500px]
            object-contain
            float
            transition-all
            duration-500
            hover:scale-[1.03]
            brightness-105
            contrast-110
          "
        />
      </div>

    </div>
  );
}