import { useEffect } from "react";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import VideoBg from "./components/VideoBg";
import { LangProvider } from "./i18n";
import { PREVIEW } from "./preview";

function Shell() {
  // ?nofx preview: jump to the hashed section once content has settled.
  useEffect(() => {
    if (!PREVIEW) return;
    document.documentElement.style.scrollBehavior = "auto";
    const jump = () => {
      const el = location.hash && document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
    };
    const timers = [0, 300, 900, 1800, 3200].map((t) => setTimeout(jump, t));
    return () => timers.forEach(clearTimeout);
  }, []);

  // ?only=<section> renders one section at the top — deterministic screenshots.
  if (PREVIEW) {
    const only = new URLSearchParams(location.search).get("only");
    const map: Record<string, ReactNode> = {
      skills: <Marquee />,
      about: <About />,
      experience: <Experience />,
      projects: <Projects />,
    };
    if (only && map[only]) {
      return (
        <div className="relative min-h-screen bg-ink pt-16">
          <VideoBg />
          <div className="relative z-10">
            <Navbar />
            {map[only]}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="relative min-h-screen bg-ink" style={{ overflowX: "clip" }}>
      <VideoBg />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Shell />
    </LangProvider>
  );
}
