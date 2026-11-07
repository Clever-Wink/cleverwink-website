import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Navbar, Footer } from "@/components/site-chrome";
import Reveal from "@/components/reveal";
import Contact from "@/components/sections/contact";
import TextReveal from "@/components/text-reveal";
import { services, getService, timelineFaq } from "@/lib/services";
import {
  HeroTitle, HeroUnderline, HeroVisual,
  FeatureStrip, ImproveSection, ProcessTimeline,
  IndustryCards, FaqSection, ExploreServices,
} from "@/components/service-sections";

type Props = { params: Promise<{ slug: string }> };

// used for any service that doesn't have its own `process`
const defaultProcess = [
  { title: "Discovery", text: "We learn how your business works today." },
  { title: "Plan", text: "We agree the scope and the plan." },
  { title: "Build", text: "We build it and test it properly." },
  { title: "Launch & support", text: "We go live and help your team get started." },
];

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

  const name = s.title.replace(/\s+Solutions$/i, ""); // "ERP Solutions" -> "ERP"
  // if the service has its own "how long" question, don't add the shared one
  const faqs = s.faqs.some((f) => /how long/i.test(f.q)) ? s.faqs : [...s.faqs, timelineFaq];

  return (
    <>
      <Navbar />
      <main className="w-full">
        {/* 1. Hero */}
        <section className="relative overflow-hidden bg-ink px-6 pb-16 pt-32 md:pb-24 md:pt-40">
          <div className="pointer-events-none absolute left-1/4 top-24 size-[40rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,242,0,0.08),transparent_65%)]" />
          <div className="relative mx-auto grid max-w-[1300px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal>
                <nav aria-label="Breadcrumb" className="mb-6 text-sm text-mist">
                  <Link href="/" className="hover:text-white">Home</Link> /{" "}
                  <Link href="/#services" className="hover:text-white">Services</Link> /{" "}
                  <span className="text-white">{s.title}</span>
                </nav>
                <s.icon className="size-10 text-arc" strokeWidth={1.5} />
              </Reveal>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
                <HeroTitle text={s.heading} highlight={s.highlight} />
              </h1>
              <HeroUnderline />

              <p className="mt-6 max-w-xl text-lg text-mist">
                <TextReveal text={s.intro} delay={1.4} stagger={0.02} />
              </p>

              <Reveal className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="#contact"
                  className="inline-block origin-bottom rounded-xl bg-signal px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_8px_30px_-8px_rgba(255,242,0,0.5)] transition-transform duration-300 hover:[transform:perspective(500px)_rotateX(18deg)]"
                >
                  {s.ctaLabel ?? "Book a Demo"}
                </a>
                <a href="#process" className="group inline-flex items-center gap-2 text-sm font-medium text-white">
                  See how it works
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>

            <HeroVisual
              slug={s.slug}
              desktop={s.heroDesktop}
              mobile={s.heroMobile}
              modules={s.features.map((f) => f.title)}
            />
          </div>
        </section>

        {/* 2. What's included */}
        <FeatureStrip features={s.features} />

        {/* 3. How it improves your business */}
        {s.challenges && <ImproveSection name={name} rows={s.challenges} compare={s.compare} />}

        {/* 4. Process */}
        <ProcessTimeline steps={s.process ?? defaultProcess} />

        {/* 5. Who it's for */}
        <IndustryCards industries={s.industries} serviceTitle={s.title} />

        {/* 6. FAQ */}
        <FaqSection faqs={faqs} />

        {/* 7. Other services + contact */}
        <ExploreServices currentSlug={s.slug} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}