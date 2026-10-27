
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

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cleverwink.ae/",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
