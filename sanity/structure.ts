import type { StructureResolver } from "sanity/structure";

// By default, Sanity's Studio just lists every document type
// alphabetically in the left sidebar. With only two content types here
// (Industry Category, Project) that default is already fine, but this
// gives them clearer, ordered labels — "Projects" first, since that's what
// the owner will open almost every time they log in — and reserves room to
// add more sections later (e.g. Testimonials, Team) without reshuffling.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("H&D Hengda Content")
    .items([
      S.documentTypeListItem("project").title("Projects"),
      S.documentTypeListItem("industryCategory").title("Industry Categories"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !["project", "industryCategory"].includes(item.getId() ?? "")
      ),
    ]);
