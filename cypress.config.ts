import { defineConfig } from "cypress";
import customViteConfig from "./vite.config"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3001",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: customViteConfig
    },
    specPattern: "cypress/**/**/*.cy.{js,ts,jsx,tsx}"
  },
});
