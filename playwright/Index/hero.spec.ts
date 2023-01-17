import { test, expect } from "@playwright/test";

test.describe("Hero", () => {
  test.beforeEach(async ({ page }) => {
    const url = "http://localhost:3000";
    await page.goto(url);
  });

  test("Skal vise Hei! i Hero", async ({ page }) => {
    const header = page.getByText("Hei!");
    await expect(header).toContainText("Hei!");
  });
});
