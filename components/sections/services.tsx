// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import Reveal from "@/components/reveal";
// import { services } from "@/lib/services";

// export default function Services() {
//   return (
//     <section id="services" className="bg-ink px-6 py-20 md:py-28">
//       <div className="mx-auto max-w-[1200px]">
//         <Reveal className="mx-auto max-w-2xl text-center">
//           <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">Services</p>
//           <h2 className="text-3xl font-light tracking-tight md:text-5xl">
//             Everything you need to run and <span className="text-arc">grow</span> your business
//           </h2>
//           <p className="mt-4 text-mist">Automation is built into every service.</p>
//         </Reveal>
//         <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {services.map((s, i) => (
//             <Reveal key={s.slug} delay={i * 0.08} className="h-full">
//               <Link href={`/services/${s.slug}`} className="group flex h-full flex-col rounded-lg border border-fog/50 p-7 transition hover:-translate-y-1 hover:border-signal">
//                 <s.icon className="size-7 text-arc" strokeWidth={1.5} />
//                 <h3 className="mb-2 mt-5 text-2xl font-light tracking-tight">{s.title}</h3>
//                 <p className="flex-1 text-base text-mist">{s.short}</p>
//                 <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-arc">
//                   Learn more <ArrowRight className="size-4 transition group-hover:translate-x-1" />
//                 </span>
//               </Link>
//             </Reveal>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/reveal";
import { services } from "@/lib/services";
import TextReveal from "../text-reveal";

export default function Services() {
  const [open, setOpen] = useState(0);

  return (
    
    <section id="services" className="bg-ink px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc">Services</p>
          <h2 className="text-3xl font-light tracking-tight md:text-5xl">
            Everything you need to run and <span className="text-arc">grow</span> your business
          </h2>
          <p className="mt-4 text-mist">Automation is built into every service. Pick a panel to explore.</p>
        </Reveal>

        {/* One black container holding every panel */}
        <Reveal>
        <div className="mt-12 rounded-2xl border border-white/10 bg-neutral-950 p-2 sm:p-3">
          <div className="flex flex-col gap-2 sm:gap-3 lg:h-[26rem] lg:flex-row">
            {services.map((s, i) => {
              const on = i === open;
              return (
                <div
                  key={s.slug}
                  className={`relative min-w-0 overflow-hidden rounded-xl border border-white/10 bg-neutral-900 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    on ? "h-[26rem] sm:h-[17rem] lg:h-auto lg:flex-[9]" : "h-14 lg:h-auto lg:flex-[1]"
                  }`}
                >
                  {/* Collapsed: icon and title only. Click anywhere on it to open. */}
                  <button
                    type="button"
                    aria-expanded={on}
                    tabIndex={on ? -1 : 0}
                    onClick={() => setOpen(i)}
                    className={`absolute inset-0 z-10 flex items-center gap-3 px-3 text-left transition duration-500 hover:bg-white/5 lg:flex-col lg:items-center lg:justify-between lg:px-0 lg:py-10 ${
                      on ? "pointer-events-none opacity-0" : "opacity-100 delay-300"
                    }`}
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15">
                      <s.icon className="size-4 text-arc" strokeWidth={1.5} />
                    </span>
                    <span className="text-base font-medium lg:rotate-180 lg:text-lg lg:[writing-mode:vertical-rl]">{s.title}</span>
                  </button>

                  {/* Expanded: text on the left, image block on the right */}
                  <div
                    aria-hidden={!on}
                    className={`absolute inset-y-0 left-0 right-0 flex flex-col gap-3 p-3 transition duration-500 sm:grid sm:grid-cols-[1.4fr_1fr] sm:gap-4 lg:min-w-[34rem] ${
                      on ? "opacity-100 delay-300" : "pointer-events-none opacity-0"
                    }`}
                  >
                    <div className="flex flex-col justify-between gap-4 p-2 lg:p-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15">
                            <s.icon className="size-4 text-arc" strokeWidth={1.5} />
                          </span>
                          <h3 className="text-xl font-light tracking-tight lg:text-3xl">{s.title}</h3>
                        </div>
                        <p className="mt-3 max-w-sm text-m text-mist lg:text-base">{s.short}</p>
                      </div>

                      <div>
                        <div className="hidden sm:block">
                          <p className="font-mono text-xs uppercase tracking-[0.08em] text-mist">What we offer</p>
                          <ul className="mt-2 flex flex-wrap gap-1.5">
                            {s.features.map((f) => (
                              <li key={f.title} className="rounded-full border border-white/15 px-2.5 py-1 text-s text-neutral-200">
                                {f.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* <Link
                          href={`/services/${s.slug}`}
                          tabIndex={on ? 0 : -1}
                          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-arc sm:mt-4"
                        >
                          Learn more <ArrowUpRight className="size-4" />
                        </Link> */}
                      </div>
                    </div>

                    <div className="relative min-h-28 flex-1 overflow-hidden rounded-lg sm:min-h-0 sm:flex-none">
                      <Image
                        src={s.image}
                        alt={`${s.title} preview`}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 40vw, 100vw"
                        className={` transition duration-1000 ${on ? "scale-100" : "scale-110"}`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}