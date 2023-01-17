import { test, expect } from "@playwright/test";

test.describe("Forside", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("Har innhold på forsiden", async ({ page }) => {
    const h1 = await page.locator("h1");
    const count = await h1.count();
    await expect(count).toBeGreaterThan(0);
  });

  test("Prosjekter link fungerer", async ({ page }) => {
    await page.getByTestId("Prosjekter").click();
    await expect(page).toHaveURL("http://localhost:3000/prosjekter");
  });
});
