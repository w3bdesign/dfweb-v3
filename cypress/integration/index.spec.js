/// <reference types="cypress"/>

/*describe(`The Home Page`, () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it(`Contains my name in the hero section`, () => {
    cy.get("[data-cy=daniel]").not.contains(`Daniel`);
  });
});*/

context("Home", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("contains", () => {
    cy.get("h1").contains("Velkommen");
  });
});
