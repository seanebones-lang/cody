import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { sanityEnv } from "./env";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Cody Meneley Studio",
  projectId: sanityEnv.projectId ?? "missing-project-id",
  dataset: sanityEnv.dataset ?? "production",
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool(), visionTool()],
});
