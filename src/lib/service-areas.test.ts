import {
  getAllServiceAreaSlugs,
  getServiceAreaBySlug,
  SERVICE_AREAS,
} from "./service-areas";

describe("service-areas", () => {
  it("lists the Greater Houston cities we target for local SEO", () => {
    expect(SERVICE_AREAS.map((area) => area.slug)).toEqual([
      "kingwood",
      "humble",
      "atascocita",
      "spring",
      "the-woodlands",
      "houston",
      "conroe",
      "tomball",
      "katy",
      "cypress",
      "sugar-land",
      "pearland",
      "pasadena",
      "fulshear",
      "magnolia",
      "porter",
    ]);
  });

  it("returns a service area by slug", () => {
    const area = getServiceAreaBySlug("katy");

    expect(area?.name).toBe("Katy");
    expect(area?.state).toBe("TX");
    expect(area?.headline).toMatch(/home inspector/i);
    expect(area?.description.length).toBeGreaterThan(80);
    expect(area?.paragraphs.length).toBeGreaterThanOrEqual(2);
    expect(area?.neighborhoods.length).toBeGreaterThan(0);
  });

  it("returns undefined for an unknown slug", () => {
    expect(getServiceAreaBySlug("dallas")).toBeUndefined();
  });

  it("lists all service area slugs in display order", () => {
    expect(getAllServiceAreaSlugs()).toEqual(
      SERVICE_AREAS.map((area) => area.slug),
    );
  });

  it("gives each city unique copy so pages are not doorway duplicates", () => {
    const descriptions = SERVICE_AREAS.map((area) => area.description);
    const headlines = SERVICE_AREAS.map((area) => area.headline);

    expect(new Set(descriptions).size).toBe(SERVICE_AREAS.length);
    expect(new Set(headlines).size).toBe(SERVICE_AREAS.length);
  });
});
