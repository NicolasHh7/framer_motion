"use client"
import { motion } from "motion/react";

export function LiveBadge() {
  return (
    <motion.div className="live-container">
      <motion.span
        animate={{
          scale: [2, 2.15, 2],
          boxShadow: [
            "0 0 0px rgba(0, 28, 255, 0.4)",
            "0 0 8px rgba(200, 0, 255, 0.7)",
            "0 0 0px rgba(153, 0, 255, 0.4)",
          ],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity
        }}
        className="badge-live"
      >
        LIVE
      </motion.span>
    </motion.div>
  );
}
