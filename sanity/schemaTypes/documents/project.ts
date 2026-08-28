import { defineField, defineType } from "sanity";
import { ImageIcon } from "lucide-react";
import { MATERIAL_OPTIONS, MACHINE_PROCESS_OPTIONS } from "../options";

/**
 * Project — one gallery/portfolio entry (a machined part, a repair job,
 * a fabrication project). This is the type the owner will create and
 * edit most often, so field order and labels are written for a
 * non-programmer, not a developer.
 *
 * Deliberately NOT wired into the live site yet (Section 7, this sprint
 * is architecture only) — see PROJECT.md for the migration plan.
 */
export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ImageIcon,
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "photos", title: "Photos" },
    { name: "details", title: "Details" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    // --- Content -----------------------------------------------------
    defineField({
      name: "title",
      title: "Project Title (English)",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title_zh",
      title: "Project Title (Chinese)",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      description: "Used in the page URL. Click 'Generate' after typing the English title.",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "industryCategory",
      title: "Industry Category",
      type: "reference",
      group: "content",
      to: [{ type: "industryCategory" }],
      description: "Which industry sector this project belongs to — controls where it shows up on the Industries pages.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description (English)",
      type: "text",
      group: "content",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description_zh",
      title: "Description (Chinese)",
      type: "text",
      group: "content",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      group: "content",
      description: "Turn this on to show the project in the homepage highlights. Aim for a small, rotating handful — not everything at once.",
      initialValue: false,
    }),

    // --- Photos --------------------------------------------------------
    defineField({
      name: "images",
      title: "Project Photos",
      type: "array",
      group: "photos",
      description: "The main photo gallery for this project. Drag to reorder — the first photo is used as the cover image wherever this project appears as a thumbnail.",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt text (English)",
              type: "string",
              description: "A short, plain description of the photo, for accessibility and SEO — e.g. 'Machined stainless steel shaft on a workbench'.",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "alt_zh",
              title: "Alt text (Chinese)",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).error("Add at least one photo."),
    }),
    defineField({
      name: "beforeImage",
      title: "Before Photo",
      type: "image",
      group: "photos",
      options: { hotspot: true },
      description: "Optional. Only add this if you have a real 'before' photo of the part or equipment prior to the work — do not use a stock or unrelated photo here (see PROJECT.md Coding Rules).",
    }),
    defineField({
      name: "afterImage",
      title: "After Photo",
      type: "image",
      group: "photos",
      options: { hotspot: true },
      description: "The finished/repaired result. Required if a Before Photo is set, so visitors always see a matched pair.",
      validation: (Rule) =>
        Rule.custom((afterImage, context) => {
          const doc = context.document as { beforeImage?: unknown } | undefined;
          if (doc?.beforeImage && !afterImage) {
            return "An After Photo is required whenever a Before Photo is set.";
          }
          return true;
        }),
    }),

    // --- Details ---------------------------------------------------------
    defineField({
      name: "material",
      title: "Material",
      type: "array",
      group: "details",
      description: "Pick every material used in this project. Click a tag to select it.",
      of: [{ type: "string" }],
      options: {
        list: MATERIAL_OPTIONS,
        layout: "grid",
      },
    }),
    defineField({
      name: "machineProcess",
      title: "Machine Process",
      type: "array",
      group: "details",
      description: "Pick every process used in this project. Click a tag to select it.",
      of: [{ type: "string" }],
      options: {
        list: MACHINE_PROCESS_OPTIONS,
        layout: "grid",
      },
    }),

    // --- SEO ---------------------------------------------------------
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo",
      group: "seo",
    }),
  ],
  preview: {
    select: {
      title: "title",
      industry: "industryCategory.title",
      featured: "featured",
      media: "images.0",
    },
    prepare({ title, industry, featured, media }) {
      return {
        title: `${featured ? "⭐ " : ""}${title}`,
        subtitle: industry || "No industry set",
        media,
      };
    },
  },
});
