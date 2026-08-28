/**
 * Controlled vocabularies for the Project schema's Material and Machine
 * Process fields. Kept as plain arrays (not separate Sanity document
 * types) because the list is short, changes rarely, and a reference
 * picker would be one extra click for zero real benefit at this scale.
 *
 * If this list needs to grow past ~20 items or gets edited often, promote
 * it to a real `material` / `machineProcess` document type with its own
 * list in the Studio instead of editing this file.
 */

export const MATERIAL_OPTIONS = [
  { title: "Mild Steel", value: "mild-steel" },
  { title: "Stainless Steel", value: "stainless-steel" },
  { title: "Cast Iron", value: "cast-iron" },
  { title: "Aluminium", value: "aluminium" },
  { title: "Brass", value: "brass" },
  { title: "Copper", value: "copper" },
  { title: "Teflon / PTFE", value: "ptfe" },
  { title: "Nylon", value: "nylon" },
  { title: "Polyurethane (PU)", value: "pu" },
  { title: "UHMW-PE", value: "uhmw-pe" },
  { title: "Delrin / POM", value: "delrin-pom" },
  { title: "Bakelite", value: "bakelite" },
];

export const MACHINE_PROCESS_OPTIONS = [
  { title: "Conventional Lathe Turning", value: "conventional-lathe" },
  { title: "Milling", value: "milling" },
  { title: "Keyway Milling", value: "keyway-milling" },
  { title: "Welding", value: "welding" },
  { title: "Shaping", value: "shaping" },
  { title: "Custom Metal Fabrication", value: "custom-metal-fabrication" },
  { title: "Engineering Parts Manufacturing", value: "engineering-parts-manufacturing" },
  { title: "Repair & Modification", value: "repair-modification" },
];
