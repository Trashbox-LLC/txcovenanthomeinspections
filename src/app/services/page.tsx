import type { Metadata } from "next";
import { ServicesSection } from "@/components/organisms/ServicesSection/ServicesSection";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/services",
  title: "Services",
  description: `Explore home inspection services from ${SITE.name} — structural, electrical, HVAC, plumbing, and appliance inspections in the ${SITE.location}.`,
});

export default function ServicesPage() {
  return <ServicesSection />;
}
