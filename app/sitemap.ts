import type { MetadataRoute } from "next";
import { siteUrl } from "./site-config";

const routes = ["", "/about", "/services", "/projects", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
