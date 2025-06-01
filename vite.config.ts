import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    preact(),
    compression({
      ext: ".gz",
      algorithm: "gzip",
      threshold: 0, // ← Compress even small files (index.html is often < 1KB)
      deleteOriginFile: true, // ← Keep the original .html file
      verbose: true,
      filter: /\.(js|css|html|svg|json)$/i, // ← Make sure .html is included
    }),
  ],
});
