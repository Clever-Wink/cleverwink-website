"use client";
import { motion, useReducedMotion } from "motion/react";

/* Words fade in, rise and sharpen one after another when the page loads. */
export default function TextReveal({
  text,
  delay = 0.3,
  stagger = 0.2,
  className,
}: {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={className}>{text}</span>;

  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i}>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>{" "}
        </span>
      ))}
    </span>
  );
}