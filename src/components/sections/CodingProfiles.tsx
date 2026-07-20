import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { ExternalLink } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { codingProfiles } from "../../data/portfolio";

const platformIconMap: Record<string, React.ReactNode> = {
  github: <FaGithub size={24} />,
  linkedin: <FaLinkedinIn size={24} />,
  leetcode: <SiLeetcode size={24} />,
};

const platformGradients: Record<string, string> = {
  github: "from-gray-600 to-gray-800",
  linkedin: "from-blue-600 to-blue-800",
  leetcode: "from-amber-500 to-orange-600",
};

export default function CodingProfiles() {
  return (
    <section className="section">
      <div className="section-inner">
        <SectionHeader
          title="Coding Profiles"
          subtitle="Find me across the developer ecosystem"
        />

        <div className="flex flex-wrap justify-center gap-5">
          {codingProfiles.map((profile, i) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group glass rounded-2xl p-6 w-48 flex flex-col items-center gap-3 hover:border-white/[0.14] transition-all duration-300 cursor-pointer"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                  platformGradients[profile.icon] || "from-primary-500 to-primary-600"
                } flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                {platformIconMap[profile.icon] || <ExternalLink size={24} />}
              </div>

              <span className="text-sm font-semibold text-white/80 group-hover:text-white transition">
                {profile.name}
              </span>

              <span className="flex items-center gap-1 text-[10px] text-white/30 group-hover:text-primary-400 transition">
                <ExternalLink size={10} />
                Visit Profile
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
