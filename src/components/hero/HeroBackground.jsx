export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Blue Glow */}
      <div
        className="
          absolute
          -top-32
          -left-32
          w-[500px]
          h-[500px]
          rounded-full
          bg-blue-200/40
          blur-[140px]
        "
      ></div>

      {/* Purple Glow */}
      <div
        className="
          absolute
          top-0
          right-0
          w-[550px]
          h-[550px]
          rounded-full
          bg-purple-200/40
          blur-[160px]
        "
      ></div>

      {/* Pink Glow */}
      <div
        className="
          absolute
          bottom-0
          left-1/3
          w-[450px]
          h-[450px]
          rounded-full
          bg-pink-200/30
          blur-[140px]
        "
      ></div>

      {/* Decorative Circle */}
      <div
        className="
          absolute
          top-28
          right-32
          w-40
          h-40
          border
          border-blue-100
          rounded-full
        "
      ></div>

      {/* Small Decorative Circle */}
      <div
        className="
          absolute
          bottom-32
          left-24
          w-20
          h-20
          border
          border-purple-100
          rounded-full
        "
      ></div>

    </div>
  );
}