/// <reference types="cypress" />

import Icons from "../../src/components/Index/Icons.component";

it("Renders all icons", () => {
  cy.mount(<Icons />);

  cy.get('[data-testid="icons"]').within(() => {
    cy.get('[data-testid="React"]').should("be.visible");
    cy.get('[data-testid="Vue"]').should("be.visible");
    cy.get('[data-testid="Typescript"]').should("be.visible");
    cy.get('[data-testid="Wordpress"]').should("be.visible");
    cy.get('[data-testid="PHP"]').should("be.visible");
  });
});
