import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { deskStructure } from "./deskStructure";
import { sanityEnv } from "./env";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Cody Meneley Studio",
  projectId: (sanityEnv.projectId ?? "0yft11i7") as string,
  dataset: (sanityEnv.dataset ?? "production") as string,
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool({ structure: deskStructure }), visionTool()],
});
