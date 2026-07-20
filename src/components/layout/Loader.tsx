import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 25);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress <= 100 && (
        <motion.div
          className="loader-container"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Animated ring */}
            <div className="relative">
              <div className="loader-ring" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-mono text-primary-400">
                  {Math.min(progress, 100)}%
                </span>
              </div>
            </div>

            {/* Name */}
            <div className="text-center">
              <h2 className="text-lg font-semibold tracking-wider text-white/90">
                SANJAYKUMAR S
              </h2>
              <p className="text-xs font-mono text-primary-400 mt-1 tracking-widest">
                PYTHON DEVELOPER
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
