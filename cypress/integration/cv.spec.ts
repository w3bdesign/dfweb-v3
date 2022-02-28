/// <reference types="cypress"/>

describe(`Test at CV vises og laster`, () => {
  beforeEach(() => {
    cy.visit("/cv");
  });

  it("Har ingen a11y problemer", () => {
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(1500);
    cy.injectAxe();
    cy.checkA11y();
  });

  it(`Se at CV vises`, () => {
    cy.get('.-mt-12 > .react-pdf__Page__svg > [version="1.1"]').should("be.visible");
  });
});

export {};
