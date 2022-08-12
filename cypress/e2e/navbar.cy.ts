/// <reference types="cypress"/>

describe("Test at navigasjon fungerer", () => {
  const navlink = ".navbar-link";
  const mainUrl = "http://localhost:3000/";

  beforeEach(() => {
    cy.visit("/");
  });

  it("Test at vi kan navigere til Hjem", () => {
    cy.get(navlink).eq(0).click();
    cy.url().should("be.equal", `${mainUrl}`);
    cy.contains("Hei!");
  });

  it("Test at vi kan navigere til CV", () => {
    cy.get(navlink).eq(2).click();
    cy.url().should("be.equal", `${mainUrl}/cv`);
    cy.contains("CV");
  });

  it("Test at vi kan navigere til Kontakt", () => {
    cy.get(navlink).eq(4).click();
    cy.url().should("be.equal", `${mainUrl}/kontakt`);
    cy.contains("Kontakt");
  });
});

export {};
