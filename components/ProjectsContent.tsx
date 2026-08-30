"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import { urlFor, getImageAspectRatio } from "@/sanity/lib/image";
import { useLanguage, strings } from "@/lib/i18n";
import type { Project } from "@/sanity/lib/getProjects";

export default function ProjectsContent({ projects }: { projects: Project[] }) {
  const { lang, t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t(strings.projectsPage.eyebrow)}
        title={t(strings.projectsPage.title)}
        description={t(strings.projectsPage.description)}
      />

      <section className="section-pad bg-white">
        <div className="container-max">
          {projects.length === 0 ? (
            <p className="text-center text-sm text-steel-500">
              {t(strings.projectsPage.noProjects)}
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => {
                const cover = project.images[0];
                const coverUrl = cover?.asset
                  ? urlFor(cover).width(800).url()
                  : null;
                const title = lang === "zh" ? project.title_zh : project.title;

                return (
                  <ScrollReveal key={project._id} delay={i * 0.05}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group block h-full overflow-hidden rounded-sm bg-steel-100 shadow-sm ring-1 ring-steel-200 transition-shadow hover:shadow-md"
                    >
                      <div
                        className="relative overflow-hidden bg-navy-900"
                        style={{ aspectRatio: getImageAspectRatio(cover) }}
                      >
                        {coverUrl && (
                          <Image
                            src={coverUrl}
                            alt={(lang === "zh" ? cover?.alt_zh : cover?.alt) || title}
                            fill
                            sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <div className="p-6">
                        {project.industry && (
                          <p className="font-mono text-[10px] uppercase tracking-wider text-signal-500">
                            {lang === "zh" ? project.industry.title_zh : project.industry.title}
                          </p>
                        )}
                        <h3 className="mt-2 font-heading text-lg font-semibold uppercase text-navy-900">
                          {title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-steel-600">
                          {lang === "zh" ? project.description_zh : project.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 font-heading text-xs font-semibold uppercase tracking-wide text-signal-500">
                          {t(strings.projectsPage.viewProject)}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
