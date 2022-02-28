/// <reference types="cypress"/>

// https://cheatography.com/aiqbal/cheat-sheets/cypress-io/
describe("Kontakt", () => {
  const beVisible = "be.visible";

  beforeEach(() => {
    cy.visit("/kontakt");
  });

  it(`Navn vises`, () => {
    cy.get("#navn").should(beVisible);
  });

  it(`Telefon vises`, () => {
    cy.get("#phone").should(beVisible);
  });

  it(`Hva ønsker du å si vises`, () => {
    cy.get("#textarea").should(beVisible);
  });
});

export {};
