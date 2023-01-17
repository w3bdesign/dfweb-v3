import { test, expect } from "@playwright/test";

test.describe("index", () => {
  test("It should have some content on index", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    const h1 = await page.locator("h1");
    const count = await h1.count();
    await expect(count).toBeGreaterThan(0);
  });

  test("It should navigate to and render the prosjekter page", async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.getByTestId('Prosjekter').click();
    
    await expect(page).toHaveURL("http://localhost:3000/prosjekter");
  });
});
