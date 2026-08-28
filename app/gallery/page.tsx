import type { Metadata } from "next";
import GalleryContent from "@/components/GalleryContent";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse machining, welding, fabrication, and repair work completed by H&D Hengda Industries for manufacturers across Malaysia.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <GalleryContent />;
}
