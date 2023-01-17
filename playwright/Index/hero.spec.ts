import { test, expect } from "@playwright/test";

test.describe("hero", () => {
  test.beforeEach(async ({ page }) => {
    const url = "http://localhost:3000";
    await page.goto(url);
  });

  test("It should render Hei! in Hero", async ({ page }) => {
    const header = page.getByText("Hei!");
    await expect(header).toContainText("Hei!");
  });
});
