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

    const electrical = getServiceBySlug("electrical");

    expect(electrical?.gallery).toEqual([
      {
        label: "Electrical Fixtures",
        image: "/images/services/electrical_page/electrical-fixtures.webp",
        imageAlt: "Pendant light fixtures hanging in a residential hallway",
      },
      {
        label: "Branch Circuits & Connected Devices",
        image:
          "/images/services/electrical_page/branch-circuits-and-connected-devices.webp",
        imageAlt: "Electrical outlet cover plate not flush with the wall",
      },
      {
        label: "Service Entrance & Panel",
        image: "/images/services/electrical_page/service-entrance-and-panel.webp",
        imageAlt: "Open electrical service panel with breakers and wiring",
      },
    ]);

    const hvac = getServiceBySlug("hvac");

    expect(hvac?.gallery).toEqual([
      {
        label: "Plumbing Supply, Distribution Systems & Fixtures",
        image:
          "/images/services/hvac_page/plumbing-supply-distribution-systems-and-fixtures.webp",
        imageAlt: "Exterior hose bib and plumbing fixture on a brick wall",
      },
      {
        label: "Water Heating Equipment",
        image: "/images/services/hvac_page/water-heating-equipment.webp",
        imageAlt: "Gas water heater installed in an unfinished attic",
      },
      {
        label: "Drains, Waste & Vents",
        image: "/images/services/hvac_page/drains-waste-and-vents.webp",
        imageAlt: "PVC drain piping and water-damaged wood in a crawlspace",
      },
      {
        label: "Gas Distribution Systems & Appliances",
        image:
          "/images/services/hvac_page/gas-distribution-systems-and-appliances.webp",
        imageAlt: "Residential natural gas meter and distribution piping",
      },
      {
        label: "Cooling Equipment",
        image: "/images/services/hvac_page/cooling-equipment.webp",
        imageAlt: "Outdoor air conditioning condenser unit beside a home",
      },
      {
        label: "Duct Systems, Chases & Vents",
        image: "/images/services/hvac_page/duct-systems-chases-and-vents.webp",
        imageAlt: "Flexible HVAC ductwork routed through attic framing",
      },
      {
        label: "Heating Equipment",
        image: "/images/services/hvac_page/heating-equipment.webp",
        imageAlt: "Interior of a gas furnace showing burners and controls",
      },
    ]);

    const appliances = getServiceBySlug("appliances");

    expect(appliances?.gallery).toEqual([
      {
        label: "Mechanical Exhaust Vents",
        image: "/images/services/appliances_page/exhaust-vent-penetration.webp",
        imageAlt: "Exhaust vent pipe penetration sealed in an attic space",
      },
      {
        label: "Garbage Disposals",
        image: "/images/services/appliances_page/garbage-disposal.webp",
        imageAlt: "Garbage disposal unit installed under a kitchen sink",
      },
      {
        label: "Dryer Exhaust Systems",
        image: "/images/services/appliances_page/dryer-vent-connection.webp",
        imageAlt: "Flexible dryer vent duct behind a laundry appliance",
      },
      {
        label: "Ranges, Cooktops, & Ovens",
        image: "/images/services/appliances_page/gas-range-operation.webp",
        imageAlt: "Gas range burners operating on a kitchen cooktop",
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
