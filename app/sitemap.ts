
// import type { MetadataRoute } from "next";
// import { services } from "@/lib/services";

// const baseUrl = "https://cleverwink.ae";

// export default function sitemap(): MetadataRoute.Sitemap {
//   const pages = [
//     "",
//     "/about",
//     "/services",
//     // "/services/crm",
//     "/contact",
//     ...services.map((s) => `/services/${s.slug}`),
//   ];

//   return pages.map((page) => ({
//     url: `${baseUrl}${page}`,
//     changeFrequency: "monthly",
//     priority: page === "" ? 1 : 0.8,
//   }));
// }


import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

const baseUrl = "https://cleverwink.ae";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/` },
    // one entry per service page, generated from services.ts
    ...services.map((s) => ({ url: `${baseUrl}/services/${s.slug}` })),
    { url: `${baseUrl}/careers` },
    { url: `${baseUrl}/privacy-policy` },
    { url: `${baseUrl}/terms-of-service` },
  ];
}
// import type { MetadataRoute } from "next";

// const base = "https://cleverwink.ae";

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
//     { url: `${base}/services/crm`, changeFrequency: "monthly", priority: 0.8 },
//     { url: `${base}/services/erp`, changeFrequency: "monthly", priority: 0.8 },
//     {
//       url: `${base}/privacy-policy`,
//       lastModified: new Date("2026-10-30"),
//       changeFrequency: "yearly",
//       priority: 0.3,
//     },
//     {
//       url: `${base}/terms-of-service`,
//       lastModified: new Date("2026-10-30"),
//       changeFrequency: "yearly",
//       priority: 0.3,
//     },
//   ];
// }