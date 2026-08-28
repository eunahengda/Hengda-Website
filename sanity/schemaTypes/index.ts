import { type SchemaTypeDefinition } from "sanity";

import industryCategory from "./documents/industryCategory";
import project from "./documents/project";
import seo from "./objects/seo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Objects first (referenced by documents below)
    seo,
    // Documents
    industryCategory,
    project,
  ],
};
