import { defineConfig } from "cypress";

import "./cypress/plugins/index.js";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    setupNodeEvents(on, config) {
      // e2e testing node events setup code

      on("task", {
        log(message) {
         // console.log(message);
          return null;
        },
        table(message) {
         // console.table(message);
          return null;
        }
      });

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
