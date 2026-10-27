// "use client";
// import { useEffect, useState } from "react";
// import { motion, useReducedMotion } from "motion/react";
// import { Inbox, Workflow, MessageSquare, BarChart3 } from "lucide-react";
// import { Tooltip } from "@/components/ui/tooltip-card";

// const term = "cursor-pointer font-medium text-white underline-offset-4";

// // Sample workflow shown in the card.
// const steps = [
//   { icon: Inbox, title: "Discovery", note: "We learn about your business, goals and customers." },
//   { icon: Workflow, title: "Planning", note: "We agree the scope and the plan." },
//   { icon: MessageSquare, title: "Design & build", note: "We design and build it, and test it properly." },
//   { icon: BarChart3, title: "Launch & support", note: "We go live and help your team get started." },
// ];

// function WorkflowCard() {
//   const [active, setActive] = useState(0);
//   const reduce = useReducedMotion();

//   useEffect(() => {
//     if (reduce) {
//       setActive(steps.length - 1);
//       return;
//     }
//     const t = setInterval(() => setActive((a) => (a + 1) % steps.length), 1600);
//     return () => clearInterval(t);
//   }, [reduce]);

//   return (
//     <div className="relative">
//       <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(255,242,0,0.10),transparent_65%)]" />
//       <div className="rounded-lg border border-fog/50 bg-ink p-6 md:p-8">
//         <div className="mb-8 flex items-center justify-between">
//           <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-fog">How we work</span>
//           <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] text-fog">
//             <span className="size-2 rounded-full bg-signal" /> Running
//           </span>
//         </div>
//         <div className="relative">
//           <div className="absolute bottom-6 left-5 top-6 w-px -translate-x-1/2 bg-fog/40">
//             <div
//               className="w-full bg-signal transition-[height] duration-700"
//               style={{ height: `${(active / (steps.length - 1)) * 100}%` }}
//             />
//           </div>
//           <ol className="space-y-6">
//             {steps.map((s, i) => {
//               const on = i <= active;
//               return (
//                 <li key={s.title} className="relative flex h-12 items-center gap-4">
//                   <span
//                     className={`z-10 grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-500 ${
//                       on ? "border-signal bg-signal text-ink" : "border-fog/60 bg-ink text-mist"
//                     } ${i === active && !reduce ? "ring-4 ring-signal/30" : ""}`}
//                   >
//                     <s.icon className="size-5" strokeWidth={1.5} />
//                   </span>
//                   <div className="flex-1">
//                     <p className={`text-base transition-colors duration-500 ${on ? "text-white" : "text-mist"}`}>{s.title}</p>
//                     <p className="text-sm text-fog">{s.note}</p>
//                   </div>
//                 </li>
//               );
//             })}
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function About() {
//   return (
//     <section id="about" className="relative overflow-hidden bg-ink px-6 py-20 md:py-32">
//       <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:gap-30 md:grid-cols-2">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.7 }}
//         >
// <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">About us</p>
// <h2 className="text-4xl font-light tracking-tight md:text-5xl">One team for your technology, marketing and brand</h2>
// <div className="mt-8 max-w-lg space-y-5 text-mist">
//   <div>
//     CLEVER WINK is a UAE-based company that helps growing businesses run and grow online. We build the systems you work in, such as{" "}
//     <Tooltip containerClassName="text-mist" content="Integrated business management software that connects core company processes into a single shared database and platform">
//       <span className={term}>ERP</span>
//     </Tooltip>{" "},{" "}
//     <Tooltip containerClassName="text-mist" content="Customer relationship management software that keeps every lead and customer in one place.">
//       <span className={term}>CRM</span>
//     </Tooltip>{" "}
//     and{" "}
//     <Tooltip containerClassName="text-mist" content="Human resource management system for employee records, attendance and leave.">
//       <span className={term}>HRMS</span>
//     </Tooltip>
//     , plus websites and custom software.
//   </div>
//   <div>
//     We bring in customers through{" "}
//     <Tooltip containerClassName="text-mist" content="Search, social media and online ads that bring customers to your business.">
//       <span className={term}>digital marketing</span>
//     </Tooltip>
//     , and we shape how your brand looks with graphic design, photography and video.
//   </div>
//   <p className="text-white">Tell us what you need. We take it from idea to launch.</p>
// </div>
//           <a href="#contact" className="mt-8 inline-block rounded-lg bg-signal px-4 py-3.5 text-sm font-medium text-ink transition hover:-translate-y-0.5">
//             Book a Demo
//           </a>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//         >
//           <WorkflowCard />
//         </motion.div>
//       </div>
//     </section>
//   );
// }




// "use client";
// import { Fragment, useRef } from "react";
// import {
//   MotionConfig,
//   motion,
//   useReducedMotion,
//   useScroll,
//   useTransform,
//   type MotionValue,
// } from "motion/react";
// import {
//   ArrowUpRight,
//   Database,
//   Megaphone,
//   Monitor,
//   Palette,
//   Users,
//   Workflow,
//   type LucideIcon,
// } from "lucide-react";
// import { Tooltip } from "@/components/ui/tooltip-card";

// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// // blur + slide-up entrance, reused for the text blocks
// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 24, filter: "blur(8px)" },
//   whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
//   viewport: { once: true, margin: "-60px" } as const,
//   transition: { duration: 0.8, delay, ease: EASE },
// });

// const steps = [
//   { title: "Discovery", note: "We learn about your business, goals and customers." },
//   { title: "Planning", note: "We agree the scope and the plan." },
//   { title: "Design & build", note: "We design and build it, and test it properly." },
//   { title: "Launch & support", note: "We go live and help your team get started." },
// ];

// const features: { icon: LucideIcon; title: string; text: string }[] = [
//   { icon: Workflow, title: "Automation", text: "Workflows that take repetitive tasks off your team's plate." },
//   { icon: Database, title: "CRM solutions", text: "Every lead, customer and deal in one place." },
//   { icon: Users, title: "HRMS solutions", text: "Employee records, attendance and leave in one system." },
//   { icon: Monitor, title: "Websites & software", text: "Fast websites and custom software built around how you work." },
//   { icon: Megaphone, title: "Digital marketing", text: "Search, social and ads that bring customers to you." },
//   { icon: Palette, title: "Design & creative", text: "Graphic design, photography and video that make your brand stand out." },
// ];

// /* ---------- text effects ---------- */

// // Each word slides up from behind a mask
// function WordsReveal({ text, delay = 0 }: { text: string; delay?: number }) {
//   const words = text.split(" ");
//   return (
//     <>
//       <span className="sr-only">{text}</span>
//       <span aria-hidden>
//         {words.map((w, i) => (
//           <Fragment key={i}>
//             <span className="-my-[0.12em] inline-block overflow-hidden py-[0.12em] align-bottom">
//               <motion.span
//                 className="inline-block"
//                 initial={{ y: "110%" }}
//                 whileInView={{ y: 0 }}
//                 viewport={{ once: true, margin: "-80px" }}
//                 transition={{ duration: 0.8, delay: delay + i * 0.06, ease: EASE }}
//               >
//                 {w}
//               </motion.span>
//             </span>{" "}
//           </Fragment>
//         ))}
//       </span>
//     </>
//   );
// }

// // Highlighted keyword with a yellow underline that draws itself in
// function Term({ children }: { children: React.ReactNode }) {
//   return (
//     <motion.span
//       initial={{ backgroundSize: "0% 2px" }}
//       whileInView={{ backgroundSize: "100% 2px" }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
//       className="cursor-pointer bg-[linear-gradient(#fff200,#fff200)] bg-[position:0_100%] bg-no-repeat pb-0.5 font-medium text-white"
//     >
//       {children}
//     </motion.span>
//   );
// }

// /* ---------- stacked feature cards ---------- */

// function StackCard({
//   f,
//   i,
//   n,
//   progress,
//   reduce,
// }: {
//   f: (typeof features)[number];
//   i: number;
//   n: number;
//   progress: MotionValue<number>;
//   reduce: boolean | null;
// }) {
//   // cards underneath shrink slightly as the next one lands on top
//   const target = reduce ? 1 : 1 - (n - 1 - i) * 0.035;
//   const scale = useTransform(progress, [i / n, 1], [1, target]);

//   return (
//     <div className="sticky" style={{ top: `calc(6.5rem + ${i * 16}px)` }}>
//       <motion.div style={{ scale }} className="origin-top">
//         <motion.article
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-40px" }}
//           transition={{ duration: 0.7, ease: EASE }}
//           className="group relative h-56 overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-7 transition-colors duration-300 hover:border-signal/40 sm:h-60"
//         >
//           <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-signal/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
//           <div className="flex items-start justify-between">
//             <span className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-signal">
//               <f.icon className="size-5" strokeWidth={1.5} />
//             </span>
//             <span className="font-mono text-xs text-fog">{String(i + 1).padStart(2, "0")}</span>
//           </div>
//           <h3 className="mt-8 text-xl font-medium tracking-tight">{f.title}</h3>
//           <p className="mt-2 max-w-sm text-sm text-mist">{f.text}</p>
//         </motion.article>
//       </motion.div>
//     </div>
//   );
// }

// function StackedFeatures() {
//   const ref = useRef<HTMLDivElement>(null);
//   const reduce = useReducedMotion();
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 30%", "end 80%"] });

//   return (
//     <div ref={ref} className="space-y-6 pb-16">
//       {features.map((f, i) => (
//         <StackCard key={f.title} f={f} i={i} n={features.length} progress={scrollYProgress} reduce={reduce} />
//       ))}
//     </div>
//   );
// }

// /* ---------- step path (desktop) ---------- */

// const W = 1200;
// const H = 440;
// const DOTS = [
//   [150, 110],
//   [450, 170],
//   [750, 230],
//   [1050, 290],
// ] as const;

// // one dashed line that hops from dot to dot
// const PATH = DOTS.slice(1).reduce((d, [x, y], i) => {
//   const [px, py] = DOTS[i];
//   return `${d} C ${px + 70} ${py - 90}, ${x - 70} ${y - 90}, ${x} ${y}`;
// }, `M ${DOTS[0][0]} ${DOTS[0][1]}`);

// function PathStep({ i, p }: { i: number; p: MotionValue<number> }) {
//   const [x, y] = DOTS[i];
//   const arrive = i / (DOTS.length - 1); // all three arcs are the same length
//   const from = i === 0 ? 0 : arrive - 0.14;
//   const to = i === 0 ? 0.06 : arrive;
//   const opacity = useTransform(p, [from, to], [0, 1]);
//   const ty = useTransform(p, [from, to], [24, 0]);
//   const scale = useTransform(p, [from, to], [0, 1]);
//   const left = `${(x / W) * 100}%`;
//   const top = `${(y / H) * 100}%`;

//   return (
//     <>
//       <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left, top }}>
//         <motion.span style={{ scale }} className="block size-3.5 rounded-full bg-white ring-4 ring-signal/25" />
//       </div>
//       <div className="absolute w-56 -translate-x-1/2 text-center" style={{ left, top: `calc(${top} + 1.5rem)` }}>
//         <motion.div style={{ opacity, y: ty }}>
//           <p className="text-base font-medium text-white">
//             <span className="text-fog">{String(i + 1).padStart(2, "0")})</span> {steps[i].title}
//           </p>
//           <p className="mt-1.5 text-sm text-mist">{steps[i].note}</p>
//         </motion.div>
//       </div>
//     </>
//   );
// }

// function StepPathDesktop() {
//   const ref = useRef<HTMLDivElement>(null);
//   const reduce = useReducedMotion();
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
//   const p = useTransform(scrollYProgress, (v) => (reduce ? 1 : v));

//   // bright head that travels along the line as it draws
//   const HEAD = 0.18;
//   const headLen = useTransform(p, (v) => Math.min(v, HEAD));
//   const headOff = useTransform(p, (v) => Math.max(0, v - HEAD));

//   return (
//     <div ref={ref} className="relative mx-auto mb-16 hidden aspect-[1200/440] w-full lg:block">
//       <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full overflow-visible" fill="none" aria-hidden>
//         <defs>
//           <mask id="sp-draw" maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
//             <motion.path d={PATH} stroke="white" strokeWidth={10} strokeLinecap="round" style={{ pathLength: p }} />
//           </mask>
//           <mask id="sp-head" maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
//             <motion.path
//               d={PATH}
//               stroke="white"
//               strokeWidth={10}
//               strokeLinecap="round"
//               style={{ pathLength: headLen, pathOffset: headOff }}
//             />
//           </mask>
//         </defs>
//         <path d={PATH} stroke="currentColor" strokeWidth={1.5} strokeDasharray="5 7" className="text-white/35" mask="url(#sp-draw)" />
//         <path d={PATH} stroke="currentColor" strokeWidth={2} strokeDasharray="5 7" className="text-signal" mask="url(#sp-head)" />
//       </svg>
//       {DOTS.map((_, i) => (
//         <PathStep key={i} i={i} p={p} />
//       ))}
//     </div>
//   );
// }

// /* ---------- step path (mobile / tablet) ---------- */

// function StepPathMobile() {
//   const ref = useRef<HTMLDivElement>(null);
//   const reduce = useReducedMotion();
//   const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
//   const scaleY = useTransform(scrollYProgress, (v) => (reduce ? 1 : v));

//   return (
//     <div ref={ref} className="relative pl-8 lg:hidden">
//       <div className="absolute bottom-2 left-[5px] top-2 w-px border-l border-dashed border-fog/40" />
//       <motion.div
//         style={{ scaleY }}
//         className="absolute bottom-2 left-[5px] top-2 w-px origin-top border-l border-dashed border-signal"
//       />
//       <ol className="space-y-10">
//         {steps.map((s, i) => (
//           <motion.li
//             key={s.title}
//             initial={{ opacity: 0, y: 24 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-40px" }}
//             transition={{ duration: 0.7, ease: EASE }}
//             className="relative"
//           >
//             <span className="absolute -left-8 top-1.5 size-3 rounded-full bg-white ring-4 ring-signal/25" />
//             <p className="text-base font-medium text-white">
//               <span className="text-fog">{String(i + 1).padStart(2, "0")})</span> {s.title}
//             </p>
//             <p className="mt-1 text-sm text-mist">{s.note}</p>
//           </motion.li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// /* ---------- section ---------- */

// export default function About() {
//   return (
//     <MotionConfig reducedMotion="user">
//       {/* overflow-x-clip (not overflow-hidden) so sticky still works inside */}
//       <section id="about" className="relative overflow-x-clip bg-ink px-6 py-20 md:py-32">
//         <div className="mx-auto grid max-w-[1200px] items-start gap-12 md:grid-cols-2 md:gap-30">
//           {/* Left: text stays pinned while the cards stack on the right */}
//           <div className="md:sticky md:top-28">
//             <motion.p {...fadeUp(0)} className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">
//               <motion.span
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, ease: EASE }}
//                 className="h-px w-8 origin-left bg-arc"
//               />
//               About us
//             </motion.p>

//             <h2 className="text-4xl font-light tracking-tight md:text-5xl">
//               <WordsReveal text="One team for your technology, marketing and brand" />
//             </h2>

//             <div className="mt-8 max-w-lg space-y-5 text-mist">
//               <motion.div {...fadeUp(0.4)}>
//                 CLEVER WINK is a UAE-based company that helps growing businesses run and grow online. We build the systems you work in, such as{" "}
//                 <Tooltip containerClassName="text-mist" content="Integrated business management software that connects core company processes into a single shared database and platform">
//                   <Term>ERP</Term>
//                 </Tooltip>
//                 ,{" "}
//                 <Tooltip containerClassName="text-mist" content="Customer relationship management software that keeps every lead and customer in one place.">
//                   <Term>CRM</Term>
//                 </Tooltip>{" "}
//                 and{" "}
//                 <Tooltip containerClassName="text-mist" content="Human resource management system for employee records, attendance and leave.">
//                   <Term>HRMS</Term>
//                 </Tooltip>
//                 , plus websites and custom software.
//               </motion.div>

//               <motion.div {...fadeUp(0.55)}>
//                 We bring in customers through{" "}
//                 <Tooltip containerClassName="text-mist" content="Search, social media and online ads that bring customers to your business.">
//                   <Term>digital marketing</Term>
//                 </Tooltip>
//                 , and we shape how your brand looks with graphic design, photography and video.
//               </motion.div>

//               <motion.p {...fadeUp(0.7)} className="text-white">
//                 Tell us what you need. We take it from idea to launch.
//               </motion.p>
//             </div>

//             <motion.div {...fadeUp(0.85)} className="mt-8">
//               <a
//                 href="#contact"
//                 className="group inline-flex items-center gap-2 rounded-lg bg-signal px-4 py-3.5 text-sm font-medium text-ink transition hover:-translate-y-0.5"
//               >
//                 Book a Demo
//                 <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//               </a>
//             </motion.div>
//           </div>

//           {/* Right: stacked cards */}
//           <StackedFeatures />
//         </div>

//         {/* Step path */}
//         <div className="mx-auto mt-24 max-w-[1200px] md:mt-40">
//           <div className="mb-14 max-w-2xl md:mb-20">
//             <motion.p {...fadeUp(0)} className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">
//               How we work
//             </motion.p>
//             <h3 className="text-3xl font-light tracking-tight md:text-5xl">
//               <WordsReveal text="From idea to launch, one step at a time" />
//             </h3>
//           </div>
//           <StepPathDesktop />
//           <StepPathMobile />
//         </div>
//       </section>
//     </MotionConfig>
//   );
// }







"use client";
import { Fragment, useRef, useState, useEffect } from "react";
import {
  MotionConfig,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { ArrowUpRight, Lightbulb, TrendingUp, Workflow, type LucideIcon } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// blur + slide-up entrance, reused for the text blocks
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-60px" } as const,
  transition: { duration: 0.8, delay, ease: EASE },
});

const steps = [
  { title: "Discovery", note: "We learn about your business, goals and customers." },
  { title: "Planning", note: "We agree the scope and the plan." },
  { title: "Design & build", note: "We design and build it, and test it properly." },
  { title: "Launch & support", note: "We go live and help your team get started." },
];

const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Lightbulb, title: "Think Smarter", text: "We turn complex business challenges into simple, practical solutions." },
  { icon: Workflow, title: "Work Better", text: "We connect people, processes and technology to make everyday operations easier." },
  { icon: TrendingUp, title: "Grow Stronger", text: "We build scalable digital solutions that support your business as it grows." },
];

/* ---------- text effect ---------- */

// Each word slides up from behind a mask
function WordsReveal({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden>
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className="-my-[0.12em] inline-block overflow-hidden py-[0.12em] align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: delay + i * 0.06, ease: EASE }}
              >
                {w}
              </motion.span>
            </span>{" "}
          </Fragment>
        ))}
      </span>
    </>
  );
}

const B = "font-semibold text-white";

/* ---------- "Why CleverWink?" auto-rotating deck ---------- */

const CARD_H = 192; // = h-48
const PEEK = 64; // strip of each earlier card that stays visible
const LAND_MS = 1500; // time between cards landing
const HOLD_MS = 3500; // pause once all three are stacked

function WhyDeck() {
  const [stage, setStage] = useState(0); // index of the newest card in the stack
  const [hovered, setHovered] = useState(false);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const n = features.length;
  const running = !reduce && inView && !hovered; // pauses on hover or when off screen
  const top = reduce ? n - 1 : stage;

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => setStage((s) => (s + 1) % n), stage === n - 1 ? HOLD_MS : LAND_MS);
    return () => clearTimeout(t);
  }, [running, stage, n]);

  return (
    <motion.div {...fadeUp(0.2)} ref={ref}>
      <div
        className="relative"
        style={{ height: CARD_H + PEEK * (n - 1) }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {features.map((f, i) => {
          const landed = i <= top;
          const front = i === top; // newest card on the pile
          const depth = top - i; // how many cards sit on top of this one

          return (
            <motion.article
              key={f.title}
              initial={false}
              animate={{
                y: landed ? 0 : 240,
                opacity: landed ? 1 : 0,
                scale: landed ? 1 - depth * 0.04 : 0.96,
                borderColor: front ? "rgba(255,242,0,0.55)" : "rgba(255,255,255,0.1)",
                backgroundColor: front ? "rgb(20,19,10)" : "rgb(10,10,10)",
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              style={{ top: i * PEEK, zIndex: i, height: CARD_H }}
              onClick={() => setStage(i)}
              className="absolute inset-x-0 origin-top cursor-pointer overflow-hidden rounded-3xl border p-5"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`relative grid size-10 shrink-0 place-items-center rounded-xl border border-white/10 text-signal transition-colors duration-500 ${
                    front ? "bg-signal/15" : "bg-white/5"
                  }`}
                >
                  {front && (
                    <span className="pointer-events-none absolute inset-0 animate-ping rounded-xl border border-signal/50 motion-reduce:animate-none" />
                  )}
                  <f.icon className="size-5" strokeWidth={1.5} />
                </span>
                <h3 className="text-lg font-medium tracking-tight">{f.title}</h3>
                <span className={`ml-auto font-mono text-xs transition-colors duration-500 ${front ? "text-signal" : "text-white/35"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-4 max-w-sm text-sm text-mist">{f.text}</p>

              {/* dims the cards that have another card on top of them */}
              <motion.div
                initial={false}
                animate={{ opacity: landed ? Math.min(depth * 0.3, 0.6) : 0 }}
                transition={{ duration: 0.6 }}
                className="pointer-events-none absolute inset-0 bg-black"
              />
            </motion.article>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ---------- step path (desktop) ---------- */

const W = 1200;
const H = 440;
const DOTS = [
  [150, 110],
  [450, 170],
  [750, 230],
  [1050, 290],
] as const;

// one dashed line that hops from dot to dot
const PATH = DOTS.slice(1).reduce((d, [x, y], i) => {
  const [px, py] = DOTS[i];
  return `${d} C ${px + 70} ${py - 90}, ${x - 70} ${y - 90}, ${x} ${y}`;
}, `M ${DOTS[0][0]} ${DOTS[0][1]}`);

function PathStep({ i, p }: { i: number; p: MotionValue<number> }) {
  const [x, y] = DOTS[i];
  const arrive = i / (DOTS.length - 1); // all three arcs are the same length
  const from = i === 0 ? 0 : arrive - 0.14;
  const to = i === 0 ? 0.06 : arrive;
  const opacity = useTransform(p, [from, to], [0, 1]);
  const ty = useTransform(p, [from, to], [24, 0]);
  const scale = useTransform(p, [from, to], [0, 1]);
  const left = `${(x / W) * 100}%`;
  const top = `${(y / H) * 100}%`;

  return (
    <>
      <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left, top }}>
        <motion.span style={{ scale }} className="block size-3.5 rounded-full bg-white ring-4 ring-signal/25" />
      </div>
      <div className="absolute w-56 -translate-x-1/2 text-center" style={{ left, top: `calc(${top} + 1.5rem)` }}>
        <motion.div style={{ opacity, y: ty }}>
          <p className="text-base font-medium text-white">
            <span className="text-fog">{String(i + 1).padStart(2, "0")})</span> {steps[i].title}
          </p>
          <p className="mt-1.5 text-sm text-mist">{steps[i].note}</p>
        </motion.div>
      </div>
    </>
  );
}

function StepPathDesktop() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const p = useTransform(scrollYProgress, (v) => (reduce ? 1 : v));

  // bright head that travels along the line as it draws
  const HEAD = 0.18;
  const headLen = useTransform(p, (v) => Math.min(v, HEAD));
  const headOff = useTransform(p, (v) => Math.max(0, v - HEAD));

  return (
    <div ref={ref} className="relative mx-auto mb-16 hidden aspect-[1200/440] w-full lg:block">
      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full overflow-visible" fill="none" aria-hidden>
        <defs>
          <mask id="sp-draw" maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
            <motion.path d={PATH} stroke="white" strokeWidth={10} strokeLinecap="round" style={{ pathLength: p }} />
          </mask>
          <mask id="sp-head" maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
            <motion.path
              d={PATH}
              stroke="white"
              strokeWidth={10}
              strokeLinecap="round"
              style={{ pathLength: headLen, pathOffset: headOff }}
            />
          </mask>
        </defs>
        <path d={PATH} stroke="currentColor" strokeWidth={1.5} strokeDasharray="5 7" className="text-white/35" mask="url(#sp-draw)" />
        <path d={PATH} stroke="currentColor" strokeWidth={2} strokeDasharray="5 7" className="text-signal" mask="url(#sp-head)" />
      </svg>
      {DOTS.map((_, i) => (
        <PathStep key={i} i={i} p={p} />
      ))}
    </div>
  );
}

/* ---------- step path (mobile / tablet) ---------- */

function StepPathMobile() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, (v) => (reduce ? 1 : v));

  return (
    <div ref={ref} className="relative pl-8 lg:hidden">
      <div className="absolute bottom-2 left-[5px] top-2 w-px border-l border-dashed border-fog/40" />
      <motion.div
        style={{ scaleY }}
        className="absolute bottom-2 left-[5px] top-2 w-px origin-top border-l border-dashed border-signal"
      />
      <ol className="space-y-10">
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative"
          >
            <span className="absolute -left-8 top-1.5 size-3 rounded-full bg-white ring-4 ring-signal/25" />
            <p className="text-base font-medium text-white">
              <span className="text-fog">{String(i + 1).padStart(2, "0")})</span> {s.title}
            </p>
            <p className="mt-1 text-sm text-mist">{s.note}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- section ---------- */

export default function About() {
  return (
    <MotionConfig reducedMotion="user">
      <section id="about" className="relative overflow-x-clip bg-ink px-6 py-20 md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2 md:gap-30">
          {/* Left: text */}
          <div>
            <motion.p {...fadeUp(0)} className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE }}
                className="h-px w-8 origin-left bg-arc"
              />
              About us
            </motion.p>

            <h2 className="text-4xl font-light tracking-tight md:text-5xl">
              <WordsReveal text="One team for your technology, marketing and brand" />
            </h2>

            <div className="mt-8 max-w-lg space-y-5 text-mist">
              <motion.div {...fadeUp(0.4)}>
                CLEVER WINK is a UAE-based company that helps growing businesses run and grow online. We build the systems you work in, such as{" "}
                <strong className={B}>ERP</strong>, <strong className={B}>CRM</strong> and <strong className={B}>HRMS</strong>, plus websites and custom software.
              </motion.div>

              <motion.div {...fadeUp(0.55)}>
                We bring in customers through <strong className={B}>digital marketing</strong>, and we shape how your brand looks with graphic design, photography and video.
              </motion.div>

              <motion.p {...fadeUp(0.7)} className="text-white">
                Tell us what you need. We take it from idea to launch.
              </motion.p>
            </div>

            <motion.div {...fadeUp(0.85)} className="mt-8">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-signal px-4 py-3.5 text-sm font-medium text-ink transition hover:-translate-y-0.5"
              >
                Book a Demo
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          </div>

          {/* Right: heading + auto-rotating cards */}
          <div>
            <h3 className="mb-8 text-3xl font-normal tracking-tight text-arc md:text-4xl">
              <WordsReveal text="Why CleverWink?" />
            </h3>
            <WhyDeck />
          </div>
        </div>

        {/* Step path */}
        <div className="mx-auto mt-24 max-w-[1200px] md:mt-40">
          <div className="mb-14 max-w-2xl md:mb-20">
            <motion.p {...fadeUp(0)} className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">
              How we work
            </motion.p>
            <h3 className="text-3xl font-light tracking-tight md:text-5xl">
              <WordsReveal text="From idea to launch, one step at a time" />
            </h3>
          </div>
          <StepPathDesktop />
          <StepPathMobile />
        </div>
      </section>
    </MotionConfig>
  );
}