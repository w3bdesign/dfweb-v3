/// <reference types="cypress"/>

describe(`Test at CV vises og laster`, () => {
  beforeEach(() => {
    cy.visit("/cv");
  });

  it("Har ingen a11y problemer", () => {
    cy.contains('This page should pass A11y checks')
    cy.injectAxe();
    cy.checkA11y();
  });

  it(`Se at CV vises`, () => {
    cy.get('.-mt-12 > .react-pdf__Page__svg > [version="1.1"]').should("be.visible");
  });
});

export {};
