import type { MetadataRoute } from "next";
import { getAllProjects } from "@/sanity/lib/getProjects";
import { getIndustryCategories } from "@/sanity/lib/getIndustries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.hdhengda.com";
  const routes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/projects",
    "/gallery",
    "/contact",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const [projects, industries] = await Promise.all([
    getAllProjects(),
    getIndustryCategories(),
  ]);

  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const industryEntries: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${base}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...industryEntries, ...projectEntries];
}
