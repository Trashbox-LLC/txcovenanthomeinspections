import { SITE } from "@/lib/constants";
import { SERVICE_AREAS } from "@/lib/service-areas";
import { getSiteUrl, SITE_DESCRIPTION } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export function SiteJsonLd() {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${siteUrl}/#business`,
    name: SITE.name,
    url: `${siteUrl}/`,
    telephone: "+1-832-470-5230",
    email: SITE.email,
    image: `${siteUrl}/images/hero.webp`,
    description: SITE_DESCRIPTION,
    priceRange: "$$",
    identifier: {
      "@type": "PropertyValue",
      name: "TREC License",
      value: SITE.trecId,
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kingwood",
      addressRegion: "TX",
      addressCountry: "US",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Inspection Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: `${service.title} Inspection`,
          description: service.shortDescription,
          url: `${siteUrl}/services/${service.slug}/`,
          areaServed: SITE.location,
          provider: {
            "@id": `${siteUrl}/#business`,
          },
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
