import type { Metadata } from "next";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { CTASection } from "@/components/organisms/CTASection/CTASection";
import { ServiceAreasSection } from "@/components/organisms/ServiceAreasSection/ServiceAreasSection";
import { SITE } from "@/lib/constants";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  path: "/service-areas",
  title: "Service Areas",
  description: `Home inspector serving Kingwood, Humble, Atascocita, Spring, The Woodlands, Conroe, Tomball, and Greater Houston. Schedule with ${SITE.name}.`,
});

export default function ServiceAreasPage() {
  return (
    <>
      <div className="container-site py-stack-xl">
        <FadeIn className="mb-stack-xl text-center">
          <h1 className="mb-stack-sm font-headline text-[2rem] leading-10 font-bold text-primary md:text-5xl md:leading-14">
            Home Inspection Service Areas
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-on-surface-variant">
            TREC-licensed home inspections across the Lake Houston corridor and
            Greater Houston Area — with clear reports and responsive support.
          </p>
        </FadeIn>
      </div>
      <ServiceAreasSection />
      <CTASection />
    </>
  );
}
