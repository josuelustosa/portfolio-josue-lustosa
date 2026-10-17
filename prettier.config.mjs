/**
 * Prettier defaults (double quotes, semicolons, trailing commas, 80 columns)
 * plus .editorconfig for indentation and line endings.
 *
 * @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions}
 */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  // Tailwind v4 has no config file: the plugin reads the theme from the stylesheet.
  tailwindStylesheet: "./src/app/globals.css",
  // Also sort classes passed to these helpers.
  tailwindFunctions: ["cn", "clsx"],
};

export default config;
