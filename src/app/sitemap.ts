import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://mahdi-blackout.github.io/artemis-website";

const routes = ["", "/about", "/services", "/portfolio", "/studio", "/artists", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
