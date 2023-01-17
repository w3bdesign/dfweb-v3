import { test, expect } from "@playwright/test";

test.describe("Kontakt", () => {
  test.beforeEach(async ({ page }) => {
    const url = "http://localhost:3000/kontakt";
    await page.goto(url);
  });

  test("Viser tittel", async ({ page }) => {
    const header = page.getByRole("heading", { name: "Kontakt" });
    await expect(header).toContainText("Kontakt");
  });

  /*test("Sjekk at vi ikke kan sende inn et ufullstendig skjema", async ({ page }) => {
    const fulltNavn = "Fullt navn";
    await page.getByLabel(fulltNavn).fill("brrrrr");
    await page.getByRole("button", { name: "Send skjema" }).click();

    const navn = page.getByLabel(fulltNavn);
    await expect(navn).toContainText(fulltNavn);
  });*/
});
