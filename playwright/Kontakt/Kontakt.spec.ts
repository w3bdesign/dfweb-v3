import { test, expect } from "@playwright/test";

test.describe("Kontakt", () => {
  test.beforeEach(async ({ page }) => {
    const url = "http://localhost:3000/kontakt";
    await page.goto(url);
  });

  test("Sjekk at vi ikke kan sende inn et ufullstendig skjema", async ({ page }) => {
    const fulltNavn = "Fullt navn";
    await page.getByLabel(fulltNavn).fill("brrrrr");
    await page.getByRole("button", { name: "Send skjema" }).click();

    const navn = page.getByLabel(fulltNavn);
    await expect(navn).toContainText(fulltNavn);
  });
});
