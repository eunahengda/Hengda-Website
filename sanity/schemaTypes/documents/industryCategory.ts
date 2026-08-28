import { defineField, defineType } from "sanity";
import { Factory } from "lucide-react";

/**
 * Industry Category — the sector groupings shown on /industries and used
 * to filter the project gallery (e.g. "Palm Oil & Agro-Processing").
 *
 * Field names deliberately mirror the existing `Industry` type in
 * lib/data.ts (title / title_zh / description / description_zh) so a
 * future migration script has a 1:1 mapping instead of a field-renaming
 * exercise. See PROJECT.md Section 7 for migration status — this schema
 * is NOT wired up to the live site yet.
 */
export default defineType({
  name: "industryCategory",
  title: "Industry Category",
  type: "document",
  icon: Factory,
  fields: [
    defineField({
      name: "title",
      title: "Title (English)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title_zh",
      title: "Title (Chinese)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Used in the page URL, e.g. /industries/palm-oil-agro. Click 'Generate' after typing the English title.",
      options: { source: "title", maxLength: 64 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "emoji",
      title: "Icon (emoji)",
      type: "string",
      description: "A single emoji shown on the industry card, e.g. 🌴 🍽️ 📦 🛢️",
      validation: (Rule) => Rule.required().max(2),
    }),
    defineField({
      name: "description",
      title: "Description (English)",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description_zh",
      title: "Description (Chinese)",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      description:
        "Shown on the Homepage and Industries page cards. Optional — cards without one keep showing the icon only, exactly as they do today.",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers show first on the Industries page. Leave blank to sort alphabetically.",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current", media: "image", emoji: "emoji" },
    prepare({ title, subtitle, media, emoji }) {
      return {
        title,
        subtitle: subtitle ? `/industries/${subtitle}` : "No slug yet",
        media: media || emoji,
      };
    },
  },
});
