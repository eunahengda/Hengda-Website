import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryDetailContent from "@/components/IndustryDetailContent";
import { getIndustryBySlug } from "@/sanity/lib/getIndustries";
import { getProjectsByIndustry } from "@/sanity/lib/getProjects";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = await getIndustryBySlug(params.slug);
  if (!industry) return {};

  return {
    title: industry.title,
    description:
      industry.description ||
      "Precision machining, fabrication, and repair services from H&D Hengda Industries in Johor Bahru, Malaysia.",
    alternates: { canonical: `/industries/${industry.slug}` },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const industry = await getIndustryBySlug(params.slug);
  if (!industry) {
    notFound();
  }

  const projects = await getProjectsByIndustry(industry.slug);

  return <IndustryDetailContent industry={industry} projects={projects} />;
}
