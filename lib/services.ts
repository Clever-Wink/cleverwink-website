import { Database, Boxes, Users, Megaphone, Palette, Monitor, type LucideIcon } from "lucide-react";

export type Service = {
  // identity
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string; // one line, used on the home page
  image: string; // card image used on the home page

  // hero
  heading: string;
  highlight?: string; // phrase inside `heading` that gets the yellow marker (must match exactly)
  intro: string;
  ctaLabel?: string;
  heroDesktop?: string; // screenshot shown in the browser window on desktop
  heroMobile?: string; // screenshot shown in the phone frame on mobile and tablet

  // SEO
  metaTitle: string;
  metaDescription: string;

  // page sections
  features: { title: string; text: string; icon?: string; items?: string[] }[]; // What's included
  challenges?: { problem: string; benefit: string }[]; // The difference
  compare?: { before: string; after: string }; // titles of the two panels
  process?: { title: string; text: string }[]; // Our process
  industries: { name: string; text?: string; image?: string }[]; // Who it's for
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  /* ------------------------------ ERP ------------------------------ */
  {
    slug: "erp",
    title: "ERP Solutions",
    icon: Boxes,
    short: "One system that connects your sales, stock, finance and operations.",
    image: "/services/erp.jpeg",

    heading: "ERP Solutions That Connect Every Part of Your Business",
    highlight: "Connect Every Part",
    intro:
      "Bring your sales, purchasing, inventory, finance and operations together in one integrated system. We configure ERP around how your business actually works, so you get clearer visibility, better coordination and less manual work.",
    ctaLabel: "Book an ERP Demo",
    heroDesktop: "/services/hero/erp-desktop.jpg",
    heroMobile: "/services/hero/erp-mobile.jpg",

    metaTitle: "ERP Implementation & Customisation UAE",
    metaDescription:
      "ERP setup, customisation, data migration and integration for UAE businesses. Connect sales, purchasing, inventory, finance and operations.",

    features: [
      { title: "Setup & customisation", icon: "setup", text: "Modules, workflows and approvals configured around how your business actually runs.", items: ["Modules", "Workflows", "Approvals", "User roles"] },
      { title: "Data migration", icon: "data", text: "Move products, customers, suppliers and balances from spreadsheets or your old system, cleaned and checked.", items: ["Products", "Customers", "Suppliers", "Balances"] },
      { title: "Integrations & automation", icon: "integrate", text: "Connect your ERP with your CRM, HRMS, website and other tools, and automate repeat tasks.", items: ["CRM", "HRMS", "Website", "Automation"] },
      { title: "Reports & training", icon: "reports", text: "Dashboards for owners and managers, plus training so your team uses the system properly.", items: ["Dashboards", "Reports", "Team training"] },
    ],
    challenges: [
      { problem: "Business data scattered across spreadsheets and tools", benefit: "One source of truth for sales, stock and accounts" },
      { problem: "Manual data entry and double typing", benefit: "Connected workflows that pass data between teams automatically" },
      { problem: "Difficulty tracking inventory", benefit: "Real-time stock visibility across items and locations" },
      { problem: "Delayed, manual reporting", benefit: "Business reports ready when you need them" },
      { problem: "Approvals chased over chats and email", benefit: "Clear approval workflows, with a record of who approved what" },
    ],
    process: [
      { title: "Discovery & planning", text: "We learn how your business runs today, map your processes and agree the scope, modules and plan." },
      { title: "System configuration", text: "We configure modules, workflows and approvals around your requirements." },
      { title: "Data migration", text: "We clean and organise your existing data, then move it into the new system." },
      { title: "Testing & go-live", text: "We test every workflow with your team, fix what needs fixing, then launch." },
      { title: "Training & support", text: "We train your team and stay on hand after launch while everyone settles in." },
    ],
    industries: [
      { name: "Construction & Engineering", text: "Follow project costs, purchasing and payments so each job stays on budget." },
      { name: "Real Estate", text: "Connect property sales, leasing, customers and finances in one system." },
      { name: "Trading & Distribution", text: "Connect orders, stock, purchasing and invoicing so you always know what you have and what is owed." },
      { name: "Retail", text: "Keep stock, sales and suppliers in sync across your shop and online store." },
      { name: "Manufacturing", text: "Plan materials, track production and keep costs visible from raw stock to finished goods." },
      { name: "Education", text: "Manage admissions, student records and fee collection alongside your accounts." },
      { name: "Professional Services", text: "Connect projects, time, billing and accounts in one system." },
      { name: "Healthcare & Hospitals", text: "Manage patient records, appointments and billing in one connected system." },
      { name: "Accounting", text: "Keep accounts, invoicing and VAT records organised, with real-time financial visibility." },
    ],
    faqs: [
      { q: "What is an ERP system and how can it benefit my business?", a: "An ERP is one system that connects your sales, purchasing, inventory, finance and operations, so everyone works from the same up-to-date data. That means less double entry, clearer visibility of stock and money, and reports you can rely on." },
      { q: "Can ERP software be customised to our business requirements?", a: "Yes. We configure modules, fields, workflows and approvals around how your business actually runs, instead of forcing you to change your process to fit the software." },
      { q: "How long does ERP implementation take?", a: "It depends on how many modules you need, how much data we migrate and how many teams will use the system. We agree the scope and a clear timeline with you before the work starts." },
      { q: "Can you migrate our existing business data?", a: "Yes. We can move products, customers, suppliers and balances from spreadsheets or your current system, clean up duplicates and errors, and check the numbers with you before go-live." },
      { q: "Do you provide employee training and ongoing support?", a: "Yes. We train your team on the workflows they will use every day, and we stay available after go-live to answer questions and fix issues while everyone settles in." },
    ],
  },

  /* ------------------------------ CRM ------------------------------ */
  {
    slug: "crm",
    title: "CRM Solutions",
    icon: Database,
    short: "Set up and customise a CRM that fits how your team sells.",
    image: "/services/crm.jpeg",

    heading: "CRM solutions that keep every lead and customer in one place",
    highlight: "CRM solutions",
    intro:
      "We set up, customise and automate your CRM so leads are captured, followed up and tracked without manual work.",
    ctaLabel: "Book a CRM Demo",
    heroDesktop: "/services/hero/crm-desktop.jpg",
    heroMobile: "/services/hero/crm-mobile.jpg",

    metaTitle: "CRM Setup & Customisation Services",
    metaDescription:
      "CRM setup, customisation, migration and automation for growing businesses. Capture leads, follow up automatically and track your pipeline.",

    features: [
      { title: "Setup & customisation", icon: "setup", text: "Pipelines, fields and views built around your sales process.", items: ["Pipelines", "Custom fields", "Views", "User access"] },
      { title: "Data migration", icon: "data", text: "Move contacts and deals from spreadsheets or your old CRM, cleaned and organised.", items: ["Contacts", "Deals", "Spreadsheets", "Old CRM"] },
      { title: "Lead & follow-up automation", icon: "leads", text: "Leads from forms, ads and WhatsApp are routed and followed up automatically.", items: ["Web forms", "Ads", "WhatsApp", "Follow-ups"] },
      { title: "Reports & training", icon: "reports", text: "Dashboards for your team, plus training so everyone uses the system.", items: ["Dashboards", "Team reports", "Training"] },
    ],
    challenges: [
      { problem: "Leads scattered across WhatsApp, forms and spreadsheets", benefit: "Every lead captured in one place, whatever the source" },
      { problem: "Follow-ups forgotten or sent late", benefit: "Automatic reminders and follow-ups, so no enquiry goes cold" },
      { problem: "No clear view of the sales pipeline", benefit: "A live pipeline showing every deal and its stage" },
      { problem: "Customer history lives in people's heads", benefit: "Full history of every customer, shared with the whole team" },
      { problem: "Reports built by hand", benefit: "Dashboards that show what is working, ready when you need them" },
    ],
    process: [
      { title: "Discovery & planning", text: "We learn how your team finds, follows up and closes customers today, and agree what the CRM needs to do." },
      { title: "CRM setup", text: "We build pipelines, fields, views and user access around your sales process." },
      { title: "Data migration", text: "We clean your contacts and deals and move them in from spreadsheets or your old CRM." },
      { title: "Automation & testing", text: "We set up lead capture and follow-ups, then test each flow with your team before launch." },
      { title: "Training & support", text: "We train your team and stay on hand after go-live so everyone uses the system with confidence." },
    ],
    industries: [
      { name: "Real Estate", text: "Capture enquiries from portals, ads and WhatsApp, and follow up every viewing and deal." },
      { name: "Automotive", text: "Track enquiries, test drives and follow-ups so no vehicle lead goes cold." },
      { name: "Education", text: "Track enquiries, applications and admissions from first contact to enrolment." },
      { name: "Clinics", text: "Manage patient enquiries, appointments and follow-ups without chasing messages." },
      { name: "Gyms & Fitness", text: "Track trials, memberships and renewals, and remind members before they lapse." },
      { name: "Salons & Wellness", text: "Keep client history and bookings in one place, and bring regulars back with timely follow-ups." },
    ],
    faqs: [
      { q: "What is a CRM and how can it help my business?", a: "A CRM keeps every lead, customer and deal in one place, so nothing gets lost and your team always knows who to follow up with next. It gives you a clear view of your pipeline and what is working." },
      { q: "How long does CRM setup take?", a: "It depends on your sales process, how much data we move and how many people will use it. We agree the scope and a clear timeline with you before the work starts." },
      { q: "Can you move our existing contacts and deals into the new CRM?", a: "Yes. We can move contacts and deals from spreadsheets or your current CRM, clean up duplicates and errors, and check the data with you before go-live." },
      { q: "Can the CRM capture leads from our website, ads and WhatsApp?", a: "Yes. We can connect your website forms, ad lead forms and WhatsApp so new enquiries land in the CRM automatically and go to the right person. Tell us your channels and we will confirm what is possible." },
      { q: "Do you train our team and support us after launch?", a: "Yes. We train your team on the workflows they will use every day, and we stay available after go-live to answer questions and fix issues." },
    ],
  },

  /* ----------------------------- HRMS ------------------------------ */
  {
    slug: "hrms",
    title: "HRMS Solutions",
    icon: Users,
    short: "Manage employees, attendance and leave in one system.",
    image: "/services/hrms.jpeg",

    heading: "HRMS that takes the paperwork out of HR",
    highlight: "HRMS ",
    intro:
      "We set up and automate your HR processes, from employee records to leave approvals, so your team spends less time on admin.",
    ctaLabel: "Book an HRMS Demo",
    heroDesktop: "/services/hero/hrms-desktop.jpg",
    heroMobile: "/services/hero/hrms-mobile.jpg",

    metaTitle: "HRMS Setup & HR Automation Services",
    metaDescription:
      "HRMS setup and HR workflow automation: employee records, attendance, leave and onboarding in one system.",

    features: [
      { title: "Employee records", icon: "users", text: "One secure place for employee details and documents.", items: ["Employee details", "Documents"] },
      { title: "Attendance & leave", icon: "calendar", text: "Track attendance and approve leave with simple workflows.", items: ["Attendance", "Leave requests", "Approvals"] },
      { title: "Onboarding", icon: "onboarding", text: "New joiners get forms, access and a welcome message automatically.", items: ["Forms", "Access", "Welcome message"] },
      { title: "HR reports", icon: "reports", text: "Headcount, attendance and leave reports ready when you need them.", items: ["Headcount", "Attendance", "Leave"] },
    ],
    challenges: [
      { problem: "Employee files spread across folders and spreadsheets", benefit: "All records and documents in one secure place" },
      { problem: "Attendance and leave tracked on paper or in chats", benefit: "Simple attendance and leave workflows with clear approvals" },
      { problem: "Onboarding done by hand for every new joiner", benefit: "Forms, access and a welcome message sent automatically" },
      { problem: "HR reports that take hours to put together", benefit: "Headcount, attendance and leave reports ready when you need them" },
      { problem: "Approvals scattered across email and messages", benefit: "Approvals handled in one system, with a record of every decision" },
    ],
    process: [
      { title: "Discovery & planning", text: "We learn how HR works today, from leave rules to approvals, and agree what the system needs to cover." },
      { title: "System setup", text: "We configure employee records, attendance rules, leave types and approval workflows." },
      { title: "Data migration", text: "We clean your employee data and move it into the system from spreadsheets or your old tool." },
      { title: "Testing & go-live", text: "We test each workflow with HR and managers, fix what needs fixing, then launch." },
      { title: "Training & support", text: "We train HR and managers and stay on hand after launch while everyone settles in." },
    ],
    industries: [
      { name: "Construction & Engineering", text: "Track attendance across sites and keep every worker's records and documents in one place." },
      { name: "Hospitality & Restaurants", text: "Manage shifts, attendance and leave for teams that work rotating hours." },
      { name: "Retail", text: "Manage shifts, attendance and leave across branches without paper rosters or chat groups." },
      { name: "Healthcare & Hospitals", text: "Keep staff records, rosters and leave organised for teams that work in shifts." },
      { name: "Manufacturing", text: "Follow attendance and leave across shifts, teams and production lines." },
      { name: "Logistics & Transport", text: "Keep driver and warehouse staff records, attendance and leave in one system." },
    ],
    faqs: [
      { q: "What is an HRMS and what does it include?", a: "An HRMS is one system for employee records, attendance, leave, onboarding and HR reports. We scope it around your needs, so you only get what your team will use." },
      { q: "How long does HRMS setup take?", a: "It depends on how many HR processes you want to cover, how much employee data we move and how many people will use it. We agree the scope and a clear timeline with you before the work starts." },
      { q: "Can you move our existing employee records into the system?", a: "Yes. We can move records from spreadsheets or your current system, clean up errors and check the data with you before go-live." },
      { q: "How do you handle sensitive employee data?", a: "Employee data is sensitive, so we set up user roles so people only see what they need, and we agree with you where the data is stored before we start. Tell us your requirements and we will explain how we handle them." },
      { q: "Do you train our team and support us after launch?", a: "Yes. We train HR and managers on the workflows they will use every day, and we stay available after go-live to answer questions and fix issues." },
    ],
  },

  /* ------------------------ Digital marketing ----------------------- */
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    short: "Reach and win customers with search, social and paid campaigns.",
    image: "/services/digital_marketing.jpeg",

    heading: "Digital marketing that brings the right customers to you",
    highlight: "Digital marketing",
    intro:
      "We plan and run campaigns across search, social media and messaging, and connect them to your CRM so every enquiry is tracked.",
    ctaLabel: "Book a Marketing Call",
    heroDesktop: "/services/hero/digital-marketing-desktop.jpg",
    heroMobile: "/services/hero/digital-marketing-mobile.jpg",

    metaTitle: "Digital Marketing Services",
    metaDescription:
      "SEO, social media, paid ads and email or WhatsApp marketing for growing businesses, connected to your CRM.",

    features: [
      { title: "SEO", icon: "seo", text: "Improve your visibility on Google with technical fixes and useful content.", items: ["Technical fixes", "Content", "Google visibility"] },
      { title: "Social media", icon: "social", text: "Content and campaigns that build your brand where your customers are.", items: ["Content", "Campaigns", "Branding"] },
      { title: "Paid advertising", icon: "ads", text: "Search and social ads set up, tracked and improved over time.", items: ["Search ads", "Social ads", "Tracking"] },
      { title: "Email & WhatsApp campaigns", icon: "message", text: "Messages that reach customers, linked to your CRM so you see the results.", items: ["Email", "WhatsApp", "CRM-linked"] },
    ],
    compare: { before: "Without a clear marketing plan", after: "With CleverWink" },
    challenges: [
      { problem: "Posting without a plan or clear goals", benefit: "A plan built around your customers and your goals" },
      { problem: "Ads running without knowing what works", benefit: "Campaigns tracked from click to enquiry, so you see what pays off" },
      { problem: "Leads from campaigns get lost", benefit: "Enquiries from ads, forms and WhatsApp land in your CRM and are followed up" },
      { problem: "Hard to be found on Google", benefit: "Technical SEO fixes and useful content that improve your visibility" },
      { problem: "Reports full of numbers nobody understands", benefit: "Clear reports showing what worked and what to do next" },
    ],
    process: [
      { title: "Discovery & strategy", text: "We learn your business, customers and goals, then agree which channels make sense for you." },
      { title: "Setup & tracking", text: "We set up accounts and tracking, and connect your forms and WhatsApp to your CRM." },
      { title: "Launch", text: "We publish content, launch campaigns and start the SEO work." },
      { title: "Monitor & optimise", text: "We watch the results and improve targeting, content and budgets as we learn." },
      { title: "Report & plan next steps", text: "We send clear reports on what worked and agree what to do next." },
    ],
    industries: [
      { name: "Real Estate", text: "Bring in property enquiries from search, social and ads, and track every lead through to a viewing." },
      { name: "Clinics", text: "Reach people searching for care nearby and turn enquiries into booked appointments." },
      { name: "Education", text: "Run admissions campaigns that reach parents and students, and track every enquiry." },
      { name: "Retail", text: "Promote offers and new arrivals across social, search and WhatsApp to bring customers in." },
      { name: "Hospitality & Restaurants", text: "Fill tables and bookings with local search, social content and offers that bring guests back." },
      { name: "Gyms & Fitness", text: "Fill classes and memberships with local campaigns, and follow up every trial request." },
    ],
    faqs: [
      { q: "Which digital marketing services do you offer?", a: "We offer SEO, social media, paid advertising, and email and WhatsApp campaigns. We recommend the mix that fits your business and goals instead of selling everything." },
      { q: "Can you guarantee rankings or sales?", a: "No one honestly can. We focus on proven work and clear reporting, so you can see what is working." },
      { q: "Do you manage our social media and ads for us?", a: "Yes. We can plan, create and manage campaigns, or work alongside your in-house team. We agree who does what at the start." },
      { q: "Can you connect campaigns to our CRM?", a: "Yes. We connect your forms, ads and WhatsApp with your CRM so every enquiry is recorded and followed up." },
    ],
  },

  /* --------------------------- Web design --------------------------- */
  {
    slug: "web-design",
    title: "Web Design",
    icon: Monitor,
    short: "Fast, mobile-friendly websites that turn visitors into enquiries.",
    image: "/services/web_designing.jpeg",

    heading: "Websites designed to win trust and generate enquiries",
    highlight: "Websites",
    intro:
      "We design and build modern, fast websites that look professional on every device and are ready for search engines.",
    ctaLabel: "Get a Website Quote",
    heroDesktop: "/services/hero/web-design-desktop.jpg",
    heroMobile: "/services/hero/web-design-mobile.jpg",

    metaTitle: "Web Design & Development Services",
    metaDescription:
      "Professional web design and development: fast, mobile-friendly, SEO-ready websites for growing businesses.",

    features: [
      { title: "Business websites", icon: "globe", text: "Clear, professional sites that explain what you do and make contacting you easy.", items: ["Home", "Services", "About", "Contact"] },
      { title: "Landing pages", icon: "layout", text: "Focused pages for campaigns that turn visitors into enquiries.", items: ["Campaign pages", "Lead forms", "Clear calls to action"] },
      { title: "Redesign & speed", icon: "gauge", text: "Refresh an old site and make it faster and easier to use on phones.", items: ["Fresh design", "Faster loading", "Mobile-friendly"] },
      { title: "SEO-ready build", icon: "seo", text: "Clean structure, fast loading and proper metadata from day one.", items: ["Clean structure", "Fast loading", "Metadata"] },
    ],
    compare: { before: "Without a professional website", after: "With CleverWink" },
    challenges: [
      { problem: "An outdated site that doesn't build trust", benefit: "A modern, professional look that shows visitors who you are" },
      { problem: "Slow pages that are awkward on phones", benefit: "Fast, mobile-first pages that are easy to use anywhere" },
      { problem: "Visitors leave without getting in touch", benefit: "Clear calls to action and contact options on every page" },
      { problem: "A site that search engines struggle to read", benefit: "A clean structure and proper metadata from day one" },
      { problem: "A website that doesn't match your brand", benefit: "A design that reflects your brand consistently across every page" },
    ],
    process: [
      { title: "Discovery & planning", text: "We learn about your business, audience and goals, and agree the pages and features you need." },
      { title: "Design", text: "We design the layout and look of your key pages and share them for your feedback." },
      { title: "Development", text: "We build the site to work on phones, tablets and desktops, and to load quickly." },
      { title: "Testing & launch", text: "We check every page across devices, test speed and SEO basics, then take the site live." },
      { title: "Support & improvements", text: "We stay on hand after launch for fixes, updates and next steps." },
    ],
    industries: [
      { name: "Professional Services", text: "A clear, trustworthy site that explains your services and makes it easy to get in touch." },
      { name: "Real Estate", text: "Property listings and enquiry forms that look great on every device." },
      { name: "Healthcare & Hospitals", text: "Clear information about your doctors and services, with easy appointment enquiries." },
      { name: "Education", text: "Present your programmes and admissions information clearly for parents and students." },
      { name: "Hospitality & Restaurants", text: "Show your menu, location and offers, and make booking or ordering easy." },
      { name: "Retail", text: "Show your products and offers and make it easy for customers to visit or buy." },
    ],
    faqs: [
      { q: "How much does a website cost?", a: "It depends on the number of pages, the features and the content. After a short discovery call, we send a clear quote before any work starts." },
      { q: "How long does it take to build a website?", a: "It depends on the size of the site and how quickly we receive your content and feedback. We agree a clear timeline with you before the work starts." },
      { q: "Will the website be ready for search engines?", a: "Yes. We build with a clean structure, fast loading and proper metadata, so search engines can read it. Rankings also depend on content and competition, so we cannot promise positions." },
      { q: "Can you redesign our existing website?", a: "Yes. We can refresh the design, improve speed and make the site easier to use, while keeping what already works well." },
      { q: "Do you provide support after the website goes live?", a: "Yes. We stay available after launch for fixes and updates, and we can agree ongoing support if you need it." },
    ],
  },

  /* ------------------------ Design & creative ----------------------- */
  {
    slug: "design-creative",
    title: "Design & Creative",
    icon: Palette,
    short: "Graphic design, photography and video that make your brand stand out.",
    image: "/services/design.jpeg",

    heading: "Design and photography that make your brand look professional",
    highlight: "look professional",
    intro:
      "We create the visuals your business needs, from logos and brand material to commercial photography and event video.",
    ctaLabel: "Start a Design Project",
    heroDesktop: "/services/hero/design-creative-desktop.jpg",
    heroMobile: "/services/hero/design-creative-mobile.jpg",

    metaTitle: "Graphic Design, Photography & Video Services",
    metaDescription:
      "Graphic design, commercial photography and event video for businesses in the UAE.",

    features: [
      { title: "Brand Identity", icon: "brand", text: "Logo, colours, typography and brand guidelines.", items: ["Logo", "Colours", "Typography", "Guidelines"] },
      { title: "Graphic Design", icon: "graphic", text: "Brochures, flyers, business cards and marketing materials.", items: ["Brochures", "Flyers", "Business cards", "Marketing materials"] },
      { title: "Social Media Design", icon: "social", text: "Posts, stories, banners and creative templates.", items: ["Posts", "Stories", "Banners", "Templates"] },
      { title: "Photography", icon: "photo", text: "Products, offices, interiors and business photography.", items: ["Products", "Offices", "Interiors", "Business"] },
      { title: "Videography", icon: "video", text: "Promotional videos, corporate videos and event coverage.", items: ["Promotional", "Corporate", "Event coverage"] },
      // { title: "Creative Direction", icon: "direction", text: "Visual concepts, campaign design and brand consistency.", items: ["Visual concepts", "Campaign design", "Brand consistency"] },
    ],
    compare: { before: "Without professional design", after: "With CleverWink" },
    challenges: [
      { problem: "Inconsistent brand identity", benefit: "Consistent brand identity" },
      { problem: "Poor-quality marketing visuals", benefit: "Professional marketing materials" },
      { problem: "Low customer trust", benefit: "Stronger customer perception" },
      { problem: "Unprofessional presentation", benefit: "High-quality visual presentation" },
      { problem: "Weak brand recognition", benefit: "Better brand recognition" },
    ],
    process: [
      { title: "Brief & discovery", text: "We learn about your business, audience and what you need the visuals to do." },
      { title: "Concept & direction", text: "We share a creative direction for your approval before the main work starts." },
      { title: "Creation", text: "We design, shoot or film, following the agreed direction." },
      { title: "Review & refinement", text: "We share drafts for your feedback and refine them with you." },
      { title: "Delivery & support", text: "We deliver the final files in the formats you need and stay on hand for follow-up requests." },
    ],
    industries: [
      { name: "Real Estate", text: "Property photography and brochures that make listings stand out." },
      { name: "Retail", text: "Product photography, packaging graphics and in-store displays that help products sell." },
      { name: "Fashion & Lifestyle", text: "Lookbooks, campaign photography and social content that show your style." },
      { name: "Tourism & Travel", text: "Photography and video that make destinations, tours and stays look as good as they are." },
      { name: "Hospitality & Restaurants", text: "Food, venue and menu visuals that make people want to book a table." },
      { name: "Events & Weddings", text: "Event and wedding video and photography that capture the day, ready to share." },
    ],
    faqs: [
      { q: "What design and creative services do you offer?", a: "We offer brand identity, graphic design, social media design, commercial photography, videography and creative direction. You can book one service or combine them." },
      { q: "Can you refresh our whole brand?", a: "Yes. Share what you have today and we will suggest a plan." },
      { q: "How long does a design or photography project take?", a: "It depends on the scope, from a single graphic to a full brand refresh or a shoot day. We agree a clear timeline with you before the work starts." },
      { q: "Do you provide photography and video for events?", a: "Yes. We cover events such as meetings, weddings and campaigns. Tell us the date and what you need, and we will confirm availability." },
      { q: "Can I request changes to the designs?", a: "Yes. We share drafts for your feedback and refine them with you before final delivery. We agree how many rounds are included when we scope the project." },
    ],
  },
];

export const timelineFaq = {
  q: "How long does a project take?",
  a: "It depends on the scope. We give you a clear estimate after a short discovery call.",
};

export const getService = (slug: string) => services.find((s) => s.slug === slug);