import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("CV", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/cv");
  });

  test("Viser tittel", async ({ page }) => {
    const header = page.getByRole("heading", { name: "CV" });
    await expect(header).toContainText("CV");
  });

  test("Skal vise CV", async ({ page }) => {
    const cv = page.getByText(
      "CVNøkkelkvalifikasjonerTotalt over 10 års erfaring med utvikling og design av ne"
    );

    await expect(cv).toContainText(
      "CVNøkkelkvalifikasjonerTotalt over 10 års erfaring med utvikling og design av ne",
      { timeout: 10000 }
    );
  });

  test("Nedlastingsknapp er synlig", async ({ page }) => {
    const download = page.getByRole("link", { name: "Last ned PDF" });
    await expect(download).toBeVisible();
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
