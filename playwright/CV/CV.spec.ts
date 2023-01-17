import { test, expect } from "@playwright/test";

test.describe("CV", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/cv");
  });

  test("It should render CV", async ({ page }) => {
    const cv = page.getByText(
      "CVNøkkelkvalifikasjonerTotalt over 10 års erfaring med utvikling og design av ne"
    );
    await page.screenshot({ path: "screenshot.png" });
    await expect(cv).toContainText(
      "CVNøkkelkvalifikasjonerTotalt over 10 års erfaring med utvikling og design av ne"
    );
  });

  test("Download button should be visible", async ({ page }) => {
    const download = page.getByRole("link", { name: "Last ned PDF" });
    await expect(download).toBeVisible();
  });
});
