export default function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">

      {/* Soft Glow */}
<div
  className="
  absolute
  w-[430px]
  h-[430px]
  rounded-full
  bg-gradient-to-br
  from-blue-200/40
  via-purple-200/40
  to-pink-200/40
  blur-[100px]
  -z-20
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
<svg
  className="
absolute
w-[620px]
h-[620px]
left-1/2
top-1/2
-translate-x-1/2
-translate-y-1/2
z-0
pointer-events-none
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
    <linearGradient id="orbit" x1="0" y1="0" x2="620" y2="620">
      <stop stopColor="#2563EB" />
      <stop offset="1" stopColor="#A855F7" />
    </linearGradient>
  </defs>
</svg>

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
          w-[450px]
          lg:w-[540px]
          object-contain
          mt-8
          float
          transition-all
          duration-500
          hover:scale-105
        "
      />

    </div>
  );
}