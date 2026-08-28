import type { Metadata } from "next";
import IndustriesContent from "@/components/IndustriesContent";
import { getIndustryCategories } from "@/sanity/lib/getIndustries";

export const metadata: Metadata = {
  title: "Industries Served",
  description:
    "H&D Hengda Industries serves palm oil, food & beverage, consumer goods & packaging, oil & gas / marine, industrial & electronics, and logistics sectors across Malaysia with precision machining and fabrication.",
  alternates: { canonical: "/industries" },
};

export default async function IndustriesPage() {
  const industries = await getIndustryCategories();
  return <IndustriesContent industries={industries} />;
}
