import { defineConfig } from "cypress";

import "./cypress/plugins/index.js";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
     
    },
    baseUrl: "http://localhost:3000"
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack"
    }
  }
});
