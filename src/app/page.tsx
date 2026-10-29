import type { Metadata } from "next";
import { HeroSection } from "@/components/organisms/HeroSection/HeroSection";
import { CTASection } from "@/components/organisms/CTASection/CTASection";
import { InspectionJourneySection } from "@/components/organisms/InspectionJourneySection/InspectionJourneySection";
import { ServiceAreasSection } from "@/components/organisms/ServiceAreasSection/ServiceAreasSection";
import { ServicesSection } from "@/components/organisms/ServicesSection/ServicesSection";
import { WhyChooseSection } from "@/components/organisms/WhyChooseSection/WhyChooseSection";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: {
    absolute: `Home Inspector in Kingwood & Greater Houston | ${SITE.name}`,
  },
  description: `TREC-licensed home inspections in Kingwood, Humble, Atascocita, Spring, and Greater Houston. Schedule with ${SITE.name} for clear reports and responsive support.`,
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <InspectionJourneySection />
      <ServiceAreasSection />
      <CTASection />
    </>
  );
}
