import type { MetadataRoute } from "next";
import { getAllProjects } from "@/sanity/lib/getProjects";

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

  const projects = await getAllProjects();
  const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...projectEntries];
}
