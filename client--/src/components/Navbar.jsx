function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500 cursor-pointer">
          CampusSync AI
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            About
          </a>

          <a href="#" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="px-5 py-2 rounded-lg border border-slate-700 hover:border-white transition">
            Login
          </button>

          <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;