import type { Metadata } from "next";
import ProjectsContent from "@/components/ProjectsContent";
import { getAllProjects } from "@/sanity/lib/getProjects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Machining, fabrication, and repair projects completed by H&D Hengda Industries for manufacturers across Malaysia.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  return <ProjectsContent projects={projects} />;
}
