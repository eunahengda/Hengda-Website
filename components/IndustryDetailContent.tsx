"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import { urlFor, getImageAspectRatio } from "@/sanity/lib/image";
import { useLanguage, strings } from "@/lib/i18n";
import type { Industry } from "@/lib/data";
import type { Project } from "@/sanity/lib/getProjects";

export default function IndustryDetailContent({
  industry,
  projects,
}: {
  industry: Industry;
  projects: Project[];
}) {
  const { lang, t } = useLanguage();
  const industryTitle = lang === "zh" ? industry.title_zh : industry.title;

  return (
    <>
      <PageHeader
        eyebrow={t(strings.industriesPage.eyebrow)}
        title={industryTitle}
        description={lang === "zh" ? industry.description_zh : industry.description}
      />

      <section className="bg-white">
        <div className="container-max px-6 py-10 sm:px-10 lg:px-16">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wide text-signal-500 hover:text-signal-600"
          >
            <ArrowLeft className="h-4 w-4" /> {t(strings.industryDetail.backToIndustries)}
          </Link>

          {industry.imageUrl && (
            <ScrollReveal
              delay={0.05}
              className="relative mt-8 aspect-[21/9] overflow-hidden rounded-sm bg-navy-900"
            >
              <Image
                src={industry.imageUrl}
                alt={industryTitle}
                fill
                sizes="(min-width:1024px) 1024px, 100vw"
                className="object-cover"
              />
            </ScrollReveal>
          )}
        </div>
      </section>

      <section className="section-pad bg-steel-100">
        <div className="container-max">
          <ScrollReveal className="max-w-2xl">
            <span className="eyebrow text-signal-500">
              <span className="h-px w-8 bg-signal-500" /> {t(strings.industryDetail.projectsEyebrow)}
            </span>
            <h2 className="mt-5 text-3xl font-semibold uppercase text-navy-900 sm:text-4xl">
              {t(strings.industryDetail.projectsHeading).replace("{industry}", industryTitle)}
            </h2>
          </ScrollReveal>

          {projects.length === 0 ? (
            <p className="mt-10 text-center text-sm text-steel-500">
              {t(strings.industryDetail.noProjects)}
            </p>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                      className="group block h-full overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-steel-200 transition-shadow hover:shadow-md"
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
                        <p className="font-mono text-[10px] uppercase tracking-wider text-signal-500">
                          {industryTitle}
                        </p>
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
