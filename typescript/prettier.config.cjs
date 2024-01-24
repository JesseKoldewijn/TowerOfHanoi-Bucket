/**
 * @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions & import("@trivago/prettier-plugin-sort-imports").PrettierConfig}
 */
const config = {
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],

  // General options
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,

  // Tailwindcss options
  tailwindConfig: "./tailwind.config.cjs",
  tailwindAttributes: ["className", "class"],
  tailwindFunctions: ["clsx", "cn"],

  // Sort imports options
  importOrder: ["^@react/(.*)$", "^@/(.*)$", "^[./]"],
  importOrderSortSpecifiers: true,
  importOrderSeparation: true,
};

module.exports = config;
