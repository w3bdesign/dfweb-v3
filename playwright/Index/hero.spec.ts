import { test, expect } from "@playwright/test";

test.describe("hero", () => {
  test("It should render Hei! in Hero", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    const header = page.getByText("Hei!");   
    await expect(header).toContainText("Hei!");
  });
});
