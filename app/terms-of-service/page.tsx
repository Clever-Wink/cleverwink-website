import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, LegalLayout, P, UL, type LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Terms of Service | CLEVER WINK",
  description:
    "The terms that apply when you use the CLEVER WINK website and when you enquire about our services.",
  alternates: { canonical: "/terms-of-service" },
};

const mail = (
  <a
    href={`mailto:${COMPANY.email}`}
    className="text-[#FFF200] underline underline-offset-4 hover:no-underline"
  >
    {COMPANY.email}
  </a>
);

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Accepting these terms",
    body: (
      <P>
        By using {COMPANY.website} you agree to these terms. If you do not agree,
        please do not use the site. These terms cover the website and your
        enquiries. Paid work is covered by a separate written agreement or
        proposal that we both accept.
      </P>
    ),
  },
  {
    id: "about-us",
    title: "About us and our services",
    body: (
      <P>
        {COMPANY.name} provides software and
        systems design, web design, CRM and HRMS solutions, digital marketing,
        social media and online advertising, graphic design and related creative
        services. The website describes these services in general terms. Details
        such as scope, price and timeline are set out in a written proposal.
      </P>
    ),
  },
  {
    id: "enquiries",
    title: "Enquiries, quotes and contracts",
    body: (
      <UL>
        <li>Sending an enquiry does not create a contract between us.</li>
        <li>
          A quote or proposal is valid for the period stated in it. A contract
          exists only once both sides have accepted it in writing, including by
          email.
        </li>
        <li>
          Payment terms, deadlines, revisions and ownership of delivered work
          are defined in that agreement.
        </li>
      </UL>
    ),
  },
  {
    id: "using-the-site",
    title: "Using the website",
    body: (
      <>
        <P>You agree not to:</P>
        <UL>
          <li>Break any UAE law or use the site for anything unlawful</li>
          <li>Send spam, malware or anything that could harm the site or other users</li>
          <li>Try to access parts of the site or our systems that you are not meant to reach</li>
          <li>Scrape, copy or resell our content without our written permission</li>
          <li>Give us false details or pretend to be someone else</li>
        </UL>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <>
        <P>
          The site, including its text, design, logo, graphics and code, belongs
          to {COMPANY.name} or its licensors and is protected by UAE and
          international intellectual property laws. You may view and share links
          to the site, but you may not copy or reuse our content or branding
          without permission.
        </P>
        <P>
          Ownership of work we create for a client is decided in that client&apos;s
          agreement. Unless the agreement says otherwise, we keep ownership of
          our tools, templates and know-how.
        </P>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Third-party links and tools",
    body: (
      <P>
        The site may link to other websites or rely on third-party services. We
        do not control them and are not responsible for their content or
        practices. Our{" "}
        <Link
          href="/privacy-policy"
          className="text-[#FFF200] underline underline-offset-4 hover:no-underline"
        >
          Privacy Policy
        </Link>{" "}
        explains which providers handle your data.
      </P>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: (
      <P>
        We work to keep the site accurate and available, but we provide it &quot;as
        is&quot;. We do not promise that it will be uninterrupted, error-free or
        always up to date. Information on the site is general and is not
        professional advice.
      </P>
    ),
  },
  {
    id: "liability",
    title: "Limit of liability",
    body: (
      <P>
        To the extent UAE law allows, {COMPANY.name} is not liable for indirect or
        consequential loss, or for loss of profit, revenue or data, arising from
        your use of the website. Nothing in these terms excludes liability that
        cannot be excluded under UAE law. Liability for paid services is
        governed by the agreement for those services.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes to the site and these terms",
    body: (
      <P>
        We may change or remove parts of the site, and we may update these terms.
        The effective date at the top shows the latest version. If you keep using
        the site after a change, you accept the updated terms.
      </P>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <P>
        These terms are governed by the laws of the United Arab Emirates as
        applied in the Emirate of {COMPANY.emirate}. The courts of{" "}
        {COMPANY.emirate} have jurisdiction over any dispute, unless we agree
        another arrangement in writing.
      </P>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <P>
        Questions about these terms? Email {mail} or write to {COMPANY.name},{" "}
        {COMPANY.address}.
      </P>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      intro="These terms explain the rules for using our website and how enquiries turn into work with us."
      sections={sections}
      otherPage={{ href: "/privacy-policy", label: "Privacy Policy" }}
    />
  );
}