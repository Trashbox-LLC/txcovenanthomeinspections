"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { FadeIn } from "@/components/atoms/FadeIn/FadeIn";
import { SectionHeader } from "@/components/molecules/SectionHeader/SectionHeader";
import { SITE } from "@/lib/constants";
import { SERVICE_AREAS } from "@/lib/service-areas";
import { staggerContainer } from "@/lib/motion";

export function ServiceAreasSection() {
  return (
    <section className="border-y border-outline-variant bg-surface-container-low py-stack-xl">
      <div className="container-site">
        <FadeIn>
          <SectionHeader
            title="Areas We Serve"
            description="Local home inspections across Kingwood, Katy, Cypress, Sugar Land, Pearland, The Woodlands, and Greater Houston."
            showAccent
          />
        </FadeIn>

        <motion.ul
          className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {SERVICE_AREAS.map((area, index) => (
            <motion.li
              key={area.slug}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.08 },
                },
              }}
            >
              <Link
                href={`/service-areas/${area.slug}`}
                className="flex h-full flex-col gap-3 rounded-xl border border-outline-variant bg-surface-container-lowest p-stack-lg shadow-ambient transition-colors hover:border-gold"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-headline text-xl font-semibold text-primary">
                  {area.name}, {area.state}
                </span>
                <span className="text-sm leading-6 text-on-surface-variant">
                  Home inspector serving {area.name} and nearby neighborhoods.
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <FadeIn className="mt-stack-lg text-center">
          <p className="text-base text-on-surface-variant md:text-lg">
            Can&apos;t find your city? Give us a call — we may still cover your
            area.{" "}
            <a
              href={SITE.phoneHref}
              className="font-semibold text-primary underline-offset-2 transition-colors hover:text-gold hover:underline"
            >
              {SITE.phone}
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
