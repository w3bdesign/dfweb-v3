import { defineConfig } from "cypress";

//import "./cypress/plugins/index.js";

import { setupNodeEvents as setupPlugins } from "./cypress/plugins/index.js";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // e2e testing node events setup code
      setupPlugins(on, config); // Register the 'task' event from your plugins file
      return config;
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
