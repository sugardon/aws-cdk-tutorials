import { describe, test, expect } from "vitest";
import { helloWorld } from "./hello-world";

describe("helloWorld", () => {
  test("Success", async () => {
    await expect(helloWorld()).resolves.toBe(undefined);
  });
});
