import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity / schemas/project-schema";
import schemas from "./sanity / schemas"

const config = defineConfig({
  projectId: "53rsx89r",
  dataset: "production",
  title: "Ben's Personal Website",
  apiVersion: "2023-05-22",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
