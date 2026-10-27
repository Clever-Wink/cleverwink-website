import { Database, Boxes, Users, Megaphone, Palette, Monitor, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  heading: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  features: { title: string; text: string }[];
  industries: string[];
  faqs: { q: string; a: string }[];
  
};

// PLACEHOLDER CONTENT: edit everything to match what you really offer.
export const services: Service[] = [
  {
  slug: "erp",
  title: "ERP Solutions",
  icon: Boxes,
  short: "One system that connects your sales, stock, finance and operations.",
  image: "/services/erp.jpeg",
  heading: "ERP solutions that run your whole business from one system",
  intro: "We set up, customise and connect an ERP so your sales, purchasing, inventory and accounts work from the same data, not separate spreadsheets.",
  metaTitle: "ERP Setup & Customisation Services",
  metaDescription: "ERP setup, customisation, data migration and integration for growing businesses. Connect sales, inventory, purchasing and accounts in one system.",
  features: [
    { title: "Setup & customisation", text: "Modules, workflows and approvals configured around how your business actually runs." },
    { title: "Data migration", text: "Move products, customers, suppliers and balances from spreadsheets or your old system, cleaned and checked." },
    { title: "Integrations & automation", text: "Connect your ERP with your CRM, HRMS, website and other tools, and automate repeat tasks." },
    { title: "Reports & training", text: "Dashboards for owners and managers, plus training so your team uses the system properly." },
  ],
  industries: ["Trading & distribution", "Retail", "Manufacturing", "Construction & contracting", "Professional services"],
  faqs: [
    { q: "Which ERP do you work with?", a: "We can work with popular platforms or help you choose one that fits your size and budget. Tell us what you use today, or what you need it to do." },
    { q: "Can the ERP connect to our CRM and HRMS?", a: "Yes. We connect your systems so customer, sales and staff data is not entered twice." },
    { q: "How long does an ERP project take?", a: "It depends on how many modules and how much data you have. We agree the scope and the plan with you before we start." },
  ],
},
  {
    slug: "crm",
    title: "CRM Solutions",
    icon: Database,
    short: "Set up and customise a CRM that fits how your team sells.",
    image: "/services/crm.jpeg",
    heading: "CRM solutions that keep every lead and customer in one place",
    intro: "We set up, customise and automate your CRM so leads are captured, followed up and tracked without manual work.",
    metaTitle: "CRM Setup & Customisation Services",
    metaDescription: "CRM setup, customisation, migration and automation for growing businesses. Capture leads, follow up automatically and track your pipeline.",
    features: [
      { title: "Setup & customisation", text: "Pipelines, fields and views built around your sales process." },
      { title: "Data migration", text: "Move contacts and deals from spreadsheets or your old CRM, cleaned and organised." },
      { title: "Lead & follow-up automation", text: "Leads from forms, ads and WhatsApp are routed and followed up automatically." },
      { title: "Reports & training", text: "Dashboards for your team, plus training so everyone uses the system." },
    ],
    industries: ["Real estate", "Gyms & fitness", "Salons & wellness", "Clinics", "Education"],
    faqs: [
      { q: "Which CRM do you work with?", a: "We can work with popular platforms or help you choose one that fits your team and budget. Tell us what you use today." },
    ],
  },
  {
    slug: "hrms",
    title: "HRMS Solutions",
    icon: Users,
    short: "Manage employees, attendance and leave in one system.",
    image: "/services/hrms.jpeg",

    heading: "HRMS that takes the paperwork out of HR",
    intro: "We set up and automate your HR processes, from employee records to leave approvals, so your team spends less time on admin.",
    metaTitle: "HRMS Setup & HR Automation Services",
    metaDescription: "HRMS setup and HR workflow automation: employee records, attendance, leave and onboarding in one system.",
    features: [
      { title: "Employee records", text: "One secure place for employee details and documents." },
      { title: "Attendance & leave", text: "Track attendance and approve leave with simple workflows." },
      { title: "Onboarding", text: "New joiners get forms, access and a welcome message automatically." },
      { title: "HR reports", text: "Headcount, attendance and leave reports ready when you need them." },
    ],
    industries: ["Retail", "Healthcare", "Hospitality", "Education", "Startups & SMEs"],
    faqs: [
      { q: "Does it include payroll?", a: "We scope the HRMS around your needs. Share your payroll requirements on the demo call and we will confirm what is included." },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    short: "Reach and win customers with search, social and paid campaigns.",
    image: "/services/digital_marketing.jpeg",

    heading: "Digital marketing that brings the right customers to you",
    intro: "We plan and run campaigns across search, social media and messaging, and connect them to your CRM so every enquiry is tracked.",
    metaTitle: "Digital Marketing Services",
    metaDescription: "SEO, social media, paid ads and email or WhatsApp marketing for growing businesses, connected to your CRM.",
    features: [
      { title: "SEO", text: "Improve your visibility on Google with technical fixes and useful content." },
      { title: "Social media", text: "Content and campaigns that build your brand where your customers are." },
      { title: "Paid advertising", text: "Search and social ads set up, tracked and improved over time." },
      { title: "Email & WhatsApp campaigns", text: "Messages that reach customers, linked to your CRM so you see the results." },
    ],
    industries: ["Real estate", "Restaurants & cafes", "Retail & e-commerce", "Education", "Clinics & wellness"],
    faqs: [
      { q: "Can you guarantee rankings or sales?", a: "No one honestly can. We focus on proven work and clear reporting, so you can see what is working." },
    ],
  },
  {
    slug: "web-design",
    title: "Web Design",
    icon: Monitor,
    short: "Fast, mobile-friendly websites that turn visitors into enquiries.",
    image: "/services/web_designing.jpeg",
    heading: "Websites designed to win trust and generate enquiries",
    intro: "We design and build modern, fast websites that look professional on every device and are ready for search engines.",
    metaTitle: "Web Design & Development Services",
    metaDescription: "Professional web design and development: fast, mobile-friendly, SEO-ready websites for growing businesses.",
    features: [
      { title: "Business websites", text: "Clear, professional sites that explain what you do and make contacting you easy." },
      { title: "Landing pages", text: "Focused pages for campaigns that turn visitors into enquiries." },
      { title: "Redesign & speed", text: "Refresh an old site and make it faster and easier to use on phones." },
      { title: "SEO-ready build", text: "Clean structure, fast loading and proper metadata from day one." },
    ],
    industries: ["Professional services", "Real estate", "Restaurants", "Education", "Clinics & wellness"],
    faqs: [
      { q: "Will my website work on mobile?", a: "Yes. Every site we build is designed mobile-first and tested on phones, tablets and desktops." },
    ],
  },
  {
  slug: "design-creative",
  title: "Design & Creative",
  icon: Palette,
  image: "/services/design.jpeg",
  short: "Graphic design, photography and video that make your brand stand out.",
  heading: "Design and photography that make your brand look professional",
  intro: "We create the visuals your business needs, from logos and brand material to commercial photography and event video.",
  metaTitle: "Graphic Design, Photography & Video Services",
  metaDescription: "Graphic design, commercial photography and event video for businesses in the UAE.",
  features: [
    { title: "Graphic design", text: "Logos, brand material, social media graphics and print designs." },
    { title: "Commercial photography", text: "Product, real estate, fashion and tourism photography." },
    { title: "Video", text: "Event and promotional videos for meetings, weddings and campaigns." },
    { title: "Visual merchandising", text: "Display and styling ideas that make your space and products stand out." },
  ],
  industries: ["Real estate", "Retail", "Tourism", "Restaurants", "Events"],
  faqs: [
    { q: "Can you refresh our whole brand?", a: "Yes. Share what you have today and we will suggest a plan." },
  ],
}
];

export const timelineFaq = {
  q: "How long does a project take?",
  a: "It depends on the scope. We give you a clear estimate after a short discovery call.",
};

export const getService = (slug: string) => services.find((s) => s.slug === slug);