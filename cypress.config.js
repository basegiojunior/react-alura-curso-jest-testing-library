import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.family === "chromium" && browser.name !== "electron") {
          // Força o navegador a tratar o seu IP local como uma origem segura
          launchOptions.args.push(
            "--unsafely-treat-insecure-origin-as-secure=http://192.168.18.62:5173",
          );
        }
        return launchOptions;
      });
    },
  },
});
