import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { getSiteUrl } from "@/lib/site";

const STATIC_PATHS = [
  "/",
  "/about/",
  "/services/",
  "/preferred-vendors/",
  "/contact/",
  "/privacy/",
] as const;

export function getSitemapPaths(): string[] {
  const servicePaths = SERVICES.map((service) => `/services/${service.slug}/`);
  const servicesIndex = STATIC_PATHS.indexOf("/services/");

  return [
    ...STATIC_PATHS.slice(0, servicesIndex + 1),
    ...servicePaths,
    ...STATIC_PATHS.slice(servicesIndex + 1),
  ];
}

export function getSitemapEntries(siteUrl = getSiteUrl()): MetadataRoute.Sitemap {
  return getSitemapPaths().map((path) => ({
    url: new URL(path, `${siteUrl}/`).toString(),
  }));
}
