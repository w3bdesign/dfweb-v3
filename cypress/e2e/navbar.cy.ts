/// <reference types="cypress"/>

describe("Test at navigasjon fungerer", () => {
  const mainUrl = "http://localhost:3000";

  beforeEach(() => {
    cy.visit(mainUrl);
  });

  it("Test at vi kan navigere til Hjem", () => {
    cy.get('[data-testid="Hjem"]').click();
    cy.url().should("be.equal", `${mainUrl}/`);
    cy.contains("Hei!");
  });

  it("Test at vi kan navigere til CV", () => {
    cy.get('[data-testid="CV"]').click();
    cy.url().should("be.equal", `${mainUrl}/cv`);
    cy.contains("CV");
  });

  it("Test at vi kan navigere til Kontakt", () => {
    cy.get('[data-testid="Kontakt"]').click();
    cy.url().should("be.equal", `${mainUrl}/kontakt`);
    cy.contains("Kontakt");
  });
});

export {};
