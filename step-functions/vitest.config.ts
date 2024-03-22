import { defineConfig, configDefaults } from "vitest/config";

const config = defineConfig({
  test: {
    exclude: [...configDefaults.exclude, "cdk.out/**/*"],
  },
});
export default config;
