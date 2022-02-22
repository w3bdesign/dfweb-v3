/// <reference types="cypress"/>

describe(`The Home Page`, () => {
  beforeEach(() => {
    cy.visit("/");
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
