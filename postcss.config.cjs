// postcss.config.cjs
const purgecss = require("@fullhuman/postcss-purgecss").default;
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  plugins: [
    autoprefixer,
    ...(isProduction
      ? [
          purgecss({
            content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: {
              standard: [
                /^modal/,
                /^dropdown/,
                /^collapse/,
                /^show/,
                /^fade/,
                /^tooltip/,
                /^carousel/,
              ],
            },
            blocklist: ["btn-danger", "some-unused-class"],
            keyframes: true,
            fontFace: true,
            variables: true,
          }),
          cssnano({
            preset: [
              "default",
              {
                discardComments: { removeAll: true },
                normalizeWhitespace: true,
              },
            ],
          }),
        ]
      : []),
  ],
};
