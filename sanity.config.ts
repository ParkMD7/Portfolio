// Single workspace configuration

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schema } from "./sanity/schema";

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: "production",
  plugins: [deskTool()],
  schema,
});
