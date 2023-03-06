import { test, expect } from "@playwright/test";

import { accessibilityFixture } from "../helpers/helper";

test.describe("Prosjekter", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/prosjekter");
  });

  test("Viser tittel", async ({ page }) => {
    const header = page.getByRole("heading", { name: "Prosjekter" });
    await expect(header).toContainText("Prosjekter");
  });

  test("Filter skal virke", async ({ page }) => {
    await page.getByRole("combobox", { name: "kategorifilter" }).selectOption("PHP");
    const project = page.getByTestId("projectdiv");
    const count = await project.count();
    await expect(count).toBeGreaterThan(0);
  });

  accessibilityFixture();
});
