import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

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

  test("Har ingen accessibility issues", async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    const feil = accessibilityScanResults.violations;
    if (feil.length > 0) {
      await page.screenshot({ path: "screenshot.png" });
    }
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
