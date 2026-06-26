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
        bg-white
        rounded-3xl
        shadow-2xl
        px-6
        py-5
        min-w-[180px]
        border
        border-slate-100
        z-30
      `}
    >
      <p className="text-sm text-slate-500">{title}</p>

      <h3 className="text-4xl font-bold mt-1 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {value}
      </h3>

      <p className="text-slate-600 text-sm mt-1">
        {subtitle}
      </p>
    </div>
  );
}