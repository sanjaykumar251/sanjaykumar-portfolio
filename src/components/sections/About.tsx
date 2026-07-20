import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  GraduationCap,
  Globe,
  Briefcase,
  Rocket,
} from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";
import { aboutSummary, personalInfo } from "../../data/portfolio";

const highlights = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "BCA – Patrician College",
  },
  { icon: MapPin, label: "Location", value: personalInfo.location },
  { icon: Calendar, label: "Availability", value: "Immediate" },
  { icon: Globe, label: "Languages", value: "English · Tamil" },
  { icon: Briefcase, label: "Open To", value: "Full-time / Internship" },
  { icon: Rocket, label: "Relocation", value: "Willing to Relocate" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <SectionHeader
          title="About Me"
          subtitle="Passionate about building impactful software with Python"
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left – About text */}
          <div className="lg:col-span-3 space-y-5">
            {aboutSummary.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="text-white/60 leading-relaxed text-[15px]"
              >
                {p}
              </motion.p>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {aboutSummary.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl px-5 py-3 text-center flex-1 min-w-[120px]"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/40 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – Highlights */}
          <div className="lg:col-span-2">
            <GlassCard hoverEffect={false} className="space-y-1">
              {highlights.map(({ icon: Icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/[0.03] transition-colors"
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center">
                    <Icon size={16} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-white/30 font-medium">
                      {label}
                    </p>
                    <p className="text-sm text-white/80 font-medium">{value}</p>
                  </div>
                </motion.div>
              ))}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
