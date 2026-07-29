"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { services } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

const featuredSlugs = [
  "conventional-lathe",
  "milling",
  "welding",
  "custom-metal-fabrication",
  "repair-modification",
];

const images: Record<string, string> = {
  "conventional-lathe":
    "https://images.unsplash.com/photo-1776090188130-26c7253ff423?auto=format&fit=crop&w=900&q=80",
  milling:
    "https://images.unsplash.com/photo-1701448150058-43d6d199b103?auto=format&fit=crop&w=900&q=80",
  welding:
    "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?auto=format&fit=crop&w=900&q=80",
  "custom-metal-fabrication":
    "https://images.unsplash.com/photo-1776090188130-26c7253ff423?auto=format&fit=crop&w=900&q=80&crop=entropy",
  "repair-modification":
    "https://images.unsplash.com/photo-1647586028042-1de4d4a935e6?auto=format&fit=crop&w=900&q=80&crop=entropy",
};

export default function FeaturedCapabilities() {
  const { lang, t } = useLanguage();
  const featured = featuredSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <section className="section-pad bg-white">
      <div className="container-max">
        <ScrollReveal className="text-center">
          <h2 className="text-3xl font-semibold uppercase text-navy-900 sm:text-4xl">
            {t(strings.featured.heading)}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel-600">
            {t(strings.featured.subtitle)}
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {featured.map((f, i) => (
            <ScrollReveal key={f.slug} delay={i * 0.06}>
              <div className="group h-full overflow-hidden rounded-sm border border-steel-200 transition-shadow hover:shadow-xl hover:shadow-navy-900/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={images[f.slug]}
                    alt={lang === "zh" ? f.title_zh : f.title}
                    fill
                    sizes="(min-width:1024px) 20vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-signal-500">
                    {t(strings.featured.capability)}
                  </p>
                  <h3 className="mt-1.5 font-heading text-base font-semibold uppercase text-navy-900">
                    {lang === "zh" ? f.title_zh : f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel-600">
                    {lang === "zh" ? f.summary_zh : f.summary}
                  </p>
                  <Link
                    href="/services"
                    className="mt-4 inline-flex items-center gap-1 font-heading text-xs font-semibold uppercase tracking-wide text-navy-900 group-hover:text-signal-500"
                  >
                    {t(strings.featured.learnMore)} <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} className="mt-10 text-center">
          <Link href="/services" className="btn-outline-dark">
            {t(strings.featured.viewAll)}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
