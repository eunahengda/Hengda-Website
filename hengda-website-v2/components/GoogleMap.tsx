"use client";

import { MapPin, ArrowUpRight, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { company } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function GoogleMap() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="container-max px-6 py-16 sm:px-10 lg:px-16">
        <ScrollReveal className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow text-signal-500">
              <span className="h-px w-8 bg-signal-500" /> {t(strings.googleMap.eyebrow)}
            </span>
            <h2 className="mt-4 text-2xl font-semibold uppercase text-navy-900 sm:text-3xl">
              {t(strings.googleMap.heading)}
            </h2>
          </div>
          <a
            href={company.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-heading text-sm font-semibold uppercase tracking-wide text-signal-500 hover:text-signal-600"
          >
            {t(strings.googleMap.openMaps)} <ArrowUpRight className="h-4 w-4" />
          </a>
        </ScrollReveal>

        <div className="grid grid-cols-1 overflow-hidden rounded-sm ring-1 ring-steel-200 lg:grid-cols-3">
          <div className="h-72 w-full lg:col-span-2 lg:h-[420px]">
            <iframe
              title="H&D Hengda Industries location map"
              src={company.mapEmbedSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 bg-navy-900 p-8 text-white">
            <MapPin className="h-6 w-6 text-signal-500" />
            <p className="font-heading text-lg font-semibold uppercase">
              {company.legalName}
            </p>
            <p className="text-sm leading-relaxed text-steel-300">
              {company.address.full}
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              <a
                href={company.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-fit"
              >
                {t(strings.googleMap.directions)}
              </a>
              <a
                href={company.googleReviewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-fit"
              >
                <Star className="h-4 w-4" /> {t(strings.googleMap.rateUs)}
              </a>
            </div>
            <p className="text-xs text-steel-400">{t(strings.googleMap.rateUsNote)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
