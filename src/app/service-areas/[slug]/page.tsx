import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/organisms/CTASection/CTASection";
import { ServiceAreaContent } from "@/components/organisms/ServiceAreaContent/ServiceAreaContent";
import { ServiceAreaHero } from "@/components/organisms/ServiceAreaHero/ServiceAreaHero";
import {
  getAllServiceAreaSlugs,
  getServiceAreaBySlug,
} from "@/lib/service-areas";
import { pageMetadata } from "@/lib/site";

interface ServiceAreaPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllServiceAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServiceAreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    return { title: "Service Area Not Found" };
  }

  return pageMetadata({
    path: `/service-areas/${area.slug}`,
    title: area.headline,
    description: area.description,
  });
}

export default async function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <ServiceAreaHero area={area} />
      <ServiceAreaContent area={area} />
      <CTASection />
    </>
  );
}
