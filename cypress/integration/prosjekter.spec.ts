/// <reference types="cypress"/>

describe("Test at prosjekter vises og at filter fungerer", () => {
  it("Velg PHP og se at vi bare får ett resultat", () => {
    cy.visit("/prosjekter");
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
