import { personalInfo } from "../../data/portfolio";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left – branding */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold text-xs">
              S
            </div>
            <span className="text-sm text-white/60">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-white/80">{personalInfo.name}</span>
            </span>
          </div>

          {/* Center */}
          <p className="text-xs text-white/40 flex items-center gap-1">
            Built with <Heart size={12} className="text-red-400" /> using React
            + TypeScript
          </p>

          {/* Right – socials */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
