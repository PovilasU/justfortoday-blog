import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import compression from "vite-plugin-compression";
import UnoCSS from "unocss/vite";
//import htmlMinify from "vite-plugin-html-minify";

export default defineConfig({
  plugins: [
    preact(),
    UnoCSS(),
    compression({
      // ext: ".gz",
      // algorithm: "gzip",
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 0, // Compress even small files like vite.svg
      deleteOriginFile: true, // ✅ Keep original files (important for fallback)
      verbose: true,
      filter: /\.(js|css|html|svg|json)$/i,
    }),
  ],
  build: {
    minify: "terser", // ✅ default: "esbuild", can use "terser"
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
      mangle: {
        properties: {
          regex: /^_/, // Mangle properties starting with _
        },
      },
    },
    cssCodeSplit: true, // splits CSS into smaller chunks if applicable
  },
  // base: "/justfortoday-blog/", // 👈 replace with actual GitHub repo name (this is for github pages)
});
