import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeaturedCapabilities from "@/components/FeaturedCapabilities";
import ExperienceBand from "@/components/ExperienceBand";
import CompanyIntro from "@/components/CompanyIntro";
import WhyChooseUs from "@/components/WhyChooseUs";
import MachineCapabilities from "@/components/MachineCapabilities";
import IndustriesGrid from "@/components/IndustriesGrid";
import ProjectGallery from "@/components/ProjectGallery";
import ContactHelp from "@/components/ContactHelp";
import GoogleMap from "@/components/GoogleMap";

export const metadata: Metadata = {
  title: "Precision Machining & Metal Fabrication in Johor Bahru",
  description:
    "H&D Hengda Industries Sdn Bhd delivers precision conventional lathe, milling, welding, and custom metal fabrication for manufacturers across Malaysia. Over 20 years of experience in Johor Bahru.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedCapabilities />
      <ExperienceBand />
      <CompanyIntro />
      <WhyChooseUs />
      <MachineCapabilities />
      <IndustriesGrid />
      <ProjectGallery compact />
      <ContactHelp />
      <GoogleMap />
    </>
  );
}
