"use client";
import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { BarChart3, Database, Settings, Workflow, type LucideIcon } from "lucide-react";
import TextReveal from "@/components/text-reveal";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------- What's included: cards reveal from the middle ---------- */

// Icons are picked by position, because components can't be passed from a server page
const FEATURE_ICONS: LucideIcon[] = [Settings, Database, Workflow, BarChart3];

function FeatureCard({ f, i, Icon }: { f: { title: string; text: string }; i: number; Icon: LucideIcon }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      // opens outward from the centre of the card
      initial={reduce ? false : { clipPath: "inset(50% 50% 50% 50% round 24px)", opacity: 0 }}
      whileInView={{ clipPath: "inset(-12% -6% -12% -6% round 24px)", opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: (i % 2) * 0.15 + Math.floor(i / 2) * 0.15, ease: EASE }}
    >
      <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-7 transition-[border-color,box-shadow] duration-500 hover:border-signal/70 hover:shadow-[0_0_40px_-10px_rgba(255,242,0,0.35)]">
        {/* yellow glow that grows out from the middle on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 scale-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,242,0,0.16),rgba(255,242,0,0.05)_55%,transparent_80%)] opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
        />
        <div className="relative z-10">
          <div className="flex items-start justify-between">
            <span className="grid size-12 place-items-center rounded-xl border border-signal/10 bg-signal/10 text-signal transition-colors duration-500 group-hover:bg-signal/20">
              <Icon className="size-5" strokeWidth={1.5} />
            </span>
            <span className="font-mono text-sm text-white/40">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="mt-6 text-xl font-medium tracking-tight">{f.title}</h3>
          <p className="mt-2 max-w-xs text-sm text-mist">{f.text}</p>
          <div className="mt-6 h-0.5 w-12 bg-signal transition-all duration-500 group-hover:w-20" />
        </div>
      </article>
    </motion.div>
  );
}

export function FeatureCards({ features }: { features: { title: string; text: string }[] }) {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute -left-32 -top-32 size-96 bg-[radial-gradient(circle,rgba(255,242,0,0.10),transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 size-96 bg-[radial-gradient(circle,rgba(255,242,0,0.10),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1000px]">
        <div className="text-center">
          <p className="mb-3 flex items-center justify-center gap-4 text-sm font-medium uppercase tracking-[0.2em] text-arc">
            <span className="h-px w-10 bg-arc/60" /> Everything you need <span className="h-px w-10 bg-arc/60" />
          </p>
          <h2 className="text-4xl font-light tracking-tight md:text-5xl">
            <TextReveal text="What's"  stagger={0.1} />{" "}
            <TextReveal text="included."  className="text-arc" />
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-mist">
            From initial setup to everyday operations, we make it work for your business.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} Icon={FEATURE_ICONS[i % FEATURE_ICONS.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Who it's for: hover tabs with a picture ---------- */

type Industry = string | { name: string; text?: string; image?: string };

// "Gyms & fitness" -> "gyms-and-fitness"
const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export function IndustryTabs({ industries, serviceTitle }: { industries: Industry[]; serviceTitle: string }) {
  const items = industries.map((x) => {
    const o = typeof x === "string" ? { name: x } : x;
    return { name: o.name, text: o.text, image: o.image ?? `/industries/${slugify(o.name)}.webp` };
  });
  const [active, setActive] = useState(0);
  const [missing, setMissing] = useState<Record<string, boolean>>({});

  return (
    <section className="border-t border-white/10 bg-ink px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1000px]">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">Who it&apos;s for</p>
          <h2 className="text-3xl font-light tracking-tight md:text-5xl">
            <TextReveal text="Built for businesses in different fields" stagger={0.07} />
          </h2>
        </div>

        <div
          className="mt-12 rounded-3xl border border-white/10 bg-neutral-950 p-3 md:p-4"
          style={{ "--tab-bg": "#1a1a1a" } as CSSProperties}
        >
          <div className="grid gap-4 md:grid-cols-[17rem_1fr] md:gap-0">
            {/* list */}
            <ul className="order-2 space-y-2 md:order-1 md:py-4">
              {items.map((it, i) => {
                const on = i === active;
                return (
                  <li key={it.name}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`relative block w-full rounded-xl px-5 py-4 text-left transition-colors duration-300 md:rounded-r-none ${
                        on ? "bg-[var(--tab-bg)]" : "hover:bg-white/5"
                      }`}
                    >
                      <span className={`text-lg font-medium transition-colors ${on ? "text-white" : "text-white/60"}`}>
                        {it.name}
                      </span>
                      {it.text && (
                        <span
                          className={`grid transition-[grid-template-rows,opacity] duration-500 ${
                            on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <span className="overflow-hidden">
                            <span className="mt-2 block text-sm text-mist">{it.text}</span>
                          </span>
                        </span>
                      )}
                      {/* concave corners that join the tab to the picture frame */}
                      {on && (
                        <>
                          <span
                            aria-hidden
                            className="pointer-events-none absolute -top-4 right-0 hidden size-4 bg-[radial-gradient(circle_at_0_0,transparent_1rem,var(--tab-bg)_1rem)] md:block"
                          />
                          <span
                            aria-hidden
                            className="pointer-events-none absolute -bottom-4 right-0 hidden size-4 bg-[radial-gradient(circle_at_0_100%,transparent_1rem,var(--tab-bg)_1rem)] md:block"
                          />
                        </>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* picture frame, images crossfade */}
            <div className="order-1 rounded-2xl bg-[var(--tab-bg)] p-2 md:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl md:aspect-auto md:h-[24rem]">
                {items.map((it, i) => (
                  <div
                    key={it.name}
                    aria-hidden={i !== active}
                    className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
                  >
                    {missing[it.name] ? (
                      <div className="grid size-full place-items-center bg-gradient-to-br from-signal/15 via-neutral-900 to-neutral-950">
                        <span className="px-6 text-center text-3xl font-light text-white/30">{it.name}</span>
                      </div>
                    ) : (
                      <Image
                        src={it.image}
                        alt={`${serviceTitle} for ${it.name.toLowerCase()}`}
                        fill
                        sizes="(min-width: 768px) 700px, 100vw"
                        className="object-cover"
                        onError={() => setMissing((m) => ({ ...m, [it.name]: true }))}
                      />
                    )}
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
                      {it.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}