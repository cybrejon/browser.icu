export default {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    extraFileExtensions: [".svelte"],
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".svelte"],
      },
    },
  ],
  ignorePatterns: [".svelte-kit/", "node_modules/", "dist/", "build/"],
  rules: {
    // Disable noisy TS rules
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-object-type": "off",
    "@typescript-eslint/ban-ts-comment": "off",
  },
};
