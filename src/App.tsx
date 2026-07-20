import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Layout
import Loader from "./components/layout/Loader";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Achievements from "./components/sections/Achievements";
import CodingProfiles from "./components/sections/CodingProfiles";
import Contact from "./components/sections/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: -200, y: -200 });

  const handleLoadComplete = useCallback(() => setLoading(false), []);

  // Cursor glow tracker
  useEffect(() => {
    const move = (e: MouseEvent) =>
      setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence>{loading && <Loader onComplete={handleLoadComplete} />}</AnimatePresence>

      {/* Background */}
      <div className="animated-bg" />
      <div className="grid-overlay" />

      {/* Cursor glow (desktop only) */}
      <div
        className="cursor-glow hidden md:block"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* Main content */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />

            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Education />
              <Certifications />
              <Achievements />
              <CodingProfiles />
              <Contact />
            </main>

            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
