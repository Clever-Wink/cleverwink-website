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


import TextReveal from "../text-reveal";
import HeroVideo from "../hero-video";

// Side of the screen for the text on landscape screens. Match the empty space in your wide video.
const TEXT_SIDE: "left" | "right" = "left";

const textSide = TEXT_SIDE === "left" ? "landscape:justify-start" : "landscape:justify-end";
const shade =
  TEXT_SIDE === "left"
    ? "landscape:bg-[linear-gradient(to_right,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_55%)]"
    : "landscape:bg-[linear-gradient(to_left,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_55%)]";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[clamp(40rem,100svh,56rem)] w-full overflow-hidden bg-ink portrait:min-h-svh absolute inset-x-0 bottom-0 sm:top-[var(--nav-h,3rem)]"
    >
      <HeroVideo />

      {/* Readability layer: dark on the text side (landscape) or at the bottom (portrait) */}
      <div
        aria-hidden
className={`absolute inset-0 z-10 portrait:bg-[linear-gradient(to_top,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.7)_55%,rgba(0,0,0,0.3)_66%,rgba(0,0,0,0)_82%)] ${shade}`}      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-ink to-transparent" />

      <div className={`relative z-20 mx-auto flex w-full max-w-[1200px] px-4 sm:px-6 portrait:items-end portrait:pb-6 landscape:items-center landscape:py-32 ${textSide}`}>
        <div className="max-w-xl text-center sm:text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.05em] text-arc">BUSINESS SOFTWARE · TECHNOLOGY · CREATIVE</p>
          <h1 className="text-pretty sm:text-balance text-3xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl">
            <TextReveal
              text="Smarter Business Solutions with ERP, CRM & HRMS"
              delay={0.4}
              stagger={0.08}
            />
          </h1>
          <p className=" hidden sm:block mt-5 max-w-lg text-base text-neutral-200 sm:mt-6 sm:text-lg">
            Empowering businesses across the UAE with ERP, CRM and HRMS solutions, alongside web development, digital marketing and creative services — all under one roof.          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 sm:justify-start mb-15 flex justify-center">
            <a href="#contact" className="rounded-lg bg-signal px-3.5 py-3.5 text-sm font-medium text-ink transition hover:-translate-y-0.5">
              Book a Demo
            </a>
            <a href="#services" className="rounded-lg border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition hover:border-signal">
              See our services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}