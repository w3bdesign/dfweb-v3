/// <reference types="cypress"/>

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
});

export {};
