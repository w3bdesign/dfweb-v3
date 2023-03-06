import { test, expect } from "@playwright/test";
import { testIkon } from "../helpers/helper";

test.describe("Ikoner", () => {
  test.beforeEach(async ({ page }) => {
    const url = "http://localhost:3000/";
    await page.goto(url);
  });

  test("Skal vise ikoner", async ({ page }) => {
    const icons = page.getByTestId("icons");
    await expect(icons).toBeVisible();
  });

  ["React", "Vue", "Typescript"].forEach((ikon) => {
    testIkon(ikon);
  });
});
