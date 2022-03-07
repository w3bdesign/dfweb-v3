/// <reference types="cypress"/>

describe("Test at navigasjon fungerer", () => {
  const navlink = ".navbar-link";

  beforeEach(() => {
    cy.visit("/");
  });

  it("Test at vi kan navigere til Hjem", () => {
    cy.get(navlink).eq(0).click();
    cy.url().should("be.equal", "http://localhost:3000/");
    cy.contains("Hei!");
  });

  it("Test at vi kan navigere til Prosjekter", () => {
    cy.get(navlink).eq(1).click();
    cy.url().should("be.equal", "http://localhost:3000/prosjekter");
    cy.contains("Prosjekter");
  });

  it("Test at vi kan navigere til CV", () => {
    cy.get(navlink).eq(2).click();
    cy.url().should("be.equal", "http://localhost:3000/cv");
    cy.contains("CV");
  });

  it("Test at vi kan navigere til Kontakt", () => {
    cy.get(navlink).eq(4).click();
    cy.url().should("be.equal", "http://localhost:3000/kontakt");
    cy.contains("Kontakt");
  });
});

export {};
