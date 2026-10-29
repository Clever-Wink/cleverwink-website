import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CLEVER WINK",
  description:
    "How CLEVER WINK collects, uses and protects your personal data when you visit our website or contact us.",
  alternates: { canonical: "/privacy-policy" },
};

const EFFECTIVE_DATE = "29 October 2026";
const EMAIL = "info@cleverwink.ae";

type Section = { title: string; content: React.ReactNode };

const sections: Section[] = [
  {
    title: "1. Who we are",
    content: (
      <p>
        This website is operated by CLEVER WINK LLC (&quot;CLEVER WINK&quot;,
        &quot;we&quot;, &quot;us&quot;), a company licensed and based in the
        United Arab Emirates. We provide CRM, HRMS, digital marketing and web
        design services with automation built in. For this website, we are the
        data controller of the personal data described in this policy. You can
        reach us at{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    ),
  },
  {
    title: "2. What information we collect",
    content: (
      <>
        <p>We collect only what we need to respond to you and run the site.</p>
        <ul>
          <li>
            <strong>Information you give us.</strong> When you fill in the
            contact form or email us, we receive your name, email address,
            phone number, company name (if provided), the service you are
            interested in, and the contents of your message.
          </li>
          <li>
            <strong>Technical information.</strong> When you visit, our
            hosting and security systems automatically record your IP address,
            browser type, device type, operating system, pages visited and the
            date and time of your visit.
          </li>
          <li>
            <strong>Cookies and similar technologies.</strong> See section 6.
          </li>
        </ul>
        <p>
          We do not knowingly collect sensitive personal data through this
          website, and we ask that you do not send it to us.
        </p>
      </>
    ),
  },
  {
    title: "3. How we use your information",
    content: (
      <ul>
        <li>To reply to your enquiries and prepare quotes or proposals.</li>
        <li>
          To provide the services you request and to manage our relationship
          with you if you become a client.
        </li>
        <li>
          To keep the website secure, prevent spam and abuse, and fix technical
          problems.
        </li>
        <li>
          To understand how the site is used so we can improve its content and
          performance.
        </li>
        <li>To comply with our legal and regulatory obligations.</li>
      </ul>
    ),
  },
  {
    title: "4. Our legal basis for processing",
    content: (
      <p>
        We process personal data on the basis of your consent (for example,
        when you submit the contact form), where it is necessary to take steps
        at your request before entering into a contract or to perform a
        contract, where we are required to by UAE law, and for our legitimate
        interest in operating and securing our business, provided this does
        not override your rights. You may withdraw your consent at any time by
        contacting us.
      </p>
    ),
  },
  {
    title: "5. Who we share it with",
    content: (
      <>
        <p>We do not sell your personal data. We share it only with:</p>
        <ul>
          <li>
            <strong>Service providers</strong> that help us run the website
            and our business, such as our hosting provider (Vercel), our email
            delivery provider (Resend) and our business email and domain
            providers. They may only use your data to provide their services
            to us.
          </li>
          <li>
            <strong>Professional advisers</strong>, such as accountants and
            lawyers, where needed.
          </li>
          <li>
            <strong>Authorities</strong>, where we are required to do so by
            law or to protect our rights.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Cookies",
    content: (
      <p>
        This website uses only the cookies and similar technologies needed to
        make it work and keep it secure. If we add analytics or marketing
        cookies in future, we will ask for your consent where required and
        update this policy. You can block or delete cookies in your browser
        settings, although some parts of the site may not work properly.
      </p>
    ),
  },
  {
    title: "7. Transfers outside the UAE",
    content: (
      <p>
        Some of our service providers store or process data on servers outside
        the UAE. Where this happens, we take steps to make sure your data
        remains protected, such as using providers with appropriate security
        and contractual safeguards, in line with UAE data protection law.
      </p>
    ),
  },
  {
    title: "8. How long we keep your data",
    content: (
      <p>
        We keep enquiry details for as long as needed to respond to you and,
        if you become a client, for the duration of our relationship and the
        period we are required to keep business records under UAE law.
        Enquiries that do not lead to a project are deleted within a
        reasonable time, normally within 24 months. After that, we delete or
        anonymise the data.
      </p>
    ),
  },
  {
    title: "9. How we protect your data",
    content: (
      <p>
        We use reasonable technical and organisational measures to protect
        your personal data, including encrypted connections (HTTPS), access
        controls and the use of reputable providers. No method of transmission
        or storage is completely secure, so we cannot guarantee absolute
        security. If a breach affecting your data occurs, we will notify the
        authorities and you where the law requires.
      </p>
    ),
  },
  {
    title: "10. Your rights",
    content: (
      <>
        <p>Under UAE data protection law you have the right to:</p>
        <ul>
          <li>request access to the personal data we hold about you;</li>
          <li>ask us to correct inaccurate or incomplete data;</li>
          <li>ask us to delete your data or restrict its processing;</li>
          <li>object to processing, including direct marketing;</li>
          <li>withdraw your consent at any time;</li>
          <li>
            request a copy of your data in a portable format, where applicable.
          </li>
        </ul>
        <p>
          To exercise any of these rights, email us at{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We may need to verify your
          identity first and will respond within a reasonable time. If you are
          not satisfied with our response, you may contact the UAE Data Office.
        </p>
      </>
    ),
  },
  {
    title: "11. Marketing messages",
    content: (
      <p>
        We only send marketing emails or messages if you have asked for them or
        you are an existing client. Every message will include a way to opt
        out, and you can also tell us at any time to stop.
      </p>
    ),
  },
  {
    title: "12. Children",
    content: (
      <p>
        Our website and services are intended for businesses and are not
        directed at children. We do not knowingly collect personal data from
        anyone under 18. If you believe a child has sent us their data, please
        contact us and we will delete it.
      </p>
    ),
  },
  {
    title: "13. Links to other websites",
    content: (
      <p>
        Our website may link to third-party websites and social media
        platforms such as Instagram and LinkedIn. We are not responsible for
        their content or privacy practices, so please read their policies.
      </p>
    ),
  },
  {
    title: "14. Changes to this policy",
    content: (
      <p>
        We may update this policy from time to time. The latest version will
        always be on this page, with the effective date shown at the top. If
        we make significant changes, we will make that clear on the website.
      </p>
    ),
  },
  {
    title: "15. Contact us",
    content: (
      <p>
        If you have questions about this policy or how we handle your data,
        contact CLEVER WINK LLC at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        {/* TODO: add registered address here, e.g. ", [Office address], United Arab Emirates" */}
        .
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-neutral-500">
          Effective date: {EFFECTIVE_DATE}
        </p>
        <p className="mt-8 leading-relaxed">
          Your privacy matters to us. This policy explains what personal data
          CLEVER WINK collects through this website, why we collect it, how we
          use and protect it, and the choices and rights you have.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-semibold text-white">{s.title}</h2>
              <div className="policy-body mt-3 space-y-3 leading-relaxed [&_a]:text-[#FFF200] [&_a]:underline-offset-4 hover:[&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_ul]:space-y-2 [&_strong]:text-white">
                {s.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}