import Link from "next/link";
import type { ReactNode } from "react";

// Fill these in before you deploy.
export const COMPANY = {
  name: "CLEVER WINK",
  email: "info@cleverwink.ae",
  website: "https://cleverwink.ae",
  licenseNo: "[Trade license number]",
  address: "Sharjah Media City, Sharjah, United Arab Emirates",
  emirate: "Sharjah",
  effectiveDate: "30 October 2026",
};

export type LegalSection = {
  id: string;
  title: string;
  body: ReactNode;
};

export function P({ children }: { children: ReactNode }) {
  return <p className="leading-7 text-neutral-300">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc space-y-2 pl-6 leading-7 text-neutral-300 marker:text-[#FFF200]">
      {children}
    </ul>
  );
}

export function LegalLayout({
  title,
  intro,
  sections,
  otherPage,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
  otherPage: { href: string; label: string };
}) {
  return (
    <main className="min-h-screen bg-black text-neutral-200">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded text-sm text-neutral-400 transition-colors hover:text-[#FFF200] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FFF200]"
        >
          <span aria-hidden>&larr;</span> Back to {COMPANY.name}
        </Link>

        <header className="mt-10 max-w-3xl border-b border-neutral-800 pb-10">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-[#FFF200]">
            Effective {COMPANY.effectiveDate}
          </p>
          <p className="mt-6 text-lg leading-8 text-neutral-300">{intro}</p>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
          <nav aria-label="On this page" className="hidden lg:block">
            <ul className="sticky top-10 space-y-3 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="rounded text-neutral-400 transition-colors hover:text-[#FFF200] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFF200]"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-3xl space-y-12">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-10 space-y-4">
                <h2 className="text-2xl font-semibold text-white">{s.title}</h2>
                {s.body}
              </section>
            ))}

            <div className="border-t border-neutral-800 pt-8 text-sm text-neutral-400">
              Also read our{" "}
              <Link
                href={otherPage.href}
                className="text-[#FFF200] underline underline-offset-4 hover:no-underline"
              >
                {otherPage.label}
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}