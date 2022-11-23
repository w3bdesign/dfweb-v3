/// <reference types="cypress"/>
/// <reference types="cypress-axe"/>
/// <reference types="axe-core"/>

import { checkAccessibility } from "../support/functions";

describe("Accessibility testing av forside", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Forside skal ikke ha noen a11y feilmeldinger", () => {
    // Vent på at animasjonene skal bli ferdige før vi tester
    checkAccessibility(5000);
  });
});

export {};
