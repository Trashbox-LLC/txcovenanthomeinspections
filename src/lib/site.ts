import type { Metadata } from "next";
import { HERO_IMAGE, SITE } from "@/lib/constants";

const DEFAULT_SITE_URL = "https://txcovenanthomeinspections.com";

export const SITE_DESCRIPTION =
  "Professional home inspections in the Greater Houston Area. Inspecting with integrity, serving with purpose.";

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configured) {
    return DEFAULT_SITE_URL;
  }

  return configured.replace(/\/+$/, "");
}

export function canonicalPath(pathname: string): string {
  if (pathname === "" || pathname === "/") {
    return "/";
  }

  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;

  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

function openGraphTitle(title: Metadata["title"]): string {
  if (typeof title === "string") {
    return title;
  }

  if (title && "absolute" in title && title.absolute) {
    return title.absolute;
  }

  return SITE.name;
}

export function pageMetadata({
  path,
  title,
  description,
  image = HERO_IMAGE,
}: {
  path: string;
  title: NonNullable<Metadata["title"]>;
  description: string;
  image?: string;
}): Metadata {
  const canonical = canonicalPath(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: openGraphTitle(title),
      description,
      url: canonical,
      images: [{ url: image, alt: SITE.name }],
    },
  };
}

export function getRootMetadata(): Metadata {
  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: SITE.name,
      template: `%s | ${SITE.name}`,
    },
    description: SITE_DESCRIPTION,
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: SITE.name,
      images: [{ url: HERO_IMAGE, alt: SITE.name }],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
