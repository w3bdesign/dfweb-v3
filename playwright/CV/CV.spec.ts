import { test, expect } from "@playwright/test";

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
      "CVNøkkelkvalifikasjonerTotalt over 10 års erfaring med utvikling og design av ne"
    );
  });

  test("Nedlastingsknapp er synlig", async ({ page }) => {
    const download = page.getByRole("link", { name: "Last ned PDF" });
    await expect(download).toBeVisible();
  });
});
