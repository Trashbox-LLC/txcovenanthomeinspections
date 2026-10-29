import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailContent } from "@/components/organisms/ServiceDetailContent/ServiceDetailContent";
import { ServiceDetailGallery } from "@/components/organisms/ServiceDetailGallery/ServiceDetailGallery";
import { ServiceDetailHero } from "@/components/organisms/ServiceDetailHero/ServiceDetailHero";
import { SITE } from "@/lib/constants";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/lib/services";
import { pageMetadata } from "@/lib/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return pageMetadata({
    path: `/services/${service.slug}`,
    title: `${service.title} Inspection in Houston`,
    description: `${service.shortDescription} Book a ${service.title.toLowerCase()} home inspection with ${SITE.name} in Kingwood and the ${SITE.location}.`,
    image: service.image,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
      <ServiceDetailGallery gallery={service.gallery} />
    </>
  );
}
