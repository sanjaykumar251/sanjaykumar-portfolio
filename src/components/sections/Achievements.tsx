import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Trophy, Code2, Target } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { achievements } from "../../data/portfolio";

const achieveIconMap: Record<string, React.ReactNode> = {
  github: <FaGithub size={20} />,
  trophy: <Trophy size={20} />,
  code: <Code2 size={20} />,
  target: <Target size={20} />,
};

const accentColors = [
  "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  "text-amber-400 bg-amber-500/10 border-amber-500/20",
  "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="section-inner max-w-3xl">
        <SectionHeader
          title="Achievements"
          subtitle="Milestones and accomplishments along my journey"
        />

        <div className="space-y-4">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ x: 6 }}
              className="glass rounded-2xl p-5 flex items-start gap-4 hover:border-white/[0.12] transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className={`flex-shrink-0 w-11 h-11 rounded-xl border flex items-center justify-center ${accentColors[i % accentColors.length]}`}
              >
                {achieveIconMap[ach.icon] || <Target size={20} />}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-sm font-semibold text-white/90 mb-1 group-hover:text-white transition">
                  {ach.title}
                </h3>
                <p className="text-xs text-white/45 leading-relaxed">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
