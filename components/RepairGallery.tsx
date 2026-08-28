"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { repairGalleryItems } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function RepairGallery() {
  const { lang, t } = useLanguage();

  return (
    <section className="section-pad bg-steel-100">
      <div className="container-max">
        <ScrollReveal className="max-w-2xl">
          <span className="eyebrow text-signal-500">
            <span className="h-px w-8 bg-signal-500" /> {t(strings.gallery.repairHeading)}
          </span>
          <h2 className="mt-5 text-3xl font-semibold uppercase text-navy-900 sm:text-4xl">
            {t(strings.gallery.repairHeading)}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel-600">
            {t(strings.gallery.repairSubtitle)}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {repairGalleryItems.map((it, i) => (
            <ScrollReveal key={it.title} delay={i * 0.05}>
              <div className="overflow-hidden rounded-sm border border-steel-200 bg-white">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={it.image}
                    alt={lang === "zh" ? it.title_zh : it.title}
                    fill
                    sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="font-heading text-base font-semibold uppercase text-navy-900">
                    {lang === "zh" ? it.title_zh : it.title}
                  </p>
                  <p className="mt-1.5 text-sm text-steel-600">
                    {lang === "zh" ? it.note_zh : it.note}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
