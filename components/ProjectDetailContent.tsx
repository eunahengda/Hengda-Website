"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import ImageLightbox from "@/components/ImageLightbox";
import { urlFor, getImageAspectRatio } from "@/sanity/lib/image";
import { MATERIAL_OPTIONS, MACHINE_PROCESS_OPTIONS } from "@/sanity/schemaTypes/options";
import { useLanguage, strings } from "@/lib/i18n";
import type { Project } from "@/sanity/lib/getProjects";

function labelFor(value: string, options: { title: string; value: string }[]) {
  return options.find((o) => o.value === value)?.title || value;
}

export default function ProjectDetailContent({ project }: { project: Project }) {
  const { lang, t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const title = lang === "zh" ? project.title_zh : project.title;
  const beforeUrl = project.beforeImage?.asset
    ? urlFor(project.beforeImage).width(900).height(675).url()
    : null;
  const afterUrl = project.afterImage?.asset
    ? urlFor(project.afterImage).width(900).height(675).url()
    : null;

  const galleryImages = project.images
    .filter((image) => image.asset)
    .map((image) => ({
      url: urlFor(image).width(800).url(),
      fullUrl: urlFor(image).width(1600).url(),
      alt: (lang === "zh" ? image.alt_zh : image.alt) || title,
      key: image._key,
      aspectRatio: getImageAspectRatio(image),
    }));

  return (
    <>
      <PageHeader
        eyebrow={
          project.industry
            ? lang === "zh"
              ? project.industry.title_zh
              : project.industry.title
            : t(strings.projectsPage.eyebrow)
        }
        title={title}
      />

      <section className="section-pad bg-white">
        <div className="container-max">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-heading text-xs font-semibold uppercase tracking-wide text-signal-500 hover:text-signal-600"
          >
            <ArrowLeft className="h-4 w-4" /> {t(strings.projectDetail.backToProjects)}
          </Link>

          {galleryImages.length > 0 && (
            <ScrollReveal className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, i) => (
                <button
                  key={image.key || i}
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View larger image: ${image.alt}`}
                  className="relative block w-full overflow-hidden rounded-sm bg-navy-900"
                  style={{ aspectRatio: image.aspectRatio }}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </button>
              ))}
            </ScrollReveal>
          )}

          <ImageLightbox
            images={galleryImages.map((image) => ({ url: image.fullUrl, alt: image.alt }))}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="text-xl font-semibold uppercase text-navy-900">
                {t(strings.projectDetail.aboutHeading)}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-steel-600">
                {lang === "zh" ? project.description_zh : project.description}
              </p>
            </div>

            <div className="space-y-6 lg:col-span-5">
              {project.industry && (
                <div>
                  <p className="eyebrow">{t(strings.projectDetail.industryLabel)}</p>
                  <p className="mt-2 text-sm text-navy-800">
                    {lang === "zh" ? project.industry.title_zh : project.industry.title}
                  </p>
                </div>
              )}
              {project.material.length > 0 && (
                <div>
                  <p className="eyebrow">{t(strings.projectDetail.materialLabel)}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.material.map((m) => (
                      <span
                        key={m}
                        className="rounded-full border border-steel-300 px-3 py-1 text-xs text-navy-800"
                      >
                        {labelFor(m, MATERIAL_OPTIONS)}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {project.machineProcess.length > 0 && (
                <div>
                  <p className="eyebrow">{t(strings.projectDetail.processLabel)}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.machineProcess.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-steel-300 px-3 py-1 text-xs text-navy-800"
                      >
                        {labelFor(p, MACHINE_PROCESS_OPTIONS)}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {(beforeUrl || afterUrl) && (
            <div className="mt-16">
              <h2 className="text-xl font-semibold uppercase text-navy-900">
                {t(strings.projectDetail.beforeAfterHeading)}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {beforeUrl && (
                  <div>
                    <p className="eyebrow">{t(strings.projectDetail.beforeLabel)}</p>
                    <div className="relative mt-2 aspect-[4/3] overflow-hidden rounded-sm bg-navy-900">
                      <Image
                        src={beforeUrl}
                        alt={`${title} — ${t(strings.projectDetail.beforeLabel)}`}
                        fill
                        sizes="(min-width:640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
                {afterUrl && (
                  <div>
                    <p className="eyebrow">{t(strings.projectDetail.afterLabel)}</p>
                    <div className="relative mt-2 aspect-[4/3] overflow-hidden rounded-sm bg-navy-900">
                      <Image
                        src={afterUrl}
                        alt={`${title} — ${t(strings.projectDetail.afterLabel)}`}
                        fill
                        sizes="(min-width:640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
