import {
  getAllServiceSlugs,
  getServiceBySlug,
  SERVICES,
} from "./services";

describe("services", () => {
  it("returns a service by slug", () => {
    const service = getServiceBySlug("plumbing");
    expect(service?.title).toBe("Plumbing");
    expect(service?.image).toBe("/images/services/plumbing.webp");
  });

  it("uses the appliances image for the appliances service", () => {
    const service = getServiceBySlug("appliances");
    expect(service?.image).toBe("/images/services/appliances.webp");
  });

  it("uses the hvac image for the hvac service", () => {
    const service = getServiceBySlug("hvac");
    expect(service?.image).toBe("/images/services/hvac.webp");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getServiceBySlug("roofing")).toBeUndefined();
  });

  it("lists all service slugs in display order", () => {
    expect(getAllServiceSlugs()).toEqual([
      "structural",
      "electrical",
      "hvac",
      "plumbing",
      "appliances",
    ]);
  });

  it("defines the five core inspection services", () => {
    expect(SERVICES.map((service) => service.title)).toEqual([
      "Structural",
      "Electrical",
      "HVAC",
      "Plumbing",
      "Appliances",
    ]);
  });

  it("defines gallery cards with webp images for each service", () => {
    const structural = getServiceBySlug("structural");

    expect(structural?.gallery).toEqual([
      {
        label: "Drainage",
        image: "/images/services/structural_page/drainage.webp",
        imageAlt: "Drainage and grading condition at a foundation corner",
      },
      {
        label: "Doors & Windows",
        image: "/images/services/structural_page/doors-and-windows.webp",
        imageAlt: "Damaged door jamb and strike plate from forced entry or impact",
      },
      {
        label: "Interior & Exterior Walls",
        image:
          "/images/services/structural_page/interior-and-exterior-walls.webp",
        imageAlt: "Level used to check a cracked interior wall for movement",
      },
      {
        label: "Stairways",
        image: "/images/services/structural_page/stairways.webp",
        imageAlt: "Handrail pulled away from the wall at the top of a stairway",
      },
      {
        label: "Ceilings & Floors",
        image: "/images/services/structural_page/ceilings-and-floors.webp",
        imageAlt: "Crack running across tiled flooring",
      },
      {
        label: "Fireplaces & Chimneys",
        image: "/images/services/structural_page/fireplaces-and-chimneys.webp",
        imageAlt: "Chimney and roof vent on an asphalt shingle roof",
      },
      {
        label: "Porches, Balconies, Decks & Carports",
        image:
          "/images/services/structural_page/porches-balconies-decks-and-carports.webp",
        imageAlt: "Exterior wooden porch stairs, railing, and deck structure",
      },
      {
        label: "Roof Structure & Attic",
        image: "/images/services/structural_page/roof-structure-and-attic.webp",
        imageAlt: "Attic framing, insulation, and access hatch",
      },
      {
        label: "Roof Covering Materials",
        image: "/images/services/structural_page/roof-covering-materials.webp",
        imageAlt: "Aerial view of asphalt shingle roof covering materials",
      },
      {
        label: "Grading",
        image: "/images/services/structural_page/grading.webp",
        imageAlt: "Grading and soil conditions along a foundation wall",
      },
    ]);

    for (const service of SERVICES) {
      expect(service.gallery.length).toBeGreaterThan(0);
      for (const item of service.gallery) {
        expect(item.image).toMatch(/\.webp$/);
      }
    }
  });

  it("defines detail paragraphs for each service", () => {
    for (const service of SERVICES) {
      expect(service.detailParagraphs.length).toBeGreaterThanOrEqual(3);
    }
  });
});
