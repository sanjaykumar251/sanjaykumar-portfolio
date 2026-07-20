import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {/* Decorative tag */}
      <span className="inline-block px-3 py-1 mb-4 text-xs font-mono font-medium tracking-wider uppercase rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
        {title}
      </span>

      {/* Main title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-base text-white/50 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Gradient underline */}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
