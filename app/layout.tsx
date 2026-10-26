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

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-inter" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: "400", variable: "--font-plex" });

const title = "CLEVER WINK | Business Automation & Digital Marketing UAE";
const description =
    "UAE-based team building CRM, ERP and HRMS systems, websites and digital marketing. Practical technology that makes business easier.";  
    
  export const metadata: Metadata = {
    metadataBase: new URL("https://cleverwink.ae"),
    title: { default: title, template: "%s | CLEVER WINK" },
    description,
    alternates: { canonical: "/" },
    openGraph: { type: "website", siteName: "CLEVER WINK", url: "/", title, description, locale: "en_AE" },
    twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark", inter.variable, plex.variable, "font-sans", geist.variable)}>
      <body className="bg-ink font-sans font-light text-white antialiased">{children}</body>
    </html>
  );
}