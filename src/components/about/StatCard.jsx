export default function StatCard({ number, title, color }) {
  return (

    <div className="bg-white rounded-3xl p-6 shadow-lg border hover:-translate-y-2 transition duration-300">

      <h3 className={`text-4xl font-bold ${color}`}>
        {number}
      </h3>

      <p className="text-slate-500 mt-2">
        {title}
      </p>

    </div>

  );
}