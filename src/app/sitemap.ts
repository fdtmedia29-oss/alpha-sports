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
    "/preise",
    "/ueber-uns",
    "/erfolgsgeschichten",
    "/kostenloses-beratungsgespraech",
    "/kostenloses-beratungsgespraech/buchen",
    "/impressum",
    "/agb",
    "/datenschutz",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/preise" ? 0.9 : 0.8,
  }));
}
