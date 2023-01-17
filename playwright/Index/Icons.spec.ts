import { test, expect } from "@playwright/test";

test.describe("Ikoner", () => {
  test.beforeEach(async ({ page }) => {
    const url = "http://localhost:3000/";
    await page.goto(url);
  });

  test("Skal vise ikoner", async ({ page }) => {
    const icons = page.getByTestId("icons");
    await expect(icons).toBeVisible();
  });

  test("Skal vise React ikon", async ({ page }) => {
    const react = page.getByTestId("React");
    await expect(react).toBeVisible();
  });

  test("Skal vise Vue ikon", async ({ page }) => {
    const vue = page.getByTestId("Vue");
    await expect(vue).toBeVisible();
  });

  test("Skal vise Typescript ikon", async ({ page }) => {
    const typescript = page.getByTestId("Typescript");
    await expect(typescript).toBeVisible();
  });
});
