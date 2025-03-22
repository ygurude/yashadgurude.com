// import { defineConfig } from "eslint/config";
// import globals from "globals";
// import js from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";
// import next from "@next/eslint-plugin-next";




// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
//   tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
//   next.configs.recommended,
// ]);

import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import next from "@next/eslint-plugin-next";

export default defineConfig({
  root: true, // Ensures ESLint looks for the configuration in the root of the project
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "next/core-web-vitals", // Next.js recommended rules
    "plugin:@typescript-eslint/recommended", // TypeScript recommended rules
  ],
  parserOptions: {
    ecmaVersion: 2021, // Modern JavaScript features
    sourceType: "module", // For ES module syntax
    ecmaFeatures: {
      jsx: true, // Allows JSX
    },
  },
  globals: globals.browser, // If you're using browser globals
  plugins: [pluginReact, tseslint], // Use the plugins for React and TypeScript
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser", // Use the TypeScript parser for TypeScript files
      parserOptions: {
        project: "./tsconfig.json", // Path to your TypeScript config
      },
      rules: {
        // TypeScript-specific linting rules can go here
      },
    },
  ],
  linterOptions: {
    reportUnusedDisableDirectives: true, // Enable reporting of unused eslint-disable directives
  },
  rules: {
    // General rules go here, for example:
    "react/prop-types": "off", // Disable prop-types rule if using TypeScript
  },
});
