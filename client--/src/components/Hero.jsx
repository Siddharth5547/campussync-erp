import {
  FaRobot,
  FaClipboardCheck,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-40 pb-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-between gap-20">

        {/* Left Side */}
        <div className="w-1/2">

          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded-full text-blue-400">
            🚀 AI Powered College ERP
          </div>

          <h1 className="text-7xl font-extrabold mt-8 leading-tight">
            Manage Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              College With AI
            </span>
          </h1>

          <p className="text-gray-400 text-xl mt-8 max-w-xl">
            Attendance, assignments, notices, analytics and AI assistant —
            everything in one modern platform.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition hover:scale-105">
              Get Started
              <FaArrowRight />
            </button>

            <button className="border border-slate-700 hover:border-white px-8 py-4 rounded-xl transition">
              Learn More
            </button>

          </div>

        </div>

        {/* Right Side Dashboard */}
        <div className="w-[430px] bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

          <h2 className="text-2xl font-bold mb-8">
            Student Dashboard
          </h2>

          <div className="space-y-5">

            {/* Attendance */}
            <div className="bg-slate-800 rounded-xl p-4">

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">
                  <FaChartLine className="text-green-400" />
                  <span>Attendance</span>
                </div>

                <span className="text-green-400 font-semibold">
                  92%
                </span>

              </div>

              <div className="w-full h-2 bg-slate-700 rounded-full mt-4">

                <div className="w-[92%] h-2 bg-green-400 rounded-full"></div>

              </div>

            </div>

            {/* Assignments */}
            <div className="bg-slate-800 rounded-xl p-4 flex justify-between items-center">

              <div className="flex items-center gap-3">
                <FaClipboardCheck className="text-yellow-400" />
                <span>Assignments</span>
              </div>

              <span className="text-yellow-400">
                5 Pending
              </span>

            </div>

            {/* AI Assistant */}
            <div className="bg-slate-800 rounded-xl p-4 flex justify-between items-center">

              <div className="flex items-center gap-3">
                <FaRobot className="text-blue-400" />
                <span>AI Assistant</span>
              </div>

              <span className="text-blue-400">
                Online
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;