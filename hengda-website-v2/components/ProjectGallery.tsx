"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { galleryItems, industries } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function ProjectGallery({ compact = false }: { compact?: boolean }) {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const items = useMemo(() => {
    if (compact) return galleryItems.slice(0, 6);
    if (activeFilter === "all") return galleryItems;
    return galleryItems.filter((it) => it.industrySlug === activeFilter);
  }, [compact, activeFilter]);

  function industryLabel(slug: string) {
    const ind = industries.find((i) => i.slug === slug);
    if (!ind) return "";
    return lang === "zh" ? ind.title_zh : ind.title;
  }

  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        <ScrollReveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow text-signal-500">
              <span className="h-px w-8 bg-signal-500" /> {t(strings.gallery.eyebrow)}
            </span>
            <h2 className="mt-5 text-3xl font-semibold uppercase text-navy-900 sm:text-4xl">
              {t(strings.gallery.heading)}
            </h2>
            {!compact && (
              <p className="mt-4 text-base leading-relaxed text-steel-600">
                {t(strings.gallery.filterHint)}
              </p>
            )}
          </div>
          {compact && (
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1 font-heading text-sm font-semibold uppercase tracking-wide text-signal-500 hover:text-signal-600"
            >
              {t(strings.gallery.viewFull)} <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </ScrollReveal>

        {!compact && (
          <ScrollReveal delay={0.05} className="mt-8 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter("all")}
              className={`rounded-full border px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wide transition-colors ${
                activeFilter === "all"
                  ? "border-signal-500 bg-signal-500 text-white"
                  : "border-steel-300 text-navy-800 hover:border-signal-500 hover:text-signal-500"
              }`}
            >
              {t(strings.gallery.allIndustries)}
            </button>
            {industries.map((ind) => (
              <button
                key={ind.slug}
                onClick={() => setActiveFilter(ind.slug)}
                className={`rounded-full border px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wide transition-colors ${
                  activeFilter === ind.slug
                    ? "border-signal-500 bg-signal-500 text-white"
                    : "border-steel-300 text-navy-800 hover:border-signal-500 hover:text-signal-500"
                }`}
              >
                {lang === "zh" ? ind.title_zh : ind.title}
              </button>
            ))}
          </ScrollReveal>
        )}

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <ScrollReveal key={it.title} delay={i * 0.05}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-navy-900">
                <Image
                  src={it.image}
                  alt={lang === "zh" ? it.title_zh : it.title}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-signal-500">
                    {industryLabel(it.industrySlug)}
                  </p>
                  <p className="mt-1 font-heading text-base font-semibold uppercase text-white">
                    {lang === "zh" ? it.title_zh : it.title}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {!compact && items.length === 0 && (
          <p className="mt-10 text-center text-sm text-steel-500">
            {t(strings.gallery.noResults)}
          </p>
        )}
      </div>
    </section>
  );
}
