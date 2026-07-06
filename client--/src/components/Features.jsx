import {
  FaRobot,
  FaUserGraduate,
  FaClipboardCheck,
  FaChartLine,
  FaBell,
  FaBook,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaRobot className="text-4xl text-blue-500" />,
      title: "AI Assistant",
      desc: "Ask AI anything related to your college."
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-green-500" />,
      title: "Attendance",
      desc: "Track attendance in real time."
    },
    {
      icon: <FaChartLine className="text-4xl text-yellow-500" />,
      title: "Analytics",
      desc: "View reports and performance."
    },
    {
      icon: <FaBell className="text-4xl text-red-500" />,
      title: "Notice Board",
      desc: "Instant announcements."
    },
    {
      icon: <FaBook className="text-4xl text-purple-500" />,
      title: "Assignments",
      desc: "Manage homework and submissions."
    },
    {
      icon: <FaUserGraduate className="text-4xl text-cyan-500" />,
      title: "Student Portal",
      desc: "Everything students need in one place."
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <h2 className="text-5xl font-bold text-center">
        Why Choose CampusSync AI?
      </h2>

      <p className="text-center text-gray-400 mt-5">
        Everything you need to manage your college digitally.
      </p>

      <div className="grid grid-cols-3 gap-8 mt-16">

        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition duration-300 hover:-translate-y-2"
          >
            {feature.icon}

            <h3 className="text-2xl font-semibold mt-6">
              {feature.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {feature.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Features;