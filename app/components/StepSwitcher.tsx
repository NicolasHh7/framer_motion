"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: 0, content: "Step 1 — Welcome 👋" },
  { id: 1, content: "Step 2 — Your Info 🧠" },
  { id: 2, content: "Step 3 — Finish 🎉" },
];

export default function StepSwitcher() {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));
 
  return (
    <div style={{ position: "relative", width: 300, height: 120 }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            width: "100%",
          }}
        >
          <h2>{steps[step].content}</h2>
        </motion.div>
      </AnimatePresence>

      <div style={{ marginTop: 140, display: "flex", gap: 10 }}>
        <button onClick={prev} disabled={step === 0}>
          Voltar
        </button>
        <button onClick={next} disabled={step === steps.length - 1}>
          Próximo
        </button>
      </div>
    </div>
  );
}
