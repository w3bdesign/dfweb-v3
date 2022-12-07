import { defineConfig } from "cypress";

import "./cypress/plugins/index.js";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    baseUrl: "http://localhost:3000"
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack"
    }
  }
});
