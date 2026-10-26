import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Navbar, Footer } from "@/components/site-chrome";
import Reveal from "@/components/reveal";
import Contact from "@/components/sections/contact";
import { services, getService, timelineFaq } from "@/lib/services";
import { KineticTextReveal } from "@/components/ui/kinetic-text-reveal"

type Props = { params: Promise<{ slug: string }> };

const steps = [
  ["Discovery", "We learn how your business works today."],
  ["Plan", "We agree the scope and the plan."],
  ["Build", "We build it and test it properly."],
  ["Launch & support", "We go live and help your team get started."],
];

const eyebrow = "mb-3 text-sm font-medium uppercase tracking-[0.05em] text-arc";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return { title: s.metaTitle, description: s.metaDescription, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-ink px-6 pb-16 pt-32 md:pb-24 md:pt-40">
          <div className="mx-auto max-w-4xl text-center">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-mist">
              <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#services" className="hover:text-white">Services</Link> / <span className="text-white">{s.title}</span>
            </nav>
            <s.icon className="mx-auto size-10 text-arc" strokeWidth={1.5} />
            <h1
              aria-label={s.heading}
              className=" bg-arc mt-6 text-3xl font-light leading-tight tracking-tight sm:text-4xl md:text-6xl"
            >
              <span aria-hidden="true">
                <KineticTextReveal text={s.heading} />
              </span>
            </h1>

            {/* <h1 className="mt-6 text-3xl font-light leading-tight tracking-tight sm:text-4xl md:text-6xl">{s.heading}</h1> */}
            <p className="mx-auto mt-6 max-w-2xl text-lg text-mist">{s.intro}</p>
            <a href="#contact" className="mt-8 inline-block rounded-lg bg-signal px-6 py-3.5 text-sm font-medium text-ink transition hover:-translate-y-0.5">Book a Consultation</a>
          </div>
        </section>

        <section className="border-t border-white/10 bg-ink px-6 py-20 md:py-24">
          <div className="mx-auto max-w-[1000px]">
            <Reveal className="text-center">
              <p className={eyebrow}>What we do</p>
              <h2 className="text-3xl font-light tracking-tight md:text-4xl">What&apos;s included</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {s.features.map((f) => (
                <div key={f.title} className="rounded-lg border border-fog/50 p-7">
                  <Check className="size-6 text-arc" />
                  <h3 className="mt-4 text-xl font-light">{f.title}</h3>
                  <p className="mt-2 text-mist">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-ink px-6 py-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className={eyebrow}>Who it&apos;s for</p>
            <h2 className="text-3xl font-light tracking-tight md:text-4xl">Built for businesses in different fields</h2>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {s.industries.map((i) => (
                <li key={i} className="rounded-full border border-fog/50 px-5 py-2 text-sm">{i}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-white/10 bg-ink px-6 py-20 md:py-24">
          <div className="mx-auto max-w-[1000px]">
            <div className="text-center">
              <p className={eyebrow}>How it works</p>
              <h2 className="text-3xl font-light tracking-tight md:text-4xl">Four simple steps</h2>
            </div>
            <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(([t, d], i) => (
                <li key={t} className="rounded-lg border border-fog/50 p-6">
                  <span className="font-mono text-xs text-arc">0{i + 1}</span>
                  <h3 className="mt-3 text-xl font-light">{t}</h3>
                  <p className="mt-2 text-sm text-mist">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-white/10 bg-ink px-6 py-20 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-3xl font-light tracking-tight md:text-4xl">Questions</h2>
            <div className="mt-10 space-y-3">
              {[...s.faqs, timelineFaq].map((f) => (
                <details key={f.q} className="group rounded-lg border border-fog/50 p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-light [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span className="text-2xl text-arc transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-mist">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-ink px-6 py-16">
          <div className="mx-auto max-w-[1000px]">
            <h2 className="text-center text-2xl font-light">Our other services</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {others.map((o) => (
                <Link key={o.slug} href={`/services/${o.slug}`} className="rounded-lg border border-fog/50 p-5 transition hover:border-signal">
                  <o.icon className="size-6 text-arc" strokeWidth={1.5} />
                  <p className="mt-3 text-lg font-light">{o.title}</p>
                  <p className="mt-1 text-sm text-mist">{o.short}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}