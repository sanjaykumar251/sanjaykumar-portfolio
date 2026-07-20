import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiDjango,
  SiNumpy,
  SiPandas,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { Code2, Layers, Database, Brain, Wrench, Monitor } from "lucide-react";
import SectionHeader from "../ui/SectionHeader";
import { skillCategories } from "../../data/portfolio";
import type { Skill } from "../../data/portfolio";

/* ── Icon resolver ── */
const iconMap: Record<string, React.ReactNode> = {
  python: <FaPython />,
  database: <FaDatabase />,
  javascript: <FaJs />,
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  django: <SiDjango />,
  bootstrap: <FaBootstrap />,
  numpy: <SiNumpy />,
  pandas: <SiPandas />,
  mysql: <SiMysql />,
  postgresql: <SiPostgresql />,
  mongodb: <SiMongodb />,
  git: <FaGitAlt />,
  vscode: <Monitor size={16} />,
  linux: <Code2 size={16} />,
  windows: <Code2 size={16} />,
  oop: <Code2 size={16} />,
  dsa: <Brain size={16} />,
};

const categoryIconMap: Record<string, React.ReactNode> = {
  code: <Code2 size={18} />,
  layers: <Layers size={18} />,
  database: <Database size={18} />,
  brain: <Brain size={18} />,
  wrench: <Wrench size={18} />,
};

/* ── Animated progress bar ── */
function ProgressBar({
  value,
  delay,
}: {
  value: number;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
        initial={{ width: 0 }}
        animate={inView ? { width: `${value}%` } : { width: 0 }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </div>
  );
}

/* ── Single Skill Pill ── */
function SkillItem({ skill, delay }: { skill: Skill; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className="group"
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-primary-400 text-sm">
          {iconMap[skill.icon] || <Code2 size={14} />}
        </span>
        <span className="text-sm text-white/70 font-medium group-hover:text-white/90 transition">
          {skill.name}
        </span>
        <span className="ml-auto text-[11px] text-white/30 font-mono">
          {skill.proficiency}%
        </span>
      </div>
      <ProgressBar value={skill.proficiency} delay={delay + 0.2} />
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <SectionHeader
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: catIdx * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 hover:border-white/[0.12] transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 group-hover:bg-primary-500/15 transition">
                  {categoryIconMap[cat.icon] || <Code2 size={18} />}
                </div>
                <h3 className="text-base font-semibold text-white/90">
                  {cat.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {cat.skills.map((skill, skillIdx) => (
                  <SkillItem
                    key={skill.name}
                    skill={skill}
                    delay={catIdx * 0.08 + skillIdx * 0.06}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
