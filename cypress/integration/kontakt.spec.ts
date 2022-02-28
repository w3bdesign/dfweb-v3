/// <reference types="cypress"/>

// https://cheatography.com/aiqbal/cheat-sheets/cypress-io/
describe("Kontakt", () => {
  const beVisible = "be.visible";

  beforeEach(() => {
    cy.visit("/kontakt");
  });

  it("Har ingen a11y problemer", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1500);
    cy.injectAxe();
    cy.checkA11y();
  });

  it(`Navn vises`, () => {
    cy.get("#navn").should(beVisible);
  });

  it(`Vi kan skrive navn`, () => {
    cy.get("#navn").type("Fullt navn").should("have.value", "Fullt navn");
  });
});

export {};
