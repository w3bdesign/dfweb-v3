/// <reference types="cypress" />

import Icons from "../../src/components/Index/Icons.component";

const beVisible = "be.visible";

it("Renders all icons", () => {
  cy.mount(<Icons />);

  cy.get('[data-testid="icons"]').within(() => {
    cy.get('[data-testid="React"]').should(beVisible);
    cy.get('[data-testid="Vue"]').should(beVisible);
    cy.get('[data-testid="Typescript"]').should(beVisible);
    cy.get('[data-testid="Wordpress"]').should(beVisible);
    cy.get('[data-testid="PHP"]').should(beVisible);
  });
});
