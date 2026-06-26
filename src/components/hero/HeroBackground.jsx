export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Blue Glow */}
      <div
        className="
          absolute
          -top-40
          -left-40
          w-[520px]
          h-[520px]
          rounded-full
          bg-blue-200/35
          blur-[160px]
        "
      />

      {/* Purple Glow */}
      <div
        className="
          absolute
          top-0
          right-0
          w-[580px]
          h-[580px]
          rounded-full
          bg-purple-200/35
          blur-[170px]
        "
      />

      {/* Pink Glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/3
          w-[480px]
          h-[480px]
          rounded-full
          bg-pink-200/25
          blur-[160px]
        "
      />

      {/* Large Circle */}
      <div
        className="
          absolute
          top-20
          right-28
          w-44
          h-44
          rounded-full
          border
          border-blue-100/70
        "
      />

      {/* Medium Circle */}
      <div
        className="
          absolute
          bottom-32
          left-24
          w-24
          h-24
          rounded-full
          border
          border-purple-100/70
        "
      />

      {/* Tiny Dot */}
      <div
        className="
          absolute
          top-44
          left-1/2
          w-3
          h-3
          rounded-full
          bg-purple-400
        "
      />

      {/* Tiny Dot */}
      <div
        className="
          absolute
          bottom-24
          right-1/4
          w-2.5
          h-2.5
          rounded-full
          bg-blue-500
        "
      />
    </div>
  );
}