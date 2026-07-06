import {
  FaRobot,
  FaClipboardCheck,
  FaChartLine,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-40 pb-24 overflow-hidden">
         {/* {Blue Glow} */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

          {/* {Purple Glow } */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div> 

      <div className="flex items-center justify-between gap-16">

        {/* Left Side */}
        <div className="w-1/2">

          <div className="inline-block bg-blue-600/20 border border-blue-500 px-4 py-2 rounded-full text-blue-400 text-sm">
            🚀 AI Powered College ERP
          </div>

          <h1 className="text-6xl font-bold mt-8 leading-tight">
            CampusSync AI
          </h1>

          <p className="text-gray-300 text-xl mt-6">
            Manage attendance, marks, assignments, notices and communicate
            efficiently through one modern AI-powered platform.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="bg-blue-600 hover:bg-blue-700 transition px-7 py-3 rounded-xl font-semibold">
              Get Started
            </button>

            <button className="border border-gray-500 hover:border-white transition px-7 py-3 rounded-xl">
              Learn More
            </button>
          </div>

        </div>

        {/* Right Side */}
        <div className="w-1/2 flex justify-center">

          <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-2xl font-bold mb-6">
              Student Dashboard
            </h2>

            <div className="space-y-4">

              <div className="bg-slate-800 p-4 rounded-xl flex items-center gap-3">
                <FaChartLine className="text-green-400 text-xl" />
                <p>
                  Attendance :
                  <span className="text-green-400"> 92%</span>
                </p>
              </div>

              <div className="bg-slate-800 p-4 rounded-xl flex items-center gap-3">
                <FaClipboardCheck className="text-yellow-400 text-xl" />
                <p>
                  Assignments :
                  <span className="text-yellow-400"> 5 Pending</span>
                </p>
              </div>

              <div className="bg-slate-800 p-4 rounded-xl flex items-center gap-3">
                <FaRobot className="text-blue-400 text-xl" />
                <p>
                  AI Assistant :
                  <span className="text-blue-400"> Ready</span>
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;