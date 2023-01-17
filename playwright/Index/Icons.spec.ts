import { test, expect } from "@playwright/test";

test.describe("Icons", () => {
  test("It should render icons", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    const icons = page.getByTestId("icons");
    await expect(icons).toBeVisible();
  });

  test("It should render React icon", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    const react = page.getByTestId("Ikke react");
    await expect(react).toBeVisible();
  });
});
