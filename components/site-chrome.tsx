"use client";
import { useEffect, useRef, useState } from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services";

const links = [
  ["About", "/#about"],
  ["Services", "/#services"],
  ["Our Team", "/#team"],
  ["Testimonials", "/#testimonials"],
  ["Contact", "/#contact"],
];
const socials = [
  { name: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/company/clever-wink-llc" },
  { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/cleverwink.ae/" },
];

/* Desktop "Services" item with a dropdown listing every service */
function ServicesMenu({ href }: { href: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // close after navigating to another page
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center">
        <a
          href={href}
          className="pl-3 pr-1 text-[13px] font-medium uppercase tracking-[0.05em] text-fog transition-colors hover:text-white"
        >
          Services
        </a>
        <button
          type="button"
          aria-label="Show services"
          aria-haspopup="true"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid size-6 place-items-center text-fog transition-colors hover:text-white"
        >
          <ChevronDown className={`size-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* the top padding keeps the hover area connected to the label */}
      <div
        className={`absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-4 transition-all duration-200 ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-white/10 bg-neutral-950 p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)]">
          <ul>
            {services.map((s) => {
              const active = pathname === `/services/${s.slug}`;
              return (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center gap-3 rounded-xl p-2.5 outline-none transition-colors hover:bg-white/5 focus-visible:bg-white/5"
                  >
                    {/* <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-signal/15 bg-signal/10 text-signal transition-transform duration-300 group-hover:scale-110">
                      <s.icon className="size-[18px]" strokeWidth={1.5} />
                    </span> */}
                    <span className={`flex-1 text-sm font-medium ${active ? "text-signal" : "text-white"}`}>
                      {s.title}
                    </span>
                    <ArrowUpRight className="size-4 -translate-x-1 text-signal opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" />
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/#services"
            className="mt-1 flex items-center justify-between rounded-xl border-t border-white/10 px-3 py-3 text-xs font-medium uppercase tracking-[0.08em] text-arc transition-colors hover:bg-white/5"
          >
            View all services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const pathname = usePathname();

  // on the home page and the service pages, the contact form is on the same page
  const contactHref = pathname === "/" || pathname.startsWith("/services") ? "#contact" : "/#contact";

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-ink/100 py-5">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-0">
        <Link
          href="/"
          aria-label="CLEVER WINK home"
          className="flex shrink-0 items-center"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault(); // already home: just scroll up to the hero
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <Image
            src="/CLEVER-WINK.png"
            alt="CLEVER WINK"
            width={5843}
            height={1713}
            priority
            className="h-10 w-auto md:h-16"
          />
        </Link>

        <div className="flex items-center gap-8 lg:gap-12">
          {/* Desktop navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            {links.map(([label, href]) =>
              label === "Services" ? (
                <ServicesMenu key={href} href={href} />
              ) : (
                <a
                  key={href}
                  href={href}
                  className="px-3 text-[13px] font-medium uppercase tracking-[0.05em] text-fog transition-colors hover:text-white"
                >
                  {label}
                </a>
              ),
            )}
          </nav>

          {/* Button + mobile menu toggle */}
          <div className="flex items-center gap-3">
            <a
              href={contactHref}
              className="hidden rounded-lg bg-signal px-3.5 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5 sm:block"
            >
              Book a Demo
            </a>

            <button
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="p-2 md:hidden"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 px-6 pb-4 pt-2 md:hidden">
          {links.map(([label, href]) =>
            label === "Services" ? (
              <div key={href}>
                <div className="flex items-center justify-between">
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block flex-1 py-3 text-sm font-medium uppercase tracking-[0.05em] text-mist"
                  >
                    {label}
                  </a>
                  <button
                    type="button"
                    aria-label="Show services"
                    aria-expanded={mobileServices}
                    onClick={() => setMobileServices((v) => !v)}
                    className="p-2 text-mist"
                  >
                    <ChevronDown
                      className={`size-4 transition-transform duration-300 ${mobileServices ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                {mobileServices && (
                  <ul className="mb-2 ml-1 space-y-1 border-l border-white/10 pl-4">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          onClick={() => setOpen(false)}
                          className={`flex items-center gap-3 py-2 text-sm ${
                            pathname === `/services/${s.slug}` ? "text-signal" : "text-mist"
                          }`}
                        >
                          <s.icon className="size-4 text-signal" strokeWidth={1.5} />
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium uppercase tracking-[0.05em] text-mist"
              >
                {label}
              </a>
            ),
          )}
          <a
            href={contactHref}
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-lg bg-signal px-4 py-3 text-center text-m text-ink"
          >
            Book a Demo
          </a>
        </div>
      )}
    </nav>
  );
}


import { MapPin, Mail } from "lucide-react";

// Keep your existing links and socials arrays.

const serviceLinks = [
  { label: "ERP Solutions", href: "/services/erp" },
  { label: "CRM Solutions", href: "/services/crm" },
  { label: "HRMS Solutions", href: "/services/hrms" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Web Design", href: "/services/web-design" },
  { label: "Design & Creative", href: "/services/design-creative" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 pb-10 pt-16">
      <div className="mx-auto grid max-w-[1350px] gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1.3fr_1.3fr]">

        {/* Company */}
        <div>
          <Image
            src="/clever-wink-logo.webp"
            alt="CLEVER WINK - Business Solutions UAE"
            width={5413}
            height={1245}
            className="h-10 w-auto md:h-12"
          />

          <p className="mt-3 max-w-xs text-sm text-mist">
            Automation that handles the repetitive work, in a wink.
          </p>
        </div>

        {/* Explore */}
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-arc">
            Explore
          </p>

          <ul className="mt-4 space-y-2 text-sm text-mist">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition hover:text-white">
                  {label}
                </a>
              </li>
            ))}

            <li>
              <Link href="/careers" className="transition hover:text-white">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-arc">
            Services
          </p>

          <ul className="mt-4 space-y-2 text-sm text-mist">
            {serviceLinks.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="transition hover:text-white"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-arc">
            Contact
          </p>

          <ul className="mt-4 space-y-4 text-sm text-mist">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-fog" />
              <span>
                Sharjah Media City
                <br />
                Sharjah, UAE
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-fog" />
              <a
                href="mailto:info@cleverwink.ae"
                className="transition hover:text-white"
              >
                info@cleverwink.ae
              </a>
            </li>
          </ul>

          {/* Social Links */}
          <div className="mt-6 flex gap-3">
            {socials.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="grid size-10 place-items-center rounded-full border border-fog/50 text-mist transition hover:border-signal hover:bg-signal hover:text-ink"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-12 flex max-w-[1350px] flex-col gap-3 border-t border-white/10 pt-6 text-xs text-fog sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 CLEVER WINK. All rights reserved.</p>

        <ul className="flex gap-5">
          <li>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
          </li>

          <li>
            <Link href="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
