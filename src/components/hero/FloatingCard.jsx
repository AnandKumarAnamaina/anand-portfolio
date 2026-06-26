export default function FloatingCard({
  title,
  value,
  subtitle,
  className = "",
}) {
  return (
    <div
      className={`
        absolute
        ${className}
        hidden lg:block
        bg-white/80
        backdrop-blur-2xl
        border
        border-white/70
        rounded-[28px]
        shadow-[0_25px_60px_rgba(0,0,0,0.08)]
        px-7
        py-6
        min-w-[190px]
        transition-all
        duration-300
        hover:-translate-y-3
        hover:rotate-1
        hover:scale-105
        hover:shadow-[0_35px_70px_rgba(37,99,235,0.18)]
        z-30
      `}
    >
      <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
        {title}
      </div>

      <h3 className="mt-3 text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
        {value}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}