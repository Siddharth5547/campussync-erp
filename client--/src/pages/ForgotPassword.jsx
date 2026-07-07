import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-center text-white">
          Forgot Password
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Enter your registered email to receive a password reset link.
        </p>

        <form className="mt-8 space-y-5">

          <div>
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-semibold text-white"
          >
            Send Reset Link
          </button>

        </form>

        <p className="text-center text-gray-400 mt-6">
          Remember your password?{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;