// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import {visionTool} from '@sanity/vision';
import { types } from "./schemas/schema";

export default defineConfig({
  name: "Dfweb",
  title: "Dfweb-v3",
  projectId: "41s7iutf",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: types
  }
});
