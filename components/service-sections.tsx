"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import {
  useEffect, useRef, useState,
  type CSSProperties, type MouseEvent as ReactMouseEvent, type ReactNode, type RefObject,
} from "react";
import {
  ArrowUpRight, BarChart3, CalendarCheck, Camera, Check, Compass, Database, Fingerprint, Gauge, Globe,
  Inbox, LayoutTemplate, Lock, Mail, Minus, PenTool, Plug, Plus, Search, Settings, Smartphone, Target,
  UserPlus, Users, Video, Workflow, X, type LucideIcon,
} from "lucide-react";
import TextReveal from "@/components/text-reveal";
import { getService, services } from "@/lib/services";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* =====================================================
   Shared: hub icon used by the hero fallback and the
   "explore other services" diagram
   ===================================================== */

function Hub({ Icon, small }: { Icon: LucideIcon; small?: boolean }) {
  return (
    <div
      className={`relative grid place-items-center rounded-3xl border border-signal/60 bg-neutral-950 text-signal shadow-[0_0_60px_-8px_rgba(255,242,0,0.45)] ${
        small ? "size-24" : "size-28"
      }`}
    >
      <span className="absolute inset-0 animate-ping rounded-3xl border border-signal/30 [animation-duration:3s] motion-reduce:animate-none" />
      <Icon className={small ? "size-10" : "size-12"} strokeWidth={1.25} />
    </div>
  );
}

/* =====================================================
   1. Hero: heading with marker + underline, device visual
   ===================================================== */

function Marker({ children, delay }: { children: ReactNode; delay: number }) {
  const reduce = useReducedMotion();
  return (
    <span className="relative isolate inline-block px-[0.2em]">
      <motion.svg
        aria-hidden
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        className="absolute inset-0 -z-10 h-full w-full -rotate-1"
        initial={{ clipPath: reduce ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        <path d="M1 7 C 20 3, 60 5, 99 2 L 98 35 C 65 39, 30 36, 2 38 Z" fill="#fff200" />
      </motion.svg>
      {/* text turns dark once the marker has covered it */}
      <motion.span
        initial={{ color: reduce ? "#0a0a0a" : "#ffffff" }}
        animate={{ color: "#0a0a0a" }}
        transition={{ duration: 0.3, delay: delay + 0.35 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HeroTitle({ text, highlight }: { text: string; highlight?: string }) {
  const i = highlight ? text.indexOf(highlight) : -1;
  const D = 0.2; // first word delay
  const S = 0.07; // gap between words
  const wc = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);

  if (!highlight || i < 0) return <TextReveal text={text} delay={D} stagger={S} />;

  const before = text.slice(0, i).trim();
  const after = text.slice(i + highlight.length).trim();
  const dHi = D + wc(before) * S;
  const dAfter = dHi + wc(highlight) * S;

  return (
    <>
      {before && <TextReveal text={before} delay={D} stagger={S} />}
      <Marker delay={dAfter + 0.2}>
        <TextReveal text={highlight} delay={dHi} stagger={S} />
      </Marker>{" "}
      {after && <TextReveal text={after} delay={dAfter} stagger={S} />}
    </>
  );
}

export function HeroUnderline() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 260 14" className="mt-3 h-3.5 w-52 sm:w-64" fill="none" aria-hidden>
      <motion.path
        d="M3 9 C 45 3, 95 12, 140 7 S 225 5, 257 8"
        stroke="#fff200"
        strokeWidth={3.5}
        strokeLinecap="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1.6, ease: EASE }}
      />
    </svg>
  );
}

// shown until real screenshots exist, or if one fails to load
function DashboardSkeleton({ compact }: { compact?: boolean }) {
  return (
    <div className="absolute inset-0 flex gap-3 bg-neutral-950 p-3">
      {!compact && (
        <div className="hidden w-1/5 space-y-2 sm:block">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`h-3 rounded ${i === 0 ? "bg-signal/40" : "bg-white/10"}`} />
          ))}
        </div>
      )}
      <div className="flex-1 space-y-3 pt-6">
        <div className="h-4 w-1/3 rounded bg-white/10" />
        <div className={`grid gap-3 ${compact ? "grid-cols-2" : "grid-cols-3"}`}>
          {[0, 1, 2].slice(0, compact ? 2 : 3).map((i) => (
            <div key={i} className="h-16 rounded-lg border border-white/10 bg-white/[0.03]" />
          ))}
        </div>
        <div className="flex h-24 items-end gap-2 rounded-lg border border-white/10 p-3">
          {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-signal/40" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Shot({ src, alt, compact }: { src: string; alt: string; compact?: boolean }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <DashboardSkeleton compact={compact} />;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={compact ? "280px" : "(min-width: 1024px) 600px, 100vw"}
      className="object-cover object-top"
      onError={() => setFailed(true)}
    />
  );
}

function HeroDevice({ desktop, mobile, title }: { desktop?: string; mobile?: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
      className="relative mx-auto w-full max-w-xl lg:max-w-none"
    >
      <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle,rgba(255,242,0,0.14),transparent_65%)]" />

      {/* desktop screen: large screens (or everywhere if there is no mobile image) */}
      {desktop && (
        <div className={`group relative [perspective:1400px] ${mobile ? "hidden lg:block" : ""}`}>
          <div className="relative overflow-hidden rounded-[1.75rem] border-2 border-white/80 bg-neutral-900 shadow-[0_30px_80px_-20px_rgba(255,242,0,0.25)] transition-transform duration-700 [transform:rotateY(-8deg)_rotateX(3deg)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)]">
            <div className="flex items-center gap-3 border-b border-white/10 bg-neutral-950 px-4 py-3">
              <span className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-white/25" />
                <span className="size-2.5 rounded-full bg-white/25" />
                <span className="size-2.5 rounded-full bg-white/25" />
              </span>
              <span className="mx-auto flex w-3/5 items-center justify-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[11px] text-white/45">
                <Lock className="size-3" /> yourbusiness.com
              </span>
            </div>
            <div className="relative aspect-[16/10] bg-neutral-950">
              <Shot src={desktop} alt={`${title} desktop screen`} />
            </div>
          </div>
        </div>
      )}

      {/* mobile screen: below lg (or everywhere if there is no desktop image) */}
      {mobile && (
        <div className={desktop ? "lg:hidden" : ""}>
          <div className="relative mx-auto aspect-[9/19] w-[16rem] overflow-hidden rounded-[2.5rem] border-[3px] border-white/80 bg-neutral-950 shadow-[0_30px_80px_-20px_rgba(255,242,0,0.25)]">
            <span className="absolute left-1/2 top-2.5 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-neutral-950 ring-1 ring-white/10" />
            <Shot src={mobile} alt={`${title} mobile screen`} compact />
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function HeroVisual({ slug, desktop, mobile, modules }: {
  slug: string; desktop?: string; mobile?: string; modules: string[];
}) {
  const service = getService(slug);
  const Icon = service?.icon ?? Workflow;
  const list = modules.slice(0, 6);

  if (desktop || mobile) {
    return <HeroDevice desktop={desktop} mobile={mobile} title={service?.title ?? "Service"} />;
  }

  // Fallback with no images at all: the service's features orbiting a hub
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
      aria-hidden
      className="relative mx-auto w-full max-w-md"
    >
      <style>{`
        @keyframes hv-spin { to { transform: rotate(360deg); } }
        .hv-orbit { animation: hv-spin 60s linear infinite; }
        .hv-upright { animation: hv-spin 60s linear infinite reverse; }
        @media (prefers-reduced-motion: reduce) { .hv-orbit, .hv-upright { animation: none; } }
      `}</style>
      <div className="relative aspect-square w-full" style={{ containerType: "inline-size" }}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle,rgba(255,242,0,0.14),transparent_65%)]" />
        <span className="absolute left-1/2 top-1/2 size-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
        <span className="absolute left-1/2 top-1/2 size-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10" />

        <div className="hv-orbit absolute inset-0">
          {list.map((m, i) => {
            const a = (360 / list.length) * i;
            return (
              <div
                key={m}
                className="absolute left-1/2 top-1/2"
                style={{ transform: `rotate(${a}deg) translateY(-36cqw)` }}
              >
                <div style={{ transform: `rotate(${-a}deg)` }}>
                  <div className="hv-upright">
                    <span className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-signal/30 bg-neutral-950 px-3 py-1.5 text-xs text-white shadow-[0_0_20px_-6px_rgba(255,242,0,0.5)]">
                      {m}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Hub Icon={Icon} />
        </div>
      </div>
    </motion.div>
  );
}

/* =====================================================
   2. What's included: one connected strip under the hero
   ===================================================== */

const STRIP_ICONS: Record<string, LucideIcon> = {
  setup: Settings, data: Database, integrate: Plug, reports: BarChart3,
  leads: Inbox, users: Users, calendar: CalendarCheck, onboarding: UserPlus,
  seo: Search, social: Smartphone, ads: Target, message: Mail,
  globe: Globe, layout: LayoutTemplate, gauge: Gauge,
  brand: Fingerprint, graphic: PenTool, photo: Camera, video: Video, direction: Compass,
};
const STRIP_FALLBACK: LucideIcon[] = [Settings, Database, Workflow, BarChart3];

// full class names, so Tailwind keeps them
const STRIP_COLS: Record<number, string> = {
  1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3",
  4: "lg:grid-cols-4", 5: "lg:grid-cols-5", 6: "lg:grid-cols-3",
};

export function FeatureStrip({
  features, overlap = false,
}: {
  features: { title: string; text: string; icon?: string; items?: string[] }[];
  overlap?: boolean;
}) {
  const n = features.length;

  // the spotlight follows the cursor through two CSS variables (no re-renders)
  const move = (e: ReactMouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const leave = (e: ReactMouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--mx", "-999px");
    e.currentTarget.style.setProperty("--my", "-999px");
  };

  return (
    <section
      className={
        overlap ? "relative z-10 -mt-16 px-6 pb-20 md:-mt-20 md:pb-28" : "bg-ink px-6 pb-20 md:pb-28"
      }
    >
      <div className="mx-auto max-w-[1300px]">
        <h2 className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-arc">What&apos;s included</h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div
            onMouseMove={move}
            onMouseLeave={leave}
            style={
              {
                "--mx": "-999px",
                "--my": "-999px",
                backgroundColor: "rgba(255,255,255,0.1)",
                // lights up the thin divider lines near the cursor
                backgroundImage:
                  "radial-gradient(280px circle at var(--mx) var(--my), rgba(255,242,0,0.7), transparent 70%)",
              } as CSSProperties
            }
            className={`relative grid gap-px overflow-hidden rounded-3xl border border-white/10 ${
              overlap ? "shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]" : ""
            } ${n % 2 === 0 ? "sm:grid-cols-2" : ""} ${STRIP_COLS[n] ?? "lg:grid-cols-4"}`}
          >
            {/* soft glow over the cells themselves */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(420px_circle_at_var(--mx)_var(--my),rgba(255,242,0,0.07),transparent_65%)]" />

            {features.map((f, i) => {
              const Icon = (f.icon && STRIP_ICONS[f.icon]) || STRIP_FALLBACK[i % STRIP_FALLBACK.length];
              return (
                <article key={f.title} className="group relative flex flex-col bg-neutral-950 p-8 md:p-10">
                  {/* yellow line that draws across the top on hover */}
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-signal transition-transform duration-500 group-hover:scale-x-100" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: EASE }}
                    className="flex flex-1 flex-col"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-xl border border-signal/15 bg-signal/10 text-signal transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                        <Icon className="size-6" strokeWidth={1.5} />
                      </span>
                      <span className="select-none text-5xl font-semibold leading-none text-transparent transition-all duration-500 [-webkit-text-stroke:1px_rgba(255,255,255,0.16)] group-hover:[-webkit-text-stroke-color:rgba(255,242,0,0.55)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-semibold tracking-tight">{f.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/65">{f.text}</p>

                    {f.items?.length ? (
                      <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                        {f.items.map((c, ci) => (
                          <li
                            key={c}
                            style={{ transitionDelay: `${ci * 40}ms` }}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70 transition-all duration-300 group-hover:border-signal/40 group-hover:text-white"
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </motion.div>
                </article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =====================================================
   3. How it improves your business: red vs green panels
   ===================================================== */

export function ImproveSection({
  name, rows, compare,
}: {
  name: string;
  rows: { problem: string; benefit: string }[];
  compare?: { before: string; after: string };
}) {
  const before = compare?.before ?? `Without ${name}`;
  const after = compare?.after ?? `With ${name}`;
  const vp = { once: true, margin: "-60px" } as const;
  const span = { "--rows": rows.length + 1 } as CSSProperties;

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink px-6 py-24 md:py-32">
      <style>{`
        @media (min-width: 1024px) {
          .cmp-grid { display: grid; grid-template-columns: 1fr 1fr; }
          .cmp-panel { display: grid; grid-template-rows: subgrid; grid-row: span var(--rows); }
        }
      `}</style>
      <div className="pointer-events-none absolute -left-40 top-1/3 size-[32rem] bg-[radial-gradient(circle,rgba(239,68,68,0.06),transparent_65%)]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 size-[32rem] bg-[radial-gradient(circle,rgba(52,211,153,0.07),transparent_65%)]" />

      <div className="relative mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">The difference</p>
          <h2 className="text-3xl font-light tracking-tight md:text-5xl">
            <TextReveal text="How" inView delay={0} />{" "}
            <TextReveal text={name} inView delay={0.15} className="text-arc" />{" "}
            <TextReveal text="improves your business" inView delay={0.3} stagger={0.1} />
          </h2>
        </div>

        <div className="cmp-grid relative mt-16 space-y-6 lg:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, ease: EASE }}
            style={span}
            className="cmp-panel rounded-3xl border border-red-500/20 bg-red-500/[0.04] px-8 py-10 md:px-12 lg:rounded-r-none lg:border-r-0"
          >
            <p className="pb-6 text-xs font-medium uppercase tracking-[0.2em] text-red-400">{before}</p>
            {rows.map((r) => (
              <div key={r.problem} className="flex items-start gap-4 border-t border-red-500/10 py-6">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-red-500/15 text-red-400">
                  <X className="size-4" />
                </span>
                <p className="text-lg leading-snug text-white/70">{r.problem}</p>
              </div>
            ))}
          </motion.div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-ink text-sm font-medium text-white/70 lg:grid">
            VS
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            style={span}
            className="cmp-panel rounded-3xl border border-emerald-500/25 bg-emerald-500/[0.05] px-8 py-10 md:px-12 lg:rounded-l-none"
          >
            <p className="pb-6 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">{after}</p>
            {rows.map((r) => (
              <div key={r.benefit} className="flex items-start gap-4 border-t border-emerald-500/10 py-6">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <Check className="size-4" />
                </span>
                <p className="text-lg leading-snug text-white">{r.benefit}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   4. Process: horizontal on desktop, vertical on mobile
   ===================================================== */

// true once the step has scrolled past 60% of the screen height, and stays true after
function useReached(ref: RefObject<Element | null>) {
  const [reached, setReached] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setReached(e.isIntersecting || e.boundingClientRect.top < 0),
      { rootMargin: "0px 0px -40% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return reached;
}

function TimelineStep({ i, last, step }: { i: number; last: boolean; step: { title: string; text: string } }) {
  const ref = useRef<HTMLLIElement>(null);
  const reached = useReached(ref);
  // this step's own line segment fills as you scroll through it
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 60%", "end 60%"] });

  return (
    <li ref={ref} className={`relative pl-16 ${last ? "" : "pb-14"}`}>
      {!last && (
        <>
          <span className="absolute bottom-0 left-[19px] top-10 w-0.5 bg-white/10" />
          <motion.span
            style={{ scaleY: scrollYProgress }}
            className="absolute bottom-0 left-[19px] top-10 w-0.5 origin-top bg-signal"
          />
        </>
      )}
      <span
        className={`absolute left-0 top-0 grid size-10 place-items-center rounded-full border font-mono text-sm transition-all duration-500 ${
          reached
            ? "border-signal bg-signal text-ink shadow-[0_0_0_8px_rgba(255,242,0,0.12)]"
            : "border-white/20 bg-ink text-white/40"
        }`}
      >
        {i + 1}
      </span>
      <h3
        className={`pt-1.5 text-xl font-medium tracking-tight transition-colors duration-500 ${
          reached ? "text-white" : "text-white/35"
        }`}
      >
        {step.title}
      </h3>
      <p className={`mt-2 max-w-md text-sm transition-colors duration-500 ${reached ? "text-mist" : "text-white/30"}`}>
        {step.text}
      </p>
    </li>
  );
}

function HStep({
  i, n, step, p,
}: {
  i: number; n: number; step: { title: string; text: string }; p: MotionValue<number>;
}) {
  const at = i / (n - 1); // the line reaches this circle at this progress
  const t = useTransform(p, [i === 0 ? 0 : at - 0.12, i === 0 ? 0.04 : at], [0, 1]);
  const bg = useTransform(t, [0, 1], ["rgb(10,10,10)", "rgb(255,242,0)"]);
  const border = useTransform(t, [0, 1], ["rgba(255,255,255,0.2)", "rgb(255,242,0)"]);
  const num = useTransform(t, [0, 1], ["rgba(255,255,255,0.4)", "rgb(10,10,10)"]);
  const halo = useTransform(t, [0, 1], ["0 0 0 0px rgba(255,242,0,0)", "0 0 0 8px rgba(255,242,0,0.12)"]);
  const cardBorder = useTransform(t, [0, 1], ["rgba(255,255,255,0.08)", "rgba(255,242,0,0.3)"]);
  const title = useTransform(t, [0, 1], ["rgba(255,255,255,0.4)", "rgba(255,255,255,1)"]);
  const body = useTransform(t, [0, 1], ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.65)"]);

  return (
    <li className="flex flex-col items-center text-center">
      <motion.span
        style={{ backgroundColor: bg, borderColor: border, color: num, boxShadow: halo }}
        className="relative z-10 grid size-10 place-items-center rounded-full border font-mono text-sm"
      >
        {i + 1}
      </motion.span>
      <motion.div style={{ borderColor: cardBorder }} className="mt-6 w-full flex-1 rounded-2xl border bg-neutral-950 p-6">
        <motion.h3 style={{ color: title }} className="text-lg font-medium tracking-tight">{step.title}</motion.h3>
        <motion.p style={{ color: body }} className="mt-2 text-sm">{step.text}</motion.p>
      </motion.div>
    </li>
  );
}

function ProcessHorizontal({ steps }: { steps: { title: string; text: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const p = useTransform(scrollYProgress, (v) => (reduce ? 1 : v));
  const n = steps.length;
  const edge = `${50 / n}%`; // line runs from the first circle's centre to the last one's

  return (
    <div ref={ref} className="relative hidden lg:block">
      <div className="absolute top-5 h-0.5 bg-white/10" style={{ left: edge, right: edge }} />
      <motion.div className="absolute top-5 h-0.5 origin-left bg-signal" style={{ left: edge, right: edge, scaleX: p }} />
      <ol className="relative grid gap-5" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
        {steps.map((s, i) => (
          <HStep key={s.title} i={i} n={n} step={s} p={p} />
        ))}
      </ol>
    </div>
  );
}

export function ProcessTimeline({ steps }: { steps: { title: string; text: string }[] }) {
  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"];
  const count = words[steps.length] ?? String(steps.length);

  return (
    <section id="process" className="border-t border-white/10 bg-ink px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1300px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">Our process</p>
          <h2 className="text-3xl font-light tracking-tight md:text-5xl">
            <TextReveal text="From first call to go-live, in" inView delay={0} stagger={0.07} />{" "}
            <TextReveal text={`${count} steps`} inView delay={0.5} stagger={0.1} className="text-arc" />
          </h2>
          <p className="mt-5 text-mist">You know what happens at every stage and what we need from you.</p>
        </div>

        <div className="mt-16">
          <ProcessHorizontal steps={steps} />
          <ol className="mx-auto max-w-xl lg:hidden">
            {steps.map((s, i) => (
              <TimelineStep key={s.title} i={i} last={i === steps.length - 1} step={s} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   5. Who it's for: image cards, details on hover
   ===================================================== */

type Industry = string | { name: string; text?: string; image?: string };

// "Gyms & Fitness" -> "gyms-and-fitness"
const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function IndustryCards({ industries, serviceTitle }: { industries: Industry[]; serviceTitle: string }) {
  const [missing, setMissing] = useState<Record<string, boolean>>({});
  const items = industries.map((x) => {
    const o = typeof x === "string" ? { name: x } : x;
    return {
      name: o.name,
      text: o.text ?? `${serviceTitle} built around how ${o.name.toLowerCase()} businesses work.`,
      image: o.image ?? `/industries/${slugify(o.name)}.jpg`,
    };
  });

  return (
    <section className="border-t border-white/10 bg-ink px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1300px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">Who it&apos;s for</p>
          <h2 className="text-3xl font-light tracking-tight md:text-5xl">
            <TextReveal text="Built for businesses in" inView delay={0} stagger={0.07} />{" "}
            <TextReveal text="different fields" inView delay={0.35} stagger={0.1} className="text-arc" />
          </h2>
          <p className="mt-4 text-mist">Every industry works differently. We shape the system around how yours does.</p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {items.map((it, i) => (
            <motion.article
              key={it.name}
              tabIndex={0}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12, ease: EASE }}
              className="group relative h-80 w-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 outline-none transition-colors duration-500 hover:border-signal/60 focus:border-signal/60 sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
            >
              {missing[it.name] ? (
                <div className="absolute inset-0 bg-gradient-to-br from-signal/15 via-neutral-900 to-neutral-950" />
              ) : (
                <Image
                  src={it.image}
                  alt={`${serviceTitle} for ${it.name.toLowerCase()}`}
                  fill
                  sizes="(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-focus:scale-110"
                  onError={() => setMissing((m) => ({ ...m, [it.name]: true }))}
                />
              )}

              {/* dark fade so the title is readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              {/* yellow-tinted overlay that covers the picture on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#14130a] via-[#14130a]/95 to-[#2e2b05]/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-semibold tracking-tight text-white">{it.name}</h3>
                <div className="grid grid-rows-[0fr] opacity-0 transition-[grid-template-rows,opacity] duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus:grid-rows-[1fr] group-focus:opacity-100 [@media(hover:none)]:grid-rows-[1fr] [@media(hover:none)]:opacity-100">
                  <div className="overflow-hidden">
                    <div className="mb-3 mt-3 h-0.5 w-10 bg-signal" />
                    <p className="text-sm leading-relaxed text-white/80">{it.text}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   6. FAQ: heading on the left, accordion on the right
   ===================================================== */

export function FaqSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-white/10 bg-ink px-6 py-10 md:py-10">
      <div className="mx-auto grid max-w-[1300px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start lg:pt-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">FAQ</p>
          <h2 className="text-3xl font-light tracking-tight md:text-5xl">
            <TextReveal text="Frequently asked questions" inView delay={0} stagger={0.1} />
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-5 max-w-sm text-mist"
          >
            Can&apos;t find your question?{" "}
            <a href="#contact" className="text-arc underline underline-offset-4">Send us a message</a> and we&apos;ll
            reply by email.
          </motion.p>
        </div>

        <ul>
          {faqs.map((f, i) => {
            const on = open === i;
            return (
              <motion.li
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
                className="border-b border-white/10 last:border-b-0"
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(on ? null : i)}
                    className="group flex w-full items-center gap-6 py-7 text-left md:py-8"
                  >
                    <span className={`font-mono text-sm transition-colors ${on ? "text-signal" : "text-white/30"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 text-xl font-medium tracking-tight transition-colors ${
                        on ? "text-white" : "text-white/80 group-hover:text-white"
                      }`}
                    >
                      {f.q}
                    </span>
                    <span
                      className={`relative grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        on
                          ? "border-signal bg-signal text-ink"
                          : "border-white/20 text-white/70 group-hover:border-signal group-hover:text-signal"
                      }`}
                    >
                      <Plus className={`absolute size-5 transition-all duration-300 ${on ? "rotate-90 scale-0 opacity-0" : "scale-100 opacity-100"}`} />
                      <Minus className={`absolute size-5 transition-all duration-300 ${on ? "scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-${i}`}
                  role="region"
                  aria-hidden={!on}
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className={`pb-8 pl-14 pr-4 transition-opacity duration-500 md:pr-14 ${on ? "opacity-100" : "opacity-0"}`}>
                      <p className="border-l-2 border-signal/40 pl-5 text-base leading-relaxed text-mist md:text-lg">{f.a}</p>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* =====================================================
   7. Explore other services: hub + nodes
   ===================================================== */

const EW = 760; // diagram size in SVG units
const EH = 400;
const CX = EW / 2; // hub centre
const CY = EH / 2;
const CARD_HALF_W = 17.5; // node cards are 35% wide (w-[35%] below)
const HH = 36; // line stops this far from the centre of a top/bottom card

const SPOTS = [
  { x: 17.5, y: 30, side: "left" },
  { x: 82.5, y: 30, side: "right" },
  { x: 17.5, y: 70, side: "left" },
  { x: 82.5, y: 70, side: "right" },
  { x: 50, y: 10, side: "top" },
  { x: 50, y: 90, side: "bottom" },
] as const;

type Spot = (typeof SPOTS)[number];

function spotPath(s: Spot) {
  const cx = (s.x / 100) * EW;
  const cy = (s.y / 100) * EH;
  if (s.side === "top") return `M ${CX} ${CY} L ${cx} ${cy + HH}`;
  if (s.side === "bottom") return `M ${CX} ${CY} L ${cx} ${cy - HH}`;
  const out = s.side === "left" ? -1 : 1;
  const ax = ((s.x - out * CARD_HALF_W) / 100) * EW; // the card edge facing the hub
  return `M ${CX} ${CY} C ${CX + out * 60} ${CY}, ${ax - out * 60} ${cy}, ${ax} ${cy}`;
}

const DOT_POS: Record<Spot["side"], string> = {
  left: "-right-[5px] top-1/2 -translate-y-1/2",
  right: "-left-[5px] top-1/2 -translate-y-1/2",
  top: "-bottom-[5px] left-1/2 -translate-x-1/2",
  bottom: "-top-[5px] left-1/2 -translate-x-1/2",
};

function ServiceNode({ svc, side, on }: { svc: (typeof services)[number]; side?: Spot["side"]; on?: boolean }) {
  return (
    <Link
      href={`/services/${svc.slug}`}
      className={`group relative flex items-center gap-3 rounded-2xl border bg-neutral-950 p-3 outline-none transition-[border-color,box-shadow] duration-500 focus-visible:border-signal ${
        on
          ? "border-signal/70 shadow-[0_0_40px_-12px_rgba(255,242,0,0.4)]"
          : "border-white/10 hover:border-signal/70 hover:shadow-[0_0_40px_-12px_rgba(255,242,0,0.4)]"
      }`}
    >
      {side && (
        <span
          className={`absolute size-2.5 rounded-full bg-signal shadow-[0_0_12px_rgba(255,242,0,0.9)] ${DOT_POS[side]}`}
        />
      )}
      <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-signal/15 bg-signal/10 text-signal transition-transform duration-500 group-hover:scale-110">
        <svc.icon className="size-5" strokeWidth={1.5} />
      </span>
      <span className="min-w-0 flex-1 text-sm font-medium leading-tight text-white">{svc.title}</span>
      {/* arrow slides in on hover; it is always visible on touch screens, where there is no hover */}
      <ArrowUpRight className="size-4 w-0 shrink-0 -translate-x-1 text-signal opacity-0 transition-all duration-300 group-hover:w-4 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:w-4 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 [@media(hover:none)]:w-4 [@media(hover:none)]:translate-x-0 [@media(hover:none)]:opacity-100" />
    </Link>
  );
}

export function ExploreServices({ currentSlug }: { currentSlug: string }) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<number | null>(null);
  const current = getService(currentSlug);
  const HubIcon = current?.icon ?? Workflow;
  const others = services.filter((s) => s.slug !== currentSlug);
  const nodes = others.slice(0, SPOTS.length).map((svc, i) => ({ svc, spot: SPOTS[i], d: spotPath(SPOTS[i]) }));

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink px-6 py-20 md:py-24">
      <style>{`
        @keyframes ex-flow { from { stroke-dashoffset: 0.2; } to { stroke-dashoffset: -1; } }
        .ex-pulse { stroke-dasharray: 0.2 1.4; animation: ex-flow 2.8s linear infinite; }
      `}</style>

      <div className="mx-auto grid w-full max-w-[1300px] items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Left: text and button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">More from CLEVER WINK</p>
          <h2 className="text-3xl font-light tracking-tight md:text-5xl">
            <TextReveal text="Looking for something else?" inView delay={0} stagger={0.08} />
          </h2>
          <p className="mt-4 max-w-md text-mist">
            From business software to websites, marketing and design, it is all under one roof.
          </p>
          <Link
            href="/#services"
            className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-signal px-6 py-3.5 text-sm font-medium text-ink transition hover:-translate-y-0.5"
          >
            Explore all services
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Right: the diagram */}
        <div className="min-w-0">
          {/* Desktop: hub in the middle, services around it */}
          <div className="relative hidden aspect-[760/400] lg:block">
            <div className="pointer-events-none absolute left-1/2 top-1/2 size-[26rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,242,0,0.12),transparent_65%)]" />

            <svg viewBox={`0 0 ${EW} ${EH}`} className="absolute inset-0 size-full" fill="none" aria-hidden>
              {nodes.map((n, i) => (
                <g key={n.svc.slug}>
                  <motion.path
                    d={n.d}
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className={`transition-colors duration-500 ${hover === i ? "text-signal/80" : "text-white/15"}`}
                    initial={reduce ? false : { pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 1.2, delay: 0.2 + i * 0.12, ease: EASE }}
                  />
                  <path
                    d={n.d}
                    pathLength={1}
                    stroke="#fff200"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    className="ex-pulse motion-reduce:hidden"
                    style={{ animationDelay: `${i * 0.45}s`, filter: "drop-shadow(0 0 4px rgba(255,242,0,0.9))" }}
                  />
                </g>
              ))}
            </svg>

            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <Hub Icon={HubIcon} small />
                <p className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-xs font-medium uppercase tracking-[0.15em] text-white/50">
                  {current?.title}
                </p>
              </div>
            </div>

            {nodes.map((n, i) => (
              <div
                key={n.svc.slug}
                className="absolute w-[30%] -translate-x-1/2 -translate-y-1/2 xl:w-[30%]"
                style={{ left: `${n.spot.x}%`, top: `${n.spot.y}%` }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
              >
                <motion.div
                  initial={reduce ? false : { opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.12, ease: EASE }}
                >
                  <ServiceNode svc={n.svc} side={n.spot.side} on={hover === i} />
                </motion.div>
              </div>
            ))}
          </div>

          {/* Phones and tablets: hub on top, cards stacked */}
          <div className="lg:hidden">
            <div className="mx-auto w-fit">
              <Hub Icon={HubIcon} />
            </div>
            <div className="mx-auto h-8 w-px bg-gradient-to-b from-signal/70 to-white/10" />
            <ul className="grid gap-5 px-10 sm:grid-cols-2">
              {others.map((svc, i) => (
                <motion.li
                  key={svc.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                >
                  <ServiceNode svc={svc} />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}