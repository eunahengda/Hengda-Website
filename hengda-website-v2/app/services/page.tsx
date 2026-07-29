import type { Metadata } from "next";
import ServicesContent from "@/components/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Conventional lathe, milling, keyway milling, welding, shaping, custom metal fabrication, engineering parts manufacturing, and repair & modification services from H&D Hengda Industries in Johor Bahru.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
