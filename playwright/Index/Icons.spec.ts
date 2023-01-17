import { test, expect } from "@playwright/test";

test.describe("Icons", () => {
  test.beforeEach(async ({ page }) => {
    const url = "http://localhost:3000/";
    await page.goto(url);
  });

  test("It should render icons", async ({ page }) => {
    const icons = page.getByTestId("icons");
    await expect(icons).toBeVisible();
  });

  test("It should render React icon", async ({ page }) => {
    const react = page.getByTestId("React");
    await expect(react).toBeVisible();
  });

  test("It should render Vue icon", async ({ page }) => {
    const vue = page.getByTestId("Vue");
    await expect(vue).toBeVisible();
  });

  test("It should render Typescript icon", async ({ page }) => {
    const typescript = page.getByTestId("Typescript");
    await expect(typescript).toBeVisible();
  });
});
