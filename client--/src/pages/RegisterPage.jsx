import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaGoogle,
} from "react-icons/fa";

function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-white">
          Create Account 🚀
        </h1>

        <p className="text-center text-gray-400 mt-3">
          Join CampusSync AI and start managing your campus smarter.
        </p>

        <form className="mt-8 space-y-6">

          {/* Full Name */}
          <div>
            <label className="block text-gray-300 mb-2">
              Full Name
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 focus-within:border-blue-500 transition">

              <FaUser className="text-gray-400" />

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent px-3 py-3 text-white outline-none"
              />

            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">
              Email Address
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 focus-within:border-blue-500 transition">

              <FaEnvelope className="text-gray-400" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-3 text-white outline-none"
              />

            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 focus-within:border-blue-500 transition">

              <FaLock className="text-gray-400" />

              <input
                type="password"
                placeholder="Create password"
                className="w-full bg-transparent px-3 py-3 text-white outline-none"
              />

              <FaEye className="text-gray-400 cursor-pointer hover:text-white transition" />

            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 mb-2">
              Confirm Password
            </label>

            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-xl px-4 focus-within:border-blue-500 transition">

              <FaLock className="text-gray-400" />

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full bg-transparent px-3 py-3 text-white outline-none"
              />

              <FaEye className="text-gray-400 cursor-pointer hover:text-white transition" />

            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition hover:scale-105"
          >
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">

            <div className="flex-1 h-px bg-slate-700"></div>

            <span className="text-gray-500 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-slate-700"></div>

          </div>

          {/* Google Signup */}
          <button
            type="button"
            className="w-full border border-slate-700 hover:border-blue-500 rounded-xl py-3 flex items-center justify-center gap-3 transition"
          >
            <FaGoogle />
            Continue with Google
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default RegisterPage;