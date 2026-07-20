import Aurora from "../components/Aurora";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Background from "../components/Background";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      <Background />

      <Aurora />

      <Navbar />

      <Hero />

      <footer className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center opacity-60 hover:opacity-100 transition-all duration-500">

        <span className="text-[8px] uppercase tracking-[0.3em] text-gray-500">
          Designed &amp; Developed by
        </span>

        <br />

        <span className="text-[10px] text-gray-300">
          Tasleen Sana
        </span>

      </footer>

    </div>
  );
}

export default Home;