export interface ServiceGalleryItem {
  label: string;
  image: string;
  imageAlt: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  overview: string;
  detailParagraphs: string[];
  gallery: ServiceGalleryItem[];
}

export const SERVICES: Service[] = [
  {
    slug: "structural",
    title: "Structural",
    shortDescription:
      "Comprehensive evaluation of the foundation, framing, and load-bearing systems.",
    image: "/images/services/roofing.webp",
    imageAlt: "Roof and structural components inspected during a home inspection",
    overview:
      "A home's structure is what everything else depends on. I inspect the foundation, framing, roof structure, and other load-bearing components to identify signs of movement, damage, or deterioration that could affect safety and long-term value.",
    detailParagraphs: [
      "A home's structure is what everything else depends on. I inspect the foundation, framing, roof structure, and other load-bearing components to identify signs of movement, damage, or deterioration that could affect safety and long-term value.",
      "Foundation walls, slabs, and crawlspaces are carefully examined for signs of settlement, cracking, or moisture intrusion. Roof structure, flashing, and attic framing are evaluated to identify conditions that could lead to water damage or structural stress.",
      "Exterior masonry, siding transitions, and window openings are reviewed for separation, seal failure, and other defects that can compromise the building envelope. These details often reveal movement or drainage issues that are not obvious from a casual walkthrough.",
      "Signs of settlement, sagging, or structural stress are documented along with visible wood-destroying organism damage. The goal is to give you a clear picture of structural condition before you buy, sell, or plan repairs.",
    ],
    gallery: [
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
    ],
  },
  {
    slug: "electrical",
    title: "Electrical",
    shortDescription:
      "Detailed review of panels, wiring, outlets, and safety compliance.",
    image: "/images/services/electrical.webp",
    imageAlt: "Electrical panel inspected during a home inspection",
    overview:
      "Electrical problems pose serious safety risks. I inspect the main service panel, branch circuits, and visible wiring to identify hazards, outdated components, and code concerns that could affect your family's safety.",
    detailParagraphs: [
      "Electrical problems pose serious safety risks. I inspect the main service panel, branch circuits, and visible wiring to identify hazards, outdated components, and code concerns that could affect your family's safety.",
      "Main panels and sub-panels are evaluated for proper labeling, grounding, bonding, and signs of overheating or improper modifications. Service equipment and utility connections are reviewed when accessible.",
      "Branch circuit wiring, outlet placement, and GFCI protection are checked throughout the home. Visible conductor conditions, double-tapping, and other workmanship concerns are documented for your review.",
      "Safety devices, grounding systems, and generator or backup power equipment are assessed to help you understand whether the electrical system is serviceable and safe for everyday use.",
    ],
    gallery: [
      {
        label: "Generator & Utility Panel",
        image: "/images/services/electrical_page/generator-utility-panel.webp",
        imageAlt: "Generator and electrical meter mounted on an exterior wall",
      },
      {
        label: "Panel Interior Wiring",
        image: "/images/services/electrical_page/panel-interior-wiring.webp",
        imageAlt: "Branch circuit wiring inside an electrical panel",
      },
      {
        label: "Main Breaker Connections",
        image: "/images/services/electrical_page/main-breaker-connections.webp",
        imageAlt: "Main breaker and service conductor connections",
      },
    ],
  },
  {
    slug: "hvac",
    title: "HVAC",
    shortDescription:
      "Assessment of heating, cooling, ductwork, and ventilation performance.",
    image: "/images/services/hvac.webp",
    imageAlt:
      "Outdoor HVAC unit with rooftop fans inspected during a home inspection",
    overview:
      "Comfort and air quality depend on properly functioning HVAC systems. I evaluate heating and cooling equipment, ductwork, thermostats, and ventilation to help you understand system condition, performance, and potential repair needs.",
    detailParagraphs: [
      "Comfort and air quality depend on properly functioning HVAC systems. I evaluate heating and cooling equipment, ductwork, thermostats, and ventilation to help you understand system condition, performance, and potential repair needs.",
      "Heating and cooling equipment is checked for basic operation, visible installation issues, and signs of deferred maintenance. Air handlers, furnaces, and condensers are reviewed when accessible.",
      "Ductwork, supply registers, return paths, and attic ventilation are examined for leaks, restrictions, and proper termination. Ridge vents and other roof-level ventilation components are evaluated as part of the whole system.",
      "Thermostat controls, temperature differential, and indoor air quality accessories such as filtration or purification equipment are noted so you know how the system is performing and what may need attention.",
    ],
    gallery: [
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
    ],
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    shortDescription:
      "Thorough evaluation of pipes, fixtures, water heaters, and drainage systems.",
    image: "/images/services/plumbing.webp",
    imageAlt: "Plumbing pipes and fixtures during a home inspection",
    overview:
      "Water damage and plumbing failures are among the most costly issues a homeowner can face. My plumbing inspection covers the full water supply and waste systems so you know exactly what condition they are in before you buy or maintain your home.",
    detailParagraphs: [
      "Water damage and plumbing failures are among the most costly issues a homeowner can face. My plumbing inspection covers the full water supply and waste systems so you know exactly what condition they are in before you buy or maintain your home.",
      "Visible supply and drain lines, shut-off valves, and fixture connections are reviewed for leaks, corrosion, and improper materials. Bathrooms, kitchens, and utility areas receive focused attention.",
      "Water heaters are evaluated for age, condition, relief valve installation, and venting. Temperature and pressure relief discharge piping is checked for safe routing and proper support.",
      "Fixtures, faucets, tubs, showers, and drainage performance are tested to identify slow drains, failed seals, and other issues that can lead to moisture damage behind walls or under cabinets.",
    ],
    gallery: [
      {
        label: "Bathroom Fixtures",
        image: "/images/services/plumbing_page/bathroom-fixtures.webp",
        imageAlt: "Bathroom tub, shower, and toilet fixtures",
      },
      {
        label: "Water Heater Valve",
        image: "/images/services/plumbing_page/water-heater-valve.webp",
        imageAlt: "Temperature and pressure relief valve on a water heater",
      },
      {
        label: "Sink Seal Condition",
        image: "/images/services/plumbing_page/sink-seal-condition.webp",
        imageAlt: "Staining at the seam between a sink and countertop",
      },
      {
        label: "Tub Spout Seal",
        image: "/images/services/plumbing_page/tub-spout-seal.webp",
        imageAlt: "Mineral buildup around a tub spout escutcheon",
      },
    ],
  },
  {
    slug: "appliances",
    title: "Appliances",
    shortDescription:
      "Operational checks of built-in and included kitchen and laundry appliances.",
    image: "/images/services/appliances.webp",
    imageAlt:
      "Modern gas cooktop with a lit burner during an appliance inspection",
    overview:
      "Appliances are a major part of daily home function. I test built-in and included appliances for basic operation so you know whether key equipment is working as expected before closing or moving in.",
    detailParagraphs: [
      "Appliances are a major part of daily home function. I test built-in and included appliances for basic operation so you know whether key equipment is working as expected before closing or moving in.",
      "Kitchen appliances including ranges, ovens, cooktops, dishwashers, and garbage disposals are checked for basic function and visible installation concerns. Gas appliances are evaluated for proper ignition and safe operation.",
      "Laundry appliances and dryer vent connections are reviewed when included with the sale. Exhaust routing, vent materials, and termination are important safety items that are documented during the inspection.",
      "Refrigerators, built-in microwaves, and other included equipment are noted for operation and visible defects so you can plan for repairs or replacements before move-in.",
    ],
    gallery: [
      {
        label: "Exhaust Vent Penetration",
        image: "/images/services/appliances_page/exhaust-vent-penetration.webp",
        imageAlt: "Exhaust vent pipe penetration sealed in an attic space",
      },
      {
        label: "Garbage Disposal",
        image: "/images/services/appliances_page/garbage-disposal.webp",
        imageAlt: "Garbage disposal unit installed under a kitchen sink",
      },
      {
        label: "Dryer Vent Connection",
        image: "/images/services/appliances_page/dryer-vent-connection.webp",
        imageAlt: "Flexible dryer vent duct behind a laundry appliance",
      },
      {
        label: "Gas Range Operation",
        image: "/images/services/appliances_page/gas-range-operation.webp",
        imageAlt: "Gas range burners operating on a kitchen cooktop",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((service) => service.slug);
}

export function isServicesPath(pathname: string): boolean {
  return pathname === "/services" || pathname.startsWith("/services/");
}
