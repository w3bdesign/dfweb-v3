/// <reference types="cypress"/>
/// <reference types="cypress-axe"/>
/// <reference types="axe-core"/>

import { checkAccessibility } from "../support/functions";

describe("Test at prosjekter vises og at filter fungerer", () => {
  beforeEach(() => {
    cy.visit("/prosjekter");
  });

  it("Velg PHP og se at vi bare får ett resultat", () => {
    cy.get('[data-cy="kategorifilter"]').select("PHP");
    cy.get('[data-cy="prosjektgrid"]').find('[data-cy="projectdiv"]').should("have.length", 1);
  });

  it("Prosjekter skal ikke ha noen a11y feilmeldinger", () => {
    checkAccessibility(5000);
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
