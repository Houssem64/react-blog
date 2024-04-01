import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import postcss from "postcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), postcss()],
  server: {
    // Serve the index.html for all paths to enable SPA behavior
    fs: {
      strict: false,
    },
  },
});
