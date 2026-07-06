import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
    </div>
  );
}

export default LandingPage;