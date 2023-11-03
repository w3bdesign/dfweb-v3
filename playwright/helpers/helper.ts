import { test, expect } from "@playwright/test";

import AxeBuilder from "@axe-core/playwright";

export const accessibilityFixture = () => {
  test("Har ingen accessibility issues", async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    const feil = accessibilityScanResults.violations;
    if (feil.length > 0) {
      await page.screenshot({ path: "screenshot.png" });
    }
    expect(accessibilityScanResults.violations).toEqual([]);
  });
};

export const testTittel = (tittel: string) => {
  test("Viser tittel", async ({ page }) => {
    const header = page.getByRole("heading", { name: tittel });
    await expect(header).toContainText(tittel);
  });
};

export const testIkon = (ikon: string) => {
  test(`Skal vise ${ikon} ikon`, async ({ page }) => {
    const ikonTest = page.getByTestId(ikon);
    await expect(ikonTest).toBeVisible();
  });
};
