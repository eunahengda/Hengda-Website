"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { industries as fallbackIndustries, type Industry } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

type IndustriesGridProps = {
  /**
   * Industry Categories to render. Optional so any existing call site that
   * doesn't pass one (there shouldn't be any left, but this keeps the
   * component self-sufficient) still renders the same lib/data.ts content
   * as before Sprint 12 — see PROJECT.md Section 7.
   */
  industries?: Industry[];
};

export default function IndustriesGrid({ industries = fallbackIndustries }: IndustriesGridProps) {
  const { lang, t } = useLanguage();

  return (
    <section className="section-pad bg-steel-100">
      <div className="container-max">
        <ScrollReveal className="max-w-2xl">
          <span className="eyebrow text-signal-500">
            <span className="h-px w-8 bg-signal-500" /> {t(strings.industries.eyebrow)}
          </span>
          <h2 className="mt-5 text-3xl font-semibold uppercase text-navy-900 sm:text-4xl">
            {t(strings.industries.heading)}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel-600">
            {t(strings.industries.subtitle)}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.slug} delay={i * 0.06}>
              <Link
                href={`/industries/${ind.slug}`}
                className="group block h-full rounded-sm bg-white p-7 shadow-sm ring-1 ring-steel-200 transition-shadow hover:shadow-md"
              >
                {ind.imageUrl && (
                  <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-sm bg-navy-900">
                    <Image
                      src={ind.imageUrl}
                      alt={lang === "zh" ? ind.title_zh : ind.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <h3 className="mt-5 font-heading text-lg font-semibold uppercase text-navy-900">
                  {lang === "zh" ? ind.title_zh : ind.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-600">
                  {lang === "zh" ? ind.description_zh : ind.description}
                </p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
