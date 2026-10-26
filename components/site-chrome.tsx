"use client";
import { useState } from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import Image from "next/image";
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
  // { name: "Facebook", icon: FaFacebookF, href: "#" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-ink/100 py-5">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 md:px-0">
        <a href="#top" aria-label="CLEVER WINK home" className="flex items-center">
          <Image src="/CLEVER-WINK.png" alt="CLEVER WINK" width={5843} height={1713} priority className="h-10 w-auto md:h-16" />
        </a>
        <div className="hidden gap-2 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="px-3 text-[13px] font-medium uppercase tracking-[0.05em] text-fog transition-colors hover:text-white">{label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden rounded-lg bg-signal px-3.5 py-3 text-sm transition hover:-translate-y-0.5 sm:block text-ink font-medium">Book a Demo</a>
          <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="p-2 md:hidden">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 px-6 pb-4 pt-2 md:hidden">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block py-3 text-sm font-medium uppercase tracking-[0.05em] text-mist">{label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-3 block rounded-lg bg-signal px-4 py-3 text-center text-m text-ink">Book a Demo</a>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 pb-10 pt-16">
      <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Image src="/clever-wink-logo.webp" alt="CLEVER WINK" width={5413} height={1245} className="h-10 w-auto md:h-12" />
          <p className="mt-3 max-w-xs text-sm text-mist">Automation that handles the repetitive work, in a wink.</p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-fog">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            {links.map(([l, h]) => (<li key={h}><a href={h} className="hover:text-white">{l}</a></li>))}
          </ul>
        </div>
        <div>
  <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-fog">Contact</p>
  <ul className="mt-4 space-y-2 text-sm text-mist">
    <li><a href="mailto:hello@cleverwink.com" className="hover:text-white">info@cleverwink.com</a></li>
    {/* <li><a href="tel:+000000000000" className="hover:text-white">+00 000 000 0000</a></li> */}
  </ul>
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
      <p className="mx-auto mt-12 max-w-[1200px] text-xs text-fog">© 2026 CLEVER WINK. All rights reserved.</p>
    </footer>
  );
}
