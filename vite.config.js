import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  server: { host: true },
  build: {
    rollupOptions: { input: { main: "./index.html" } },
    commonjsOptions: { ignoreDynamicRequires: true },
    assetsDir: "assets",
    minify: "terser",
    target: "ESNext",
    sourcemap: true,
    manifest: true,
    outDir: "dist",
  },
  plugins: [react(), reactRefresh()],
  optimizeDeps: { include: ["react", "react-dom"] },
});
