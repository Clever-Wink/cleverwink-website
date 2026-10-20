import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/reveal";

// SAMPLE projects. Replace with your real work, then delete `sample: true`.
// `service` must match a slug in lib/services.ts (crm, hrms, digital-marketing, web-design).
const works = [
  {
    client: "Client Name",
    year: "2026",
    title: "CRM & Follow-up Automation for a Fitness Studio",
    service: "crm",
    image: "https://assets.aceternity.com/components/hero-section-with-mesh-gradient.webp",
    stats: [["40%", "Faster response"], ["3", "New workflows"], ["2x", "More enquiries"]],
    sample: true,
  },
  {
    client: "Client Name",
    year: "2026",
    title: "Website & Digital Marketing for a Restaurant Group",
    service: "web-design",
    image: "https://assets.aceternity.com/components/hero-1.webp",
    stats: [["60%", "More traffic"], ["5", "Landing pages"], ["2x", "Online bookings"]],
    sample: true,
  },
];

export default function Works() {
  return (
    <section id="work" className="bg-ink px-6 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="border-t border-white/10 pt-4 font-mono text-xs uppercase tracking-[0.08em] text-mist">/Case studies</div>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl font-light tracking-tight md:text-6xl">Latest works</h2>
          <Link href="/#services" className="inline-flex items-center gap-3 rounded-sm bg-signal py-2 pl-4 pr-2 text-sm font-medium text-ink transition hover:-translate-y-0.5">
            View services
            <span className="grid size-8 place-items-center bg-ink text-signal"><ArrowUpRight className="size-4" /></span>
          </Link>
        </div>

        <div className="mt-12 space-y-6">
          {works.map((w) => (
            <Reveal key={w.title}>
              <Link
                href={`/services/${w.service}`}
                className="group grid overflow-hidden rounded-sm border border-white/10 bg-white/[0.04] md:grid-cols-[1.1fr_1fr]"
              >
                <div className="flex flex-col justify-between gap-10 p-6 md:p-8">
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.08em] text-mist">
                    <span className="flex items-center gap-3 text-arc">
                      {w.client}
                      
                    </span>
                    <span>/{w.year}</span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-light leading-tight tracking-tight md:text-4xl">{w.title}</h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-arc opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100">
                      Learn more
                      <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-t border-fog/40 pt-6">
                    {w.stats.map(([value, label]) => (
                      <div key={label}>
                        <p className="text-3xl font-light">{value}</p>
                        <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-mist">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-64 overflow-hidden md:min-h-[24rem] ">
                  <Image
                    src={w.image}
                    alt={`${w.title} project`}
                    fill
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-110 group-active:scale-110"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}