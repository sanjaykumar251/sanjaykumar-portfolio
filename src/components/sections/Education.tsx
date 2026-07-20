import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { education } from "../../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner max-w-3xl">
        <SectionHeader
          title="Education"
          subtitle="My academic journey"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/40 via-accent-500/20 to-transparent" />

          {education.map((edu, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative mb-10 last:mb-0 pl-14 md:pl-0 ${
                  isLeft
                    ? "md:pr-[calc(50%+2rem)] md:text-right"
                    : "md:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-[14px] md:left-1/2 md:-translate-x-1/2 top-2 w-5 h-5 rounded-full border-[3px] border-primary-500 bg-dark-950 z-10" />

                {/* Card */}
                <div className="glass rounded-2xl p-5 hover:border-white/[0.12] transition-all duration-300 group">
                  {/* Period badge */}
                  <div
                    className={`inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full bg-primary-500/10 text-primary-400 text-xs font-medium ${
                      isLeft ? "md:ml-auto" : ""
                    }`}
                  >
                    <Calendar size={12} />
                    {edu.period}
                  </div>

                  <h3 className="text-base font-semibold text-white/90 mb-1 group-hover:text-white transition">
                    {edu.degree}
                  </h3>

                  <div className={`flex items-center gap-1.5 text-sm text-white/50 mb-2 ${
                    isLeft ? "md:justify-end" : ""
                  }`}>
                    <GraduationCap size={14} className="text-accent-400 flex-shrink-0" />
                    {edu.institution}
                  </div>

                  {edu.score && (
                    <div className={`flex items-center gap-1.5 text-sm text-white/50 ${
                      isLeft ? "md:justify-end" : ""
                    }`}>
                      <Award size={14} className="text-yellow-400 flex-shrink-0" />
                      Percentage: {edu.score}
                    </div>
                  )}

                  {edu.description && (
                    <p className="text-xs text-white/40 mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
