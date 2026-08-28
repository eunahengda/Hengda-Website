"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { company } from "@/lib/data";
import { useLanguage, strings } from "@/lib/i18n";

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="absolute inset-0 bg-blueprint-grid bg-grid opacity-40" aria-hidden="true" />
      <div className="relative container-max flex flex-col items-center gap-6 px-6 py-20 text-center sm:px-10 lg:px-16">
        <ScrollReveal>
          <span className="eyebrow justify-center">
            <span className="h-px w-8 bg-signal-500" /> {t(strings.cta.eyebrow)}
          </span>
          <h2 className="mt-5 max-w-2xl text-3xl font-semibold uppercase sm:text-4xl">
            {t(strings.cta.heading)}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-steel-300">
            {t(strings.cta.body)}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              {t(strings.cta.quote)} <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={company.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle className="h-4 w-4" /> {t(strings.cta.whatsapp)}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
