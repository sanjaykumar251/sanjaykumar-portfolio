import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import SectionHeader from "../ui/SectionHeader";
import { projects } from "../../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <SectionHeader
          title="Projects"
          subtitle="Real-world applications I've built to solve problems"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl overflow-hidden flex flex-col hover:border-white/[0.12] transition-all duration-300"
            >
              {/* Gradient header */}
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Title overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <p className="text-white/70 text-xs font-mono tracking-wider uppercase mb-1">
                    {project.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5 flex-1">
                  {project.features.slice(0, 3).map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-xs text-white/45"
                    >
                      <ChevronRight
                        size={12}
                        className="text-primary-400 mt-0.5 flex-shrink-0"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[10px] font-medium tracking-wide rounded-md bg-white/[0.04] border border-white/[0.06] text-white/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium rounded-xl bg-white/[0.04] border border-white/[0.06] text-white/60 hover:bg-white/[0.08] hover:text-white transition-colors"
                  >
                    <FaGithub size={14} />
                    Source Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium rounded-xl bg-primary-500/10 border border-primary-500/20 text-primary-400 hover:bg-primary-500/20 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
