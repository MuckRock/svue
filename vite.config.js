import path from "node:path";

import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/svue.js"),
      name: "svue",
      fileName: "svue",
    },

    rollupOptions: {
      external: ["svelte"],
    },
  },

  plugins: [svelte({})],
});
