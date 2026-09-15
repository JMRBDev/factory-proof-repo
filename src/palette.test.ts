import { describe, expect, test } from "bun:test";
import { palette } from "./palette.js";

describe("palette", () => {
  test("has primary color", () => {
    expect(palette.primary).toBe("#00aa44");
  });
});
