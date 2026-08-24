import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alpha-sports.ch";

  const routes = [
    "",
    "/personal-training",
    "/online-coaching",
    "/ernaehrungsberatung",
    "/analysen",
    "/gruppenkurse",
    "/hyrox",
    "/race",
    "/preise",
    "/ueber-uns",
    "/erfolgsgeschichten",
    "/faq",
    "/kostenloses-beratungsgespraech",
    "/kostenloses-beratungsgespraech/buchen",
    "/impressum",
    "/agb",
    "/datenschutz",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/race" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/race" || route === "/preise" ? 0.9 : 0.8,
  }));
}
