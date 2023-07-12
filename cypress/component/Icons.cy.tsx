// cypress/component/Icons.cy.tsx

import Icons from "../../src/components/Index/Icons.component";

it("renders all icons", () => {
  cy.mount(<Icons />);

  cy.get('[data-testid="icons"]').within(() => {
    cy.get('[data-testid="React"]').should("be.visible");
    cy.get('[data-testid="Vue"]').should("be.visible");
    cy.get('[data-testid="Typescript"]').should("be.visible");
    cy.get('[data-testid="Wordpress"]').should("be.visible");
    cy.get('[data-testid="PHP"]').should("be.visible");
  });
});
