import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | CLEVER WINK",
  description:
    "The terms that apply when you use the CLEVER WINK website and contact us through it.",
  alternates: { canonical: "/terms-of-use" },
};

const EFFECTIVE_DATE = "29 October 2026";
const EMAIL = "info@cleverwink.ae";

type Section = { title: string; content: React.ReactNode };

const sections: Section[] = [
  {
    title: "1. About these terms",
    content: (
      <p>
        These Terms of Use apply to your use of this website, operated by
        CLEVER WINK LLC (&quot;CLEVER WINK&quot;, &quot;we&quot;,
        &quot;us&quot;). By accessing or using the website, you agree to these
        terms. If you do not agree, please do not use the website. Our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> explains how we
        handle personal data and forms part of these terms.
      </p>
    ),
  },
  {
    title: "2. Information only, not an offer",
    content: (
      <p>
        The content on this website, including descriptions of services,
        examples, pricing guidance and timelines, is for general information.
        It is not a binding offer. Any project with us is governed by a written
        quote, proposal or service agreement that we both accept. If that
        agreement conflicts with these terms, the agreement prevails for that
        project.
      </p>
    ),
  },
  {
    title: "3. Acceptable use",
    content: (
      <>
        <p>When using this website, you agree not to:</p>
        <ul>
          <li>break any UAE law or regulation, or use the site for unlawful purposes;</li>
          <li>
            submit false, misleading or abusive information, or impersonate
            another person or business;
          </li>
          <li>
            send spam or unsolicited advertising through our contact form or
            email addresses;
          </li>
          <li>
            attempt to gain unauthorised access to the site, our systems or
            other users&apos; data, or interfere with its security or
            operation;
          </li>
          <li>
            introduce malware, or use bots, scrapers or automated tools to
            copy or overload the site without our written permission.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Intellectual property",
    content: (
      <>
        <p>
          All content on this website, including text, graphics, logos, the
          CLEVER WINK name and owl logo, the &quot;BEYOND THE EXPECTED&quot;
          tagline, images, designs and code, belongs to CLEVER WINK or its
          licensors and is protected by UAE and international intellectual
          property laws.
        </p>
        <p>
          You may view and print pages for your own personal or internal
          business use. You may not copy, reproduce, modify, distribute or use
          any content for commercial purposes without our prior written
          consent.
        </p>
      </>
    ),
  },
  {
    title: "5. Portfolio and client work",
    content: (
      <p>
        Names, logos and examples of client work shown on the site belong to
        their respective owners and are shown with permission to illustrate
        our services. Their appearance does not imply endorsement of any
        third party by us, or of us by them, beyond what is stated.
      </p>
    ),
  },
  {
    title: "6. Enquiries and communications",
    content: (
      <p>
        When you contact us through the website, you agree that we may reply
        using the details you provide. Sending an enquiry does not create a
        client relationship or oblige either of us to enter into a contract.
        Please do not send confidential or sensitive information through the
        contact form until we have agreed to work together.
      </p>
    ),
  },
  {
    title: "7. Third-party links",
    content: (
      <p>
        The website may contain links to third-party websites and social media
        platforms. These are provided for convenience. We do not control them
        and are not responsible for their content, availability or privacy
        practices. Visiting them is at your own risk.
      </p>
    ),
  },
  {
    title: "8. Availability and changes",
    content: (
      <p>
        We try to keep the website available and accurate, but we do not
        guarantee that it will always be uninterrupted, error-free or up to
        date. We may change, suspend or remove any part of the website, or
        update these terms, at any time without notice.
      </p>
    ),
  },
  {
    title: "9. Disclaimer",
    content: (
      <p>
        The website and its content are provided &quot;as is&quot; and &quot;as
        available&quot;. To the fullest extent permitted by UAE law, we make no
        warranties, express or implied, about the accuracy, completeness or
        suitability of the content for your particular needs. Nothing on this
        website is professional legal, financial or tax advice.
      </p>
    ),
  },
  {
    title: "10. Limitation of liability",
    content: (
      <p>
        To the fullest extent permitted by UAE law, CLEVER WINK is not liable
        for any indirect or consequential loss, loss of profit, loss of data
        or business interruption arising from your use of, or inability to
        use, this website or reliance on its content. Nothing in these terms
        excludes or limits liability that cannot be excluded or limited under
        applicable law.
      </p>
    ),
  },
  {
    title: "11. Governing law and disputes",
    content: (
      <p>
        These terms are governed by the laws of the United Arab Emirates as
        applied in the Emirate of{" "}
        {/* TODO: confirm emirate of licence, e.g. Dubai / Sharjah / Abu Dhabi */}
        [Emirate]. We will first try to resolve any dispute in good faith by
        contacting us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. If it cannot
        be resolved, the courts of that Emirate have jurisdiction.
      </p>
    ),
  },
  {
    title: "12. Contact us",
    content: (
      <p>
        Questions about these terms can be sent to CLEVER WINK LLC at{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    ),
  },
];

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-black text-neutral-300">
      <div className="mx-auto max-w-3xl px-5 py-24 sm:px-6 sm:py-28">
        <Link
          href="/"
          className="text-sm text-neutral-400 transition-colors hover:text-[#FFF200]"
        >
          ← Back to home
        </Link>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-neutral-500">
          Effective date: {EFFECTIVE_DATE}
        </p>
        <p className="mt-8 leading-relaxed">
          Please read these terms carefully before using the CLEVER WINK
          website.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-semibold text-white">{s.title}</h2>
              <div className="mt-3 space-y-3 leading-relaxed [&_a]:text-[#FFF200] [&_a]:underline-offset-4 hover:[&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_ul]:space-y-2 [&_strong]:text-white">
                {s.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}