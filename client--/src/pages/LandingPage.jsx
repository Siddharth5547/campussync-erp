import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  );
}

export default LandingPage;