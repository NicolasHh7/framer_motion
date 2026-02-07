"use client"
import { motion } from "motion/react";
import { useState } from "react";

export function DismissableAlert() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>Toggle alert</button>
    
      {open && (
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="alert"
        >
          This is an animated alert.
        </motion.div>
      )}
    </div>
  );
}
