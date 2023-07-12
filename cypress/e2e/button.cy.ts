/// <reference types="cypress" />
/// <reference types="cypress-axe" />
/// <reference types="axe-core" />

describe("Button component", () => {
  beforeEach(() => {
    cy.visit("/kontakt");
  });

  // Test disabled prop
  it("is disabled when disabled prop provided", () => {
    cy.get("button[disabled]").should("be.disabled");
  });

  // Test href prop
  it("navigates when clicked if href provided", () => {
    cy.get("a.button").click();
    cy.url().should("include", "example.com");
  });

  // Test renderAs prop
  it('renders as anchor tag if renderAs="a"', () => {
    cy.get("a.button").should("have.attr", "href");
  });

  // Test className prop
  it("applies custom CSS class", () => {
    cy.get("button.custom-class").should("have.class", "custom-class");
  });

  // Test type prop
  it('renders a reset button when type="reset"', () => {
    cy.get('button[type="reset"]').should("exist");
  });

  it("renders a submit button", () => {
    cy.get('button[type="submit"]').contains("Submit");
  });

  it("renders a reset button", () => {
    cy.get('button[type="reset"]').contains("Reset");
  });

  it("has no detectable accessibility violations", () => {
    cy.contains("Click me").should("be.visible");

    // Check accessibility
    cy.injectAxe();
    cy.checkA11y();
  });
});
