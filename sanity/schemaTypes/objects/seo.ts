import { defineField, defineType } from "sanity";

/**
 * Reusable SEO object — embedded into any document type that needs
 * per-page/per-project search metadata (currently: project).
 *
 * Kept as a separate object type (rather than two loose fields) so it can
 * be reused on other document types later (e.g. industryCategory) without
 * duplicating field definitions.
 */
export default defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      description:
        "Shown in Google search results and browser tabs. Keep it under ~60 characters. Leave blank to fall back to the project title.",
      validation: (Rule) => Rule.max(60).warning("Longer titles get truncated in Google search results."),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      description:
        "Shown under the title in Google search results. Aim for 120–160 characters. Leave blank to fall back to the project description.",
      validation: (Rule) => Rule.max(160).warning("Longer descriptions get truncated in Google search results."),
    }),
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
});
