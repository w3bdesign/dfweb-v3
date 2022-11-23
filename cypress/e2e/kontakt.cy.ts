/// <reference types="cypress"/>
/// <reference types="cypress-axe"/>
/// <reference types="axe-core"/>

import { checkAccessibility } from "../support/functions";

describe("Kontakt", () => {
  const beVisible = "be.visible";

  beforeEach(() => {
    cy.visit("/kontakt");
  });

  it(`Navn vises`, () => {
    cy.get("#navn").should(beVisible);
  });

  it(`Vi kan skrive navn`, () => {
    cy.get("#navn").type("Fullt navn").should("have.value", "Fullt navn");
  });

  it("Kontakt skal ikke ha noen a11y feilmeldinger", () => {
    checkAccessibility(5000);
  });
});

export {};
