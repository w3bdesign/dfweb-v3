/// <reference types="cypress" />

import Button from "../../src/components/UI/Button.component";

// https://larsmagnus.co/blog/component-testing-with-cypress-in-next-js

describe("<Button>", () => {
  it("mounts", () => {
    cy.mount(<Button>Test</Button>);
    cy.get("[data-cy=submit]").should("have.text", "Test");
  });

  // Test href prop
  it("navigates when clicked if href provided", () => {
    cy.mount(<Button href="https://example.com">Button</Button>);
    cy.get("a").click();
    cy.url().should("include", "example.com");
  });

  it("renders as submit button", () => {
    cy.mount(<Button type="submit">Button</Button>);
    cy.get('button[type="submit"]').should("exist");
  });

  it("renders as reset button", () => {
    cy.mount(<Button type="reset">Button</Button>);
    cy.get('button[type="reset"]').should("exist");
  });
});
