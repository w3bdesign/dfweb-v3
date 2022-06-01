/* eslint-disable sonarjs/no-duplicate-string */
/// <reference types="cypress"/>

describe("Mobilmeny", () => {
  const hamburger = "[data-cy=hamburger]";
  const mobileMenuItem = "[data-cy=mobile-menu-item]";

  context("Standard oppløsning", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("Hamburger er ikke synlig", () => {
      cy.get("#main-navigation").should("be.visible");
      cy.get(hamburger).should("not.be.visible");
    });
  });

  context("Test Iphone 5 oppløsning", () => {
    beforeEach(() => {
      // Bruk iphone-5 som standard oppløsning
      cy.viewport("iphone-5");
      cy.visit("/");
    });

    it("Hamburger er synlig", () => {
      cy.get(hamburger).should("be.visible");
    });

    it("Mobilmeny er synlig etter at vi klikker på hamburger", () => {
      cy.get(hamburger).click();
      cy.get(mobileMenuItem).should("be.visible");
    });
  });
});

export {};
