/// <reference types="cypress"/>
/// <reference types="cypress-axe"/>
/// <reference types="axe-core"/>

import { terminalLog } from "../support/functions";

describe("Accessibility testing av forside", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Forside skal ikke ha noen a11y feilmeldinger", () => {
    // Vent på at animasjonene skal bli ferdige før vi tester
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);
    cy.injectAxe();
    cy.checkA11y(undefined, undefined, terminalLog);
  });
});

export {};
