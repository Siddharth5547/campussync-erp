function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="grid grid-cols-4 gap-8">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 transition">
          <h2 className="text-4xl font-bold text-blue-500">
            12K+
          </h2>

          <p className="text-gray-400 mt-2">
            Students
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 transition">
          <h2 className="text-4xl font-bold text-blue-500">
            250+
          </h2>

          <p className="text-gray-400 mt-2">
            Faculty
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 transition">
          <h2 className="text-4xl font-bold text-blue-500">
            98%
          </h2>

          <p className="text-gray-400 mt-2">
            Attendance
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 transition">
          <h2 className="text-4xl font-bold text-blue-500">
            50+
          </h2>

          <p className="text-gray-400 mt-2">
            Colleges
          </p>
        </div>

      </div>

    </section>
  );
}

export default Stats;