/// <reference types="cypress"/>

// https://cheatography.com/aiqbal/cheat-sheets/cypress-io/
describe("Forside", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Har ingen a11y problemer", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);
    cy.injectAxe();
    cy.checkA11y();
  });

  it(`Hei vises på forsiden`, () => {
    cy.get('[data-cy="hei"]').contains("Hei!");
  });

  it(`Om meg vises på forsiden`, () => {
    cy.get('[data-cy="Om Meg"]').contains("Om Meg");
  });

  it(`Prosjekter vises på forsiden`, () => {
    cy.get('[data-cy="Prosjekter"]').contains("Prosjekter");
  });
});

export {};
