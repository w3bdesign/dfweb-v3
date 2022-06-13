/// <reference types="cypress"/>

describe(`Test at CV vises og laster`, () => {
  beforeEach(() => {
    cy.visit("/cv");
  });

  it(`Se at CV vises`, () => {
    cy.get('.-mt-12 > .react-pdf__Page__svg > [version="1.1"]').should("be.visible");
  });
});

export {};
