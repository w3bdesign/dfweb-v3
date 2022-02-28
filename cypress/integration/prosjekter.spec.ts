/// <reference types="cypress"/>

describe("Test at prosjekter vises og at filter fungerer", () => {
  beforeEach(() => {
    cy.visit("/prosjekter");
  });
  it("Har ingen a11y problemer", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1500);
    cy.injectAxe();
    cy.checkA11y();
  });

  it("Velg PHP og se at vi bare får ett resultat", () => {
    cy.get('[data-cy="kategorifilter"]').select("PHP");
    cy.get('[data-cy="prosjektgrid"]').find('[data-cy="projectdiv"]').should("have.length", 1);
  });

  context("Test filter på mobil", () => {
    beforeEach(() => {
      cy.viewport("iphone-5");
      cy.visit("/prosjekter");
    });

    it("Test at vi kan velge kategori på mobil", () => {
      cy.get('[data-cy="kategorifilter"]').select("PHP");
      cy.get('[data-cy="prosjektgrid"]').find('[data-cy="projectdiv"]').should("have.length", 1);
    });
  });
});

export {};
