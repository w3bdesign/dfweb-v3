import { test, expect } from "@playwright/test";

import { accessibilityFixture, testTittel } from "../helpers/helper";

test.describe("CV", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/cv");
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

  accessibilityFixture();

  testTittel("CV");
});
