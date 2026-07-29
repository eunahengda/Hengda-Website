import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "H&D Hengda Industries Sdn Bhd has served Malaysian manufacturers with precision machining and metal fabrication for over 20 years from our workshop in Johor Bahru.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutContent />;
}
