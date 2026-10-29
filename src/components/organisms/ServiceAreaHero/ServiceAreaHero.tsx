import Image from "next/image";
import { HERO_IMAGE } from "@/lib/constants";
import type { ServiceArea } from "@/lib/service-areas";

interface ServiceAreaHeroProps {
  area: ServiceArea;
}

export function ServiceAreaHero({ area }: ServiceAreaHeroProps) {
  return (
    <section className="relative flex h-[60vh] min-h-[400px] w-full items-center justify-start overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt={`Home inspection service in ${area.name}, ${area.state}`}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-90"
        aria-hidden
      />
      <div className="container-site relative z-10">
        <div className="max-w-2xl text-on-primary">
          <p className="mb-stack-md text-xs font-semibold tracking-widest text-secondary-container uppercase">
            Service Area
          </p>
          <h1 className="font-headline text-4xl leading-tight font-bold md:text-5xl md:leading-14">
            {area.headline}
          </h1>
          <p className="mt-stack-md text-lg leading-7 text-surface-container-high md:text-xl md:leading-8">
            {area.description}
          </p>
        </div>
      </div>
    </section>
  );
}
