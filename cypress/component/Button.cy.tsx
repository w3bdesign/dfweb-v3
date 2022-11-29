/// <reference types="cypress" />

import Button from "../../src/components/UI/Button.component";

// https://larsmagnus.co/blog/component-testing-with-cypress-in-next-js

// 

describe("<Button>", () => {
  it("mounts", () => {
    cy.mount(<Button>Test</Button>);
    cy.get('[data-cy=submit]').should('have.text', 'Test')

  });
});
