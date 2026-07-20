import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: "primary" | "accent" | "none";
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hoverEffect = true,
  glowColor = "none",
  delay = 0,
}: GlassCardProps) {
  const glowMap = {
    primary: "hover:shadow-[0_0_30px_rgba(99,102,241,0.12)]",
    accent: "hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]",
    none: "",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.25 } } : undefined}
      className={`glass rounded-2xl p-6 transition-all duration-300 ${
        hoverEffect ? "glass-hover cursor-default" : ""
      } ${glowMap[glowColor]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
