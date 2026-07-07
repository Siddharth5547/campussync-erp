function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl">

        <h1 className="text-3xl font-bold text-white text-center">
          Create Account
        </h1>

        <p className="text-gray-400 text-center mt-2">
          Join CampusSync AI
        </p>

        <form className="mt-8 space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-gray-300 mb-2">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-300 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm password"
              className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-lg font-semibold text-white"
          >
            Create Account
          </button>
                    <p className="text-center text-gray-400 mt-6">
            Already have an account?{" "}
            <Link
                to="/login"
                className="text-blue-400 hover:text-blue-300"
            >
                Login
            </Link>
            </p>

        </form>

      </div>

    </div>
  );
}

export default RegisterPage;