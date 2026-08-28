"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage, strings } from "@/lib/i18n";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-signal-500">
        {t(strings.notFound.error)}
      </p>
      <h1 className="mt-4 text-3xl font-semibold uppercase text-navy-900 sm:text-4xl">
        {t(strings.notFound.title)}
      </h1>
      <p className="mt-4 max-w-md text-steel-600">
        {t(strings.notFound.body)}
      </p>
      <Link href="/" className="btn-primary mt-8">
        <ArrowLeft className="h-4 w-4" /> {t(strings.notFound.back)}
      </Link>
    </section>
  );
}
