import type { Metadata } from "next";
import { ServicesSection } from "@/components/organisms/ServicesSection/ServicesSection";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/services",
  title: "Home Inspection Services in Houston",
  description: `Structural, electrical, HVAC, plumbing, and appliance home inspections in Kingwood and Greater Houston from ${SITE.name}.`,
});

export default function ServicesPage() {
  return <ServicesSection />;
}
