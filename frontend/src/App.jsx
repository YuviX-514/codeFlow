import HowItWorks from "../components/HowItWorks.jsx";
import ResearchHero from "../components/nurui/research-hero.jsx";
import { SparklesCore } from "../components/nurui/sparkles.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import Navbar from "../components/Navbar.jsx";
export default function App() {
  return (
    <section className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
  {/* Sparkles overlay the entire page */}
  <SparklesCore
    id="tsparticlesfullpage"
    background="transparent"
    minSize={0.6}
    maxSize={1.4}
    particleDensity={100}
    className="fixed inset-0 z-0 w-full h-full pointer-events-none"
    particleColor="#FFFFFF"
  />
  <nav className="fixed top-0 w-full shadow-md z-50">
      
    <Navbar/>
    </nav>

  <div className="relative z-10">
    <ResearchHero />
    <FeaturesSection />
    <HowItWorks />
  </div>
</section>

  );
}
