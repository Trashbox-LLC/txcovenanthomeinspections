import { render } from "@testing-library/react";
import { SiteJsonLd } from "./SiteJsonLd";
import { SERVICE_AREAS } from "@/lib/service-areas";

describe("SiteJsonLd", () => {
  it("marks the apex URL as the business website", () => {
    const { container } = render(<SiteJsonLd />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.textContent ?? "{}") as {
      url: string;
      name: string;
    };

    expect(data.name).toBe("Texas Covenant Home Inspections");
    expect(data.url).toBe("https://txcovenanthomeinspections.com/");
  });

  it("publishes local business schema with service cities", () => {
    const { container } = render(<SiteJsonLd />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.textContent ?? "{}") as {
      "@type": string[];
      areaServed: Array<{ name: string }>;
      address: { addressLocality: string; addressRegion: string };
      hasOfferCatalog: { itemListElement: unknown[] };
    };

    expect(data["@type"]).toEqual([
      "LocalBusiness",
      "HomeAndConstructionBusiness",
    ]);
    expect(data.address).toEqual({
      "@type": "PostalAddress",
      addressLocality: "Kingwood",
      addressRegion: "TX",
      addressCountry: "US",
    });
    expect(data.areaServed.map((area) => area.name)).toEqual(
      SERVICE_AREAS.map((area) => area.name),
    );
    expect(data.hasOfferCatalog.itemListElement).toHaveLength(5);
  });
});
