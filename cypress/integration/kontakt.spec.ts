/// <reference types="cypress"/>

// https://cheatography.com/aiqbal/cheat-sheets/cypress-io/
describe("Kontakt", () => {
  beforeEach(() => {
    cy.visit("/kontakt");
  });

  it(`Navn vises`, () => {
    cy.get("#navn").should("be.visible");
  });

  it(`Telefon vises`, () => {
    cy.get("#phone").should("be.visible");
  });

  it(`Hva ønsker du å si vises`, () => {
    cy.get("#textarea").should("be.visible");
  });
});

export {};
