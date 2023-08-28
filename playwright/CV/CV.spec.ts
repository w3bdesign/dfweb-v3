import { test, expect } from "@playwright/test";

import { accessibilityFixture, testTittel } from "../helpers/helper";

test.describe("CV", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/cv");
  });

  test("Skal vise CV", async ({ page }) => {
    // Wait for the PDF to load by checking for the presence of specific text
    await page.waitForFunction(
      () => {
        return document.body.textContent?.includes("DANIEL FJELDSTAD");
      },
      { timeout: 10000 }
    );

    // Save a screenshot of the current page
    await page.screenshot({ path: "screenshots/cv.png" });

    // Use the more specific selector and select the first occurrence
    const cv = page.locator('span[dir="ltr"][role="presentation"] >> text=DANIEL FJELDSTAD').nth(0);

    await expect(cv).toContainText("DANIEL FJELDSTAD", { timeout: 15000 });
    // Save a screenshot of the current page
    await page.screenshot({ path: "screenshots/after-cv-page.png" });
  });

  test("Nedlastingsknapp er synlig", async ({ page }) => {
    const download = page.getByRole("link", { name: "Last ned PDF" });
    await expect(download).toBeVisible();
  });

  accessibilityFixture();

  testTittel("CV");
});
