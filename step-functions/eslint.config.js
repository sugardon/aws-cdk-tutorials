import standardWithTypescript from "eslint-config-standard-with-typescript";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-config-prettier";
import tsParser from "@typescript-eslint/parser";

const config = [
  {
    ignores: ["dis"],
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      import: importPlugin,
    },
    rules: {
      ...typescriptEslint.configs.recommended.rules,
      ...standardWithTypescript.rules,
      "typescript-eslint/restrict-plus-operands": "off",
      "no-new ": "off",
      "import/order": "error",
    },
  },
  prettier,
];
export default config;
