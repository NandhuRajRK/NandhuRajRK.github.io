import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://nandhurajrk.github.io",
  base: "/nandhuraj.github.io",
  integrations: [tailwind()],
  output: "static"
});
