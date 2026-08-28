"use client";

import PageHeader from "@/components/PageHeader";
import IndustriesGrid from "@/components/IndustriesGrid";
import CTASection from "@/components/CTASection";
import { useLanguage, strings } from "@/lib/i18n";
import type { Industry } from "@/lib/data";

type IndustriesContentProps = {
  industries?: Industry[];
};

export default function IndustriesContent({ industries }: IndustriesContentProps) {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t(strings.industriesPage.eyebrow)}
        title={t(strings.industriesPage.title)}
        description={t(strings.industriesPage.description)}
      />
      <IndustriesGrid industries={industries} />
      <CTASection />
    </>
  );
}
