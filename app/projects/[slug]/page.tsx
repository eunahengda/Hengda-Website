import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailContent from "@/components/ProjectDetailContent";
import { getProjectBySlug } from "@/sanity/lib/getProjects";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: project.seo?.seoTitle || project.title,
    description: project.seo?.seoDescription || project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }

  return <ProjectDetailContent project={project} />;
}
