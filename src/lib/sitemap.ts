import type { MetadataRoute } from "next";
import { SERVICE_AREAS } from "@/lib/service-areas";
import { SERVICES } from "@/lib/services";
import { getSiteUrl } from "@/lib/site";

const STATIC_PATHS = [
  "/",
  "/about/",
  "/services/",
  "/service-areas/",
  "/preferred-vendors/",
  "/contact/",
  "/privacy/",
] as const;

export function getSitemapPaths(): string[] {
  const servicePaths = SERVICES.map((service) => `/services/${service.slug}/`);
  const serviceAreaPaths = SERVICE_AREAS.map(
    (area) => `/service-areas/${area.slug}/`,
  );
  const servicesIndex = STATIC_PATHS.indexOf("/services/");
  const serviceAreasIndex = STATIC_PATHS.indexOf("/service-areas/");

  return [
    ...STATIC_PATHS.slice(0, servicesIndex + 1),
    ...servicePaths,
    ...STATIC_PATHS.slice(servicesIndex + 1, serviceAreasIndex + 1),
    ...serviceAreaPaths,
    ...STATIC_PATHS.slice(serviceAreasIndex + 1),
  ];
}

export function getSitemapEntries(siteUrl = getSiteUrl()): MetadataRoute.Sitemap {
  return getSitemapPaths().map((path) => ({
    url: new URL(path, `${siteUrl}/`).toString(),
  }));
}
