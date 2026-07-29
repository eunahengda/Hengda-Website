"use client";

import PageHeader from "@/components/PageHeader";
import ProjectGallery from "@/components/ProjectGallery";
import RepairGallery from "@/components/RepairGallery";
import CTASection from "@/components/CTASection";
import { useLanguage, strings } from "@/lib/i18n";

export default function GalleryContent() {
  const { t } = useLanguage();

  return (
    <>
      <PageHeader
        eyebrow={t(strings.galleryPage.eyebrow)}
        title={t(strings.galleryPage.title)}
        description={t(strings.galleryPage.description)}
      />
      <ProjectGallery />
      <RepairGallery />
      <CTASection />
    </>
  );
}
