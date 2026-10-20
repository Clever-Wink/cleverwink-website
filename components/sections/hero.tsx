// "use client";
// import { HeroParallax } from "@/components/ui/hero-parallax";

// // Demo thumbnails from Aceternity; replace with your own screenshots later.
// const items: [string, string][] = [
//   ["Lead Capture", "moonbeam"], ["Auto Follow-up", "cursor"], ["Pipeline Flows", "rogue"],
//   ["CRM Setup", "editorially"], ["Data Migration", "editrix"], ["Integrations", "pixelperfect"],
//   ["Reports", "algochurn"], ["WhatsApp Flows", "aceternityui"], ["Email Sequences", "tailwindmasterkit"],
//   ["Task Routing", "smartbridge"], ["Deal Alerts", "renderwork"], ["Lead Scoring", "cremedigital"],
//   ["Onboarding Flows", "goldenbellsacademy"], ["Invoice Sync", "invoker"], ["Team Dashboards", "efreeinvoice"],
// ];

// const products = items.map(([title, slug]) => ({
//   title,
//   link: "#services",
//   thumbnail: `https://www.aceternity.com/images/products/thumbnails/new/${slug}.png`,
// }));

// export default function Hero() {
//   return (
//     <section id="top">
//       <HeroParallax products={products} />
//     </section>
//   );
// }


import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import TextReveal from "../text-reveal";
import Clients from "./clients";

// Demo images from Aceternity. Replace with screenshots of your own work (save them in public/hero/).
const images = ["/bg_2.png"];
const wall = Array.from({ length:35 }, (_, i) => images[i % images.length]);

const clients: { name: string; logo?: string }[] = [
  { name: "Demo Co" },
  { name: "Sample Trading" },
  { name: "Example Logistics" },
  { name: "Acme Retail" },
  { name: "Northwind Estates" },
  { name: "Bright Clinics" },
  { name: "Orbit Travel" },
  { name: "Summit Education" },
];

const row = [...clients, ...clients];

function Item({ name, logo }: { name: string; logo?: string }) {
  return (
    <li className="flex shrink-0 items-center gap-3 px-8">
      {logo ? (
        <img src={logo} alt="" className="size-9 rounded-full object-contain grayscale transition hover:grayscale-0" />
      ) : (
        <span className="grid size-9 place-items-center rounded-full border border-signal text-sm font-medium text-arc">
          {name[0]}
        </span>
      )}
      <span className="whitespace-nowrap text-lg text-white">{name}</span>
    </li>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[clamp(40rem,100svh,56rem)] w-full items-center justify-center overflow-hidden bg-ink px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32"
    >
      <div className="relative z-20 mx-auto w-full max-w-4xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.05em] text-arc">Technology · Marketing · Creative</p>
        <h1 className="text-balance text-3xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl">
          <TextReveal text="Software, websites and marketing for growing businesses" delay={0.4} stagger={0.08} />
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-neutral-200 sm:mt-6 sm:text-lg">
          CRM and HRMS systems, websites, digital marketing and design: one team to help your business run smoothly and get noticed.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a href="#contact" className="rounded-lg bg-signal px-6 py-3.5 text-sm font-medium text-ink transition hover:-translate-y-0.5">
            Book a Demo
          </a>
          <a href="#services" className="rounded-lg border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition hover:border-signal">
            See our services
          </a>
        </div>

        {/* <div className="marquee relative mt-10 overflow-hidden sm:mt-12 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <ul key={k} aria-hidden={k === 1} className="flex shrink-0">
                {row.map((c, i) => (
                  <Item key={i} {...c} />
                ))}
              </ul>
            ))}
          </div>
        </div> */}
      </div>

      {/* Overlay: even dimming on phones and tablets, a darker centre on laptops */}
      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-black/70 lg:bg-black/0 lg:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0.4)_75%)]"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-ink to-transparent" />

      {/* Wall: scaled up on small screens so it reaches every edge */}
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="h-full w-full origin-center scale-[1.7] sm:scale-[1.35] lg:scale-100">
          <ThreeDMarquee className="pointer-events-none h-full w-full" images={wall} />
        </div>
      </div>
    </section>
    
  );
}