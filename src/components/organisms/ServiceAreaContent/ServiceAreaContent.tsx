"use client";

import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/atoms/Button/Button";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { SITE } from "@/lib/constants";
import type { ServiceArea } from "@/lib/service-areas";
import { SERVICES } from "@/lib/services";

interface ServiceAreaContentProps {
  area: ServiceArea;
}

export function ServiceAreaContent({ area }: ServiceAreaContentProps) {
  return (
    <section className="bg-surface py-stack-xl md:py-20">
      <div className="container-site">
        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
          <div className="space-y-stack-xl lg:col-span-8">
            <FadeIn>
              <div className="max-w-none space-y-6 text-on-surface-variant">
                <h2 className="font-headline text-[1.75rem] leading-9 font-semibold text-primary md:text-[2rem] md:leading-10">
                  Home Inspections in {area.name}
                </h2>
                {area.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-6 md:text-lg md:leading-7"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.05}>
              <div>
                <h2 className="mb-stack-md font-headline text-[1.75rem] leading-9 font-semibold text-primary md:text-[2rem] md:leading-10">
                  Neighborhoods We Serve
                </h2>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {area.neighborhoods.map((neighborhood) => (
                    <li
                      key={neighborhood}
                      className="flex items-center gap-2 text-base text-on-surface-variant md:text-lg"
                    >
                      <MapPin
                        className="h-4 w-4 shrink-0 text-gold"
                        aria-hidden
                      />
                      {neighborhood}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="mb-stack-md font-headline text-[1.75rem] leading-9 font-semibold text-primary md:text-[2rem] md:leading-10">
                  What We Inspect in {area.name}
                </h2>
                <p className="mb-stack-md text-base leading-6 text-on-surface-variant md:text-lg md:leading-7">
                  Every {area.name} home inspection covers the major systems
                  buyers and sellers care about most.
                </p>
                <ul className="flex flex-wrap gap-3">
                  {SERVICES.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-gold hover:text-gold"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mt-8 lg:col-span-4 lg:mt-0" delay={0.1}>
            <div className="glass-card sticky top-28 space-y-6 rounded-xl p-6">
              <h3 className="font-headline text-xl font-semibold text-primary md:text-2xl">
                Schedule An Inspection
              </h3>
              <p className="text-sm leading-6 text-on-surface-variant md:text-base">
                Ready for a home inspection in {area.name}? Call, text, or send
                a message to book a time that fits your closing timeline.
              </p>
              <div className="space-y-4 pt-2">
                <Button
                  href="/contact"
                  variant="gold"
                  size="lg"
                  className="w-full"
                >
                  Schedule Your Inspection
                </Button>
                <Button
                  href={SITE.phoneHref}
                  variant="outline"
                  size="lg"
                  className="w-full"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  Call {SITE.phone}
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
