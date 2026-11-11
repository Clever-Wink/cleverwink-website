// import type { Metadata } from "next";
// import { Inter, IBM_Plex_Mono, Geist } from "next/font/google";
// import "./globals.css";
// import { cn } from "@/lib/utils";

// const geist = Geist({subsets:['latin'],variable:'--font-sans'});

// const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-inter" });
// const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: "400", variable: "--font-plex" });

// export const metadata: Metadata = {
//   title: "CLEVER WINK — CRM Automation",
//   description: "We automate your CRM so your team can focus on closing.",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" className={cn("dark", inter.variable, plex.variable, "font-sans", geist.variable)}>
//       <body className="bg-ink font-sans font-light text-white antialiased">{children}</body>
//     </html>
//   );
// }


import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono,Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-inter" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: "400", variable: "--font-plex" });

const title = "CLEVER WINK | Business Automation & Digital Marketing UAE";
const description =
    "Clever Wink delivers ERP, CRM and HRMS solutions, website development and business automation services for businesses across the UAE.";  
    
  export const metadata: Metadata = {
    metadataBase: new URL("https://cleverwink.ae"),
    title: { default: title, template: "%s | CLEVER WINK" },
    description,
    alternates: { canonical: "/" },
    icons: {
      icon: [ 
        // { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png", },
        { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png", }, ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png", },  ],
      },
    openGraph: { type: "website", siteName: "CLEVER WINK", url: "/", title, description, locale: "en_AE" },
    twitter: { card: "summary_large_image", title, description },
};


const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://cleverwink.ae/#organization",
  name: "CLEVER WINK",
  url: "https://cleverwink.ae/",
  logo: "https://cleverwink.ae/icon.png",
  description,
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  sameAs: [
  "https://www.linkedin.com/company/clever-wink-llc",
  "https://www.instagram.com/cleverwink.ae/",
],
};


export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark", inter.variable, plex.variable, "font-sans", geist.variable)}>
      <body className="bg-ink font-sans font-light text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}</body>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
    </html>
  );
}