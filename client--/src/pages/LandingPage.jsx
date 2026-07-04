import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-40">

        <div className="flex items-center justify-between gap-16">

          {/* Left Section */}
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

          {/* Right Section */}
          <div className="w-1/2 flex justify-center">

            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 w-[420px] shadow-2xl">

              <h2 className="text-2xl font-bold mb-6">
                Student Dashboard
              </h2>

              <div className="space-y-4">

                <div className="bg-slate-800 p-4 rounded-xl">
                  📊 Attendance : <span className="text-green-400">92%</span>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl">
                  📝 Assignments : <span className="text-yellow-400">5 Pending</span>
                </div>

                <div className="bg-slate-800 p-4 rounded-xl">
                  🤖 AI Assistant : <span className="text-blue-400">Ready</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default LandingPage;
