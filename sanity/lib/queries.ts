import { groq } from "next-sanity";

/**
 * GROQ queries matching the schema in sanity/schemaTypes/.
 *
 * Not imported anywhere yet — writing them now (rather than leaving that
 * for the migration sprint) means the schema design in this sprint has
 * actually been checked against real queries a developer would write
 * against it, not just against the Studio's own preview. See PROJECT.md
 * Section 7 for what's still pending before these get used for real.
 */

export const ALL_INDUSTRY_CATEGORIES_QUERY = groq`
  *[_type == "industryCategory"] | order(order asc, title asc) {
    _id,
    title,
    title_zh,
    "slug": slug.current,
    description,
    description_zh,
    "imageUrl": image.asset->url
  }
`;

export const ALL_PROJECTS_QUERY = groq`
  *[_type == "project"] | order(featured desc, _createdAt desc) {
    _id,
    title,
    title_zh,
    "slug": slug.current,
    "industry": industryCategory->{ title, title_zh, "slug": slug.current },
    description,
    description_zh,
    featured,
    images,
    beforeImage,
    afterImage,
    material,
    machineProcess,
    seo
  }
`;

export const PROJECTS_BY_INDUSTRY_QUERY = groq`
  *[_type == "project" && industryCategory->slug.current == $industrySlug]
    | order(featured desc, _createdAt desc) {
    _id,
    title,
    title_zh,
    "slug": slug.current,
    description,
    description_zh,
    featured,
    images,
    beforeImage,
    afterImage,
    material,
    machineProcess,
    seo
  }
`;

export const FEATURED_PROJECTS_QUERY = groq`
  *[_type == "project" && featured == true] | order(_createdAt desc) [0...6] {
    _id,
    title,
    title_zh,
    "slug": slug.current,
    "industry": industryCategory->{ title, title_zh, "slug": slug.current },
    images
  }
`;

export const PROJECT_BY_SLUG_QUERY = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    title_zh,
    "slug": slug.current,
    "industry": industryCategory->{ title, title_zh, "slug": slug.current },
    description,
    description_zh,
    featured,
    images,
    beforeImage,
    afterImage,
    material,
    machineProcess,
    seo
  }
`;
