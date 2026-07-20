import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail, ChevronDown } from "lucide-react";
import {
  FaPython,
  FaDatabase,
  FaCode,
  FaServer,
  FaTerminal,
  FaCogs,
} from "react-icons/fa";
import { personalInfo } from "../../data/portfolio";

/* ── floating icon data ── */
const floatingIcons = [
  { Icon: FaPython, x: "8%", y: "18%", size: 26, delay: 0, duration: 7 },
  { Icon: FaDatabase, x: "85%", y: "22%", size: 20, delay: 1.2, duration: 8 },
  { Icon: FaCode, x: "14%", y: "72%", size: 22, delay: 0.6, duration: 6 },
  { Icon: FaServer, x: "80%", y: "70%", size: 18, delay: 1.8, duration: 9 },
  { Icon: FaTerminal, x: "90%", y: "48%", size: 16, delay: 2.4, duration: 7.5 },
  { Icon: FaCogs, x: "5%", y: "48%", size: 18, delay: 0.8, duration: 8.5 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, x, y, size, delay, duration }, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block text-white/[0.06]"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -18, 8, -12, 0],
            rotate: [0, 5, -5, 3, 0],
          }}
          transition={{
            opacity: { delay: delay + 1, duration: 0.6 },
            scale: { delay: delay + 1, duration: 0.6 },
            y: { delay: delay + 1.5, duration, repeat: Infinity, ease: "easeInOut" },
            rotate: { delay: delay + 1.5, duration: duration * 1.2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass border border-green-500/20"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
          </span>
          <span className="text-xs font-medium text-green-300/90 tracking-wide">
            Open to Work · Immediate Availability
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm sm:text-base font-mono text-primary-400 mb-3 tracking-wide"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-[1.1]"
        >
          <span className="text-white">Sanjay</span>
          <span className="shimmer-text">kumar S</span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl font-medium text-white/60 mb-6 h-9"
        >
          <span className="text-white/40 mr-2 font-mono">{">"}</span>
          <TypeAnimation
            sequence={[
              "Python Developer",
              2500,
              "Backend Developer",
              2500,
              "Django Developer",
              2500,
              "Problem Solver",
              2500,
            ]}
            speed={50}
            repeat={Infinity}
            className="gradient-text font-semibold"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-sm sm:text-base text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold text-sm shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <Download
              size={16}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
            Download Resume
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl glass border border-white/10 text-white/80 font-semibold text-sm hover:bg-white/[0.06] hover:text-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
          >
            <Mail
              size={16}
              className="group-hover:rotate-6 transition-transform"
            />
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-white/20"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono">
            Scroll
          </span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
