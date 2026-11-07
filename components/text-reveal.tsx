"use client";
import { motion, useReducedMotion } from "motion/react";

const visible = { opacity: 1, y: 0, filter: "blur(0px)" };
const viewport = { once: true, margin: "-80px" } as const;

/* Words fade in, rise and sharpen one after another.
   Plays on page load by default, or when scrolled into view with `inView`. */
export default function TextReveal({
  text,
  delay = 0.3,
  stagger = 0.2,
  inView = false,
  className,
}: {
  text: string;
  delay?: number;
  stagger?: number;
  inView?: boolean;
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
            {...(inView ? { whileInView: visible, viewport } : { animate: visible })}
            transition={{ duration: 0.6, delay: delay + i * stagger, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>{" "}
        </span>
      ))}
    </span>
  );
}