import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { Navbar, Footer } from "@/components/site-chrome";
import Reveal from "@/components/reveal";
import TextReveal from "@/components/text-reveal";
import { HeroTitle, HeroUnderline } from "@/components/service-sections";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Careers at CLEVER WINK. There are no open positions right now, but you can send us your CV and follow us on LinkedIn to hear when we open a role.",
  alternates: { canonical: "/careers" },
};

const EMAIL = "info@cleverwink.ae";
const LINKEDIN = "https://www.linkedin.com/company/clever-wink-llc";

type Opening = { title: string; type: string; location: string; summary: string };

// Add a role here when you start hiring and the page lists it automatically.
// With the array empty, the "No open positions" message shows instead.
//
// const openings: Opening[] = [
//   { title: "Frontend Developer", type: "Full-time", location: "Sharjah, UAE", summary: "What the role involves in one or two sentences." },
// ];
const openings: Opening[] = [];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink px-6 pb-16 pt-32 md:pb-24 md:pt-40">
          <div className="pointer-events-none absolute left-1/2 top-20 size-[40rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,242,0,0.08),transparent_65%)]" />
          <div className="relative mx-auto max-w-[1200px]">
            <Reveal>
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-mist">
                <Link href="/" className="hover:text-white">Home</Link> /{" "}
                <span className="text-white">Careers</span>
              </nav>
            </Reveal>

            <h1 className="max-w-3xl text-4xl font-normal text-arc tracking-tight sm:text-5xl md:text-6xl" >
                Careers at CLEVER WINK
            </h1>
            

            <p className="mt-6 max-w-xl text-lg text-mist">
              <TextReveal
                text="We are a UAE-based team that builds business software, websites and creative work for growing companies."
                delay={1.2}
                stagger={0.02}
              />
            </p>
          </div>
        </section>

        {/* Open positions */}
        <section className="border-t border-white/10 bg-ink px-6 py-20 md:py-8">
          <div className="mx-auto max-w-[1300px]">
            {/* <Reveal>
              <p className="mb-6 text-sm font-medium uppercase tracking-[0.05em] text-arc">Open positions</p>
            </Reveal> */}

            {openings.length > 0 ? (
              <ul className="grid gap-5 md:grid-cols-2">
                {openings.map((o) => (
                  <li key={o.title}>
                    <a
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Application: ${o.title}`)}`}
                      className="group flex h-full flex-col rounded-3xl border border-white/10 bg-neutral-950 p-7 transition-[border-color,box-shadow] duration-500 hover:border-signal/60 hover:shadow-[0_20px_60px_-20px_rgba(255,242,0,0.3)]"
                    >
                      <h2 className="text-xl font-medium tracking-tight">{o.title}</h2>
                      <p className="mt-1 text-sm text-white/50">
                        {o.type} · {o.location}
                      </p>
                      <p className="mt-4 flex-1 text-mist">{o.summary}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-arc">
                        Apply by email
                        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 px-8 py-14 text-center md:py-20">
                  <div className="pointer-events-none absolute left-1/2 top-1/2 size-[24rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(255,242,0,0.07),transparent_65%)]" />
                  <div className="relative">
                    <span className="mx-auto grid size-16 place-items-center rounded-2xl border border-signal/15 bg-signal/10 text-signal">
                      <Briefcase className="size-7" strokeWidth={1.5} />
                    </span>
                    <h2 className="mt-6 text-3xl font-light tracking-tight md:text-4xl">
                      No open positions right now
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-mist">
                      We are not hiring at the moment, but we are always happy to hear from people who like what we
                      do. New roles will be listed on this page when they open.
                    </p>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* Stay in touch */}
        <section className="border-t border-white/10 bg-ink px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="mx-auto max-w-[1200px]">
            <Reveal className="max-w-2xl">
              <h2 className="text-3xl font-light tracking-tight md:text-5xl">Want to introduce yourself?</h2>
              <p className="mt-4 text-mist">
                You do not need an open role to get in touch. Here are two ways to stay on our radar.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <Reveal className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-neutral-950 p-8">
                  <span className="grid size-12 place-items-center rounded-xl border border-signal/15 bg-signal/10 text-signal">
                    <Mail className="size-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 text-xl font-medium tracking-tight">Send us your details</h3>
                  <p className="mt-2 flex-1 text-mist">
                    Email your CV or portfolio with a few lines about what you do and the kind of role you are looking
                    for. If a suitable role opens, we will get in touch.
                  </p>
                  <a
                    href={`mailto:${EMAIL}?subject=${encodeURIComponent("Career enquiry")}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-arc underline-offset-4 hover:underline"
                  >
                    {EMAIL}
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </Reveal>

              <Reveal className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-neutral-950 p-8">
                  <span className="grid size-12 place-items-center rounded-xl border border-signal/15 bg-signal/10 text-signal">
                    <FaLinkedinIn className="size-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-medium tracking-tight">Follow us on LinkedIn</h3>
                  <p className="mt-2 flex-1 text-mist">
                    Follow our company page to hear when we open a role.
                  </p>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-arc underline-offset-4 hover:underline"
                  >
                    CLEVER WINK on LinkedIn
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}