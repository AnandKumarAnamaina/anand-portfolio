export default function AboutImage() {
  return (
    <div className="relative flex justify-center">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 blur-[120px] opacity-40"></div>

      {/* Gradient Border */}
      <div className="relative p-[2px] rounded-[30px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl">

        <div className="bg-white rounded-[32px] p-2">

          <img
            src="/profile.png"
            alt="Anand Kumar"
            className="w-[250px] lg:w-[280px] mx-auto object-contain transition duration-500 hover:scale-105"
          />

        </div>

      </div>

      {/* Floating Badge 1 */}
      <div className="absolute -top-6 -left-6 bg-white shadow-xl rounded-3xl px-6 py-4">

        <h3 className="text-3xl font-bold text-blue-600">
          3+
        </h3>

        <p className="text-gray-500 text-sm">
          Years Experience
        </p>

      </div>

      {/* Floating Badge 2 */}
      <div className="absolute bottom-6 -right-6 bg-white shadow-xl rounded-3xl px-6 py-4">

        <h3 className="text-3xl font-bold text-purple-600">
          50+
        </h3>

        <p className="text-gray-500 text-sm">
          Dashboards
        </p>

      </div>

    </div>
  );
}