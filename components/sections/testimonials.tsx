"use client";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import Reveal from "@/components/reveal";
import ScrollReveal from "../text-reveal";

// PLACEHOLDERS. Replace with a real client quote and real results, or hide this section.
const story = {
  quote: "Our leads used to sit in a spreadsheet for days. Now every enquiry gets a reply straight away, and the team always knows who to call next.",
  // name: "Client Name",
  // role: "Owner at Company Name",
};
const stats = [
  { value: 40, suffix: "%", label: "faster first response" },
  { value: 3.5, decimals: 1, suffix: "×", label: "more follow-ups sent" },
  { value: 15, suffix: " hrs", label: "saved per team weekly" },
];

/* One word that fades in as the scroll position passes its slot. */
function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <>
      <motion.span style={{ opacity }}>{word}</motion.span>{" "}
    </>
  );
}

function ScrollQuote({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const words = text.split(" ");
  const cls = "mt-8 text-2xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl";

  if (reduce) return <blockquote><p className={cls}>“{text}”</p></blockquote>;

  return (
    <blockquote>
      <p ref={ref} className={cls}>
        “
        {words.map((w, i) => (
          <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
        ))}
        ”
      </p>
    </blockquote>
  );
}

/* Counts up from 0 when it scrolls into view. The server renders the real number. */
function Ticker({ value, decimals = 0, suffix = "" }: { value: number; decimals?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [n, setN] = useState(value);

  useEffect(() => {
    if (!reduce) setN(0);
  }, [reduce]);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, { duration: 2, ease: "easeOut", onUpdate: setN });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref}>
      <span aria-hidden className="tabular-nums">{n.toFixed(decimals)}{suffix}</span>
      <span className="sr-only">{value}{suffix}</span>
    </span>
  );
}

export default function Testimonials() {
  // const initials = story.name.split(" ").map((p) => p[0]).join("").slice(0, 2).toUpperCase();

  return (
    <section id="testimonials" className="relative overflow-hidden bg-signal px-6 py-20 text-ink md:py-28">
      <span aria-hidden className="pointer-events-none absolute -left-4 -top-10 select-none text-[16rem] font-bold leading-none text-ink/10 md:text-[22rem]">“</span>
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 size-[34rem] rounded-full bg-ink/5" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.12em]">Customer story</p>
        <ScrollQuote text={story.quote} />

        <Reveal className="mt-10 flex items-center justify-center gap-4 text-left">
          <div></div>
          {/* <span className="grid size-12 place-items-center rounded-full bg-ink text-sm font-bold text-signal">{initials}</span> */}
          {/* <div>
            <p className="font-bold">{story.name}</p>
            <p className="text-sm text-ink/70">{story.role}</p>
          </div> */}
        </Reveal>

        <div className="mt-14 grid grid-cols-3 border-t border-ink/20 pt-10">
          {stats.map((s, i) => (
            <div key={s.label} className={`px-2 text-center ${i > 0 ? "border-l border-ink/20" : ""}`}>
              <p className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <Ticker value={s.value} decimals={s.decimals} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs text-ink/70 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}