import { SITE } from "@/lib/constants";
import { getSiteUrl, SITE_DESCRIPTION } from "@/lib/site";

export function SiteJsonLd() {
  const siteUrl = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    url: `${siteUrl}/`,
    telephone: "+1-832-470-5230",
    email: SITE.email,
    image: `${siteUrl}/images/hero.webp`,
    areaServed: SITE.location,
    description: SITE_DESCRIPTION,
    identifier: `TREC ${SITE.trecId}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
