/// <reference types="cypress"/>
/// <reference types="cypress-axe"/>
/// <reference types="axe-core"/>

import { checkAccessibility } from "../support/functions";

describe(`Test at CV vises og laster`, () => {
  beforeEach(() => {
    cy.visit("/cv");
  });

  it(`Se at CV vises`, () => {
    cy.get(".container > .text-2xl").should("be.visible");
  });

  it("CV skal ikke ha noen a11y feilmeldinger", () => {
    // Vent på at animasjonene skal bli ferdige før vi tester
    checkAccessibility(5000);
  });
});

export {};
