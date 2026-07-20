function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-5 backdrop-blur-md bg-white/5 border-b border-white/10 z-50">

      <h1 className="text-2xl font-bold text-purple-300">
        🌌 EchoAtlas AI
      </h1>

      <div className="flex gap-8 text-gray-300">

        <a href="#" className="hover:text-purple-300 transition">
          Home
        </a>

        <a href="#" className="hover:text-purple-300 transition">
          Dreams
        </a>

        <a href="#" className="hover:text-purple-300 transition">
          About
        </a>

      </div>

    </nav>
  );
}

export default Navbar;