import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

// base: "./" keeps every asset path relative so the built index.html works
// when opened directly via file:// (double-click). viteSingleFile inlines all
// JS/CSS into that single index.html, so there are no cross-origin module
// fetches — which is exactly what broke the previous file:// open.
export default defineConfig({
  base: "./",
  plugins: [react(), viteSingleFile()],
  build: {
    target: "es2020",
    cssCodeSplit: false,
    assetsInlineLimit: 100_000_000,
    chunkSizeWarningLimit: 8000,
  },
});
