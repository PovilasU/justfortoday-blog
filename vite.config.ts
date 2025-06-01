import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    preact(),
    compression({
      ext: ".gz",
      algorithm: "gzip",
      threshold: 0, // Compress even small files like vite.svg
      deleteOriginFile: true, // ✅ Keep original files (important for fallback)
      verbose: true,
      filter: /\.(js|css|html|svg|json)$/i,
    }),
  ],
});
