/// <reference types="cypress" />

import Button from "../../src/components/UI/Button.component";

describe("<Button>", () => {
  it("mounts", () => {
    cy.mount(<Button>Test</Button>);
    cy.get('[data-cy=submit]').should('have.text', 'Test')

  });
});
