import { motion } from "framer-motion";
import { FaPython } from "react-icons/fa";
import { BarChart3, Globe, Award } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import { certifications } from "../../data/portfolio";

const certIconMap: Record<string, React.ReactNode> = {
  python: <FaPython size={22} />,
  chart: <BarChart3 size={22} />,
  globe: <Globe size={22} />,
};

const gradientMap: string[] = [
  "from-indigo-500 to-violet-500",
  "from-cyan-500 to-teal-500",
  "from-purple-500 to-pink-500",
];

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-inner">
        <SectionHeader
          title="Certifications"
          subtitle="Professional credentials that validate my expertise"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <GlassCard
              key={cert.name}
              delay={i * 0.1}
              glowColor="primary"
            >
              <div className="flex flex-col items-center text-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientMap[i % gradientMap.length]} flex items-center justify-center text-white mb-4 shadow-lg`}
                >
                  {certIconMap[cert.icon] || <Award size={22} />}
                </motion.div>

                {/* Badge */}
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 mb-3 rounded-full bg-white/[0.04] text-[10px] font-medium text-white/40 uppercase tracking-wider">
                  <Award size={10} />
                  Certified
                </div>

                {/* Name */}
                <h3 className="text-base font-semibold text-white/90 mb-1">
                  {cert.name}
                </h3>

                {/* Provider */}
                <p className="text-xs text-white/40">{cert.provider}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
