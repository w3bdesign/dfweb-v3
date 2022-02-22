/// <reference types="cypress"/>

describe(`Test at prosjekter vises og at filter fungerer`, () => {
  beforeEach(() => {
    cy.visit("/prosjekter");
  });

  it(`Velg PHP og se at vi bare får ett resultat`, () => {
    cy.get('[data-cy="kategorifilter"]').select("PHP");
    cy.get('[data-cy="prosjektgrid"]').find('[data-cy="projectdiv"]').should("have.length", 1);
  });
});

export {};
