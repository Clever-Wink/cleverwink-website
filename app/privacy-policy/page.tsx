import type { Metadata } from "next";
import { COMPANY, LegalLayout, P, UL, type LegalSection } from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | CLEVER WINK",
  description:
    "How CLEVER WINK collects, uses and protects your personal data, and the rights you have over it.",
  alternates: { canonical: "/privacy-policy" },
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
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <P>
          {COMPANY.name} is a business based in the United Arab Emirates. We build software and systems, websites,
          CRM and HRMS solutions, and run digital marketing and design work for
          other businesses. This policy explains how we handle personal data
          when you use {COMPANY.website} or contact us.
        </P>
        <P>
          We are the data controller for the data described here. You can reach
          us at {mail}.
        </P>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <P>We collect only what we need to respond to you and run the site.</P>
        <UL>
          <li>
            <strong className="text-white">Details you give us.</strong> When you
            use the contact form or email us, we receive your name, email
            address, phone number (if you provide it) and your message.
          </li>
          <li>
            <strong className="text-white">Technical data.</strong> Our hosting
            provider logs basic information such as your IP address, browser,
            device type and the pages you request. We use this to keep the site
            secure and working.
          </li>
          <li>
            <strong className="text-white">Cookies.</strong> See the cookies
            section below.
          </li>
        </UL>
        <P>
          We do not ask for sensitive data through the site. Please do not
          include things like ID numbers or payment card details in your
          message.
        </P>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use your data",
    body: (
      <UL>
        <li>To reply to your enquiry and send you proposals or quotes</li>
        <li>To provide and manage services you have asked us for</li>
        <li>To keep the website secure and fix technical problems</li>
        <li>To meet legal, tax and accounting obligations</li>
        <li>
          To send you updates about our services, only if you have agreed to
          receive them. You can opt out at any time.
        </li>
      </UL>
    ),
  },
  {
    id: "legal-basis",
    title: "Why we are allowed to use it",
    body: (
      <P>
        We process your data based on your consent (for example, when you submit
        the contact form), because it is needed to take steps toward or carry out
        a contract with you, because the law requires it, or for our legitimate
        interest in running a secure business site, in line with the UAE Federal
        Decree-Law No. 45 of 2021 on the Protection of Personal Data (PDPL). You
        can withdraw consent at any time by contacting us.
      </P>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <P>We do not sell your personal data. We share it only with providers that help us run the site and our business:</P>
        <UL>
          <li>
            <strong className="text-white">Resend</strong>, which delivers the
            emails sent from our contact form
          </li>
          <li>
            <strong className="text-white">Vercel</strong>, which hosts this
            website
          </li>
          <li>
            Professional advisers, regulators or authorities, where we are
            legally required to
          </li>
        </UL>
        <P>
          These providers may only use your data to provide their service to us.
        </P>
      </>
    ),
  },
  {
    id: "transfers",
    title: "Transfers outside the UAE",
    body: (
      <P>
        Our providers may store or process data on servers outside the UAE. When
        that happens, we rely on providers that apply appropriate safeguards, and
        we only transfer data where the PDPL allows it.
      </P>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <P>
        We keep enquiry data for as long as it takes to deal with your request
        and any work that follows, and after that only as long as we need it for
        legal, tax or accounting reasons. When we no longer need it, we delete or
        anonymise it.
      </P>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <P>Under the PDPL you can ask us to:</P>
        <UL>
          <li>Confirm whether we hold your data and give you a copy</li>
          <li>Correct data that is wrong or incomplete</li>
          <li>Delete your data, or restrict how we use it</li>
          <li>Stop using your data for a particular purpose</li>
          <li>Move your data to another provider, where this applies</li>
          <li>Withdraw consent you gave earlier</li>
        </UL>
        <P>
          Email {mail} and tell us what you need. We may ask you to confirm your
          identity first. If you are not happy with our response, you can
          complain to the UAE Data Office.
        </P>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <P>
        This site uses only the cookies and similar storage needed to make it
        work. If we add analytics or marketing tools later, we will ask for your
        consent first and update this policy.
      </P>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <P>
        We use HTTPS and access controls to protect your data. No online service
        is completely secure, so we cannot guarantee absolute security. If a
        breach puts your rights at risk, we will notify you and the authorities
        as the law requires.
      </P>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <P>
        Our services are for businesses and are not aimed at anyone under 18. We
        do not knowingly collect data from children. If you think a child has
        sent us data, contact us and we will delete it.
      </P>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <P>
        We may update this policy from time to time. The effective date at the
        top shows when it last changed. If we make a significant change, we will
        say so on the site.
      </P>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <P>
        {COMPANY.name}, {COMPANY.address}. Email {mail}.
      </P>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="This policy explains what personal data we collect through our website, why we collect it, and the choices you have."
      sections={sections}
      otherPage={{ href: "/terms-of-service", label: "Terms of Service" }}
    />
  );
}