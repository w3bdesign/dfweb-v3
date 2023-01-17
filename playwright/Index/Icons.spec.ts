import { test, expect } from "@playwright/test";

test.describe("Icons", () => {
  const url = "http://localhost:3000/";

  test("It should render icons", async ({ page }) => {
    await page.goto(url);
    const icons = page.getByTestId("icons");
    await expect(icons).toBeVisible();
  });

  test("It should render React icon", async ({ page }) => {
    await page.goto(url);
    const react = page.getByTestId("React");
    await expect(react).toBeVisible();
  });

  test("It should render Vue icon", async ({ page }) => {
    await page.goto(url);
    const vue = page.getByTestId("Vue");
    await expect(vue).toBeVisible();
  });

  test("It should render Typescript icon", async ({ page }) => {
    await page.goto(url);
    const typescript = page.getByTestId("Typescript");
    await expect(typescript).toBeVisible();
  });
});
