
import type { MetadataRoute } from "next";

const baseUrl = "https://cleverwink.ae";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/services",
    "/services/crm",
    "/contact",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    changeFrequency: "monthly",
    priority: page === "" ? 1 : 0.8,
  }));
}
