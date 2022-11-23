import { Result } from "axe-core";

export function terminalLog(violations: Result[]) {
  cy.task(
    "log",
    `${violations.length} accessibility violation${violations.length === 1 ? "" : "s"} ${
      violations.length === 1 ? "was" : "were"
    } detected`
  );

  const violationData = violations.map(({ id, impact, description, nodes }) => ({
    id,
    impact,
    description,
    nodes: nodes.length
  }));
  cy.task("table", violationData);
  console.table(violationData);
}

export function checkAccessibility(delay?: number) {
  if (delay) {
    cy.wait(delay);
  }
  cy.injectAxe();
  cy.checkA11y(undefined, undefined, terminalLog);
}
