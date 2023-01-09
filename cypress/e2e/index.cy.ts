/// <reference types="cypress"/>

// https://cheatography.com/aiqbal/cheat-sheets/cypress-io/
describe("Forside", () => {
  beforeEach(() => {
    cy.visit("/");

    // Open Eyes to start visual testing.
    // Each test should open its own Eyes for its own snapshots.
    cy.eyesOpen({
      appName: "ACME Bank", // The name of the app under test
      testName: Cypress.currentTest.title // The name of the test case
    });
  });

  it(`Hei vises på forsiden`, () => {
    cy.get('[data-cy="hei"]').contains("Hei!");

    // Verify the full login page loaded correctly.
    cy.eyesCheckWindow({
      tag: "Index page",
      target: "window",
      fully: true
    });
  });

  it(`Om meg vises på forsiden`, () => {
    cy.get('[data-cy="Om Meg"]').contains("Om Meg");
  });

  it(`Prosjekter vises på forsiden`, () => {
    cy.get('[data-cy="Prosjekter"]').contains("Prosjekter");
  });

  // This method performs cleanup after each test.
  afterEach(() => {
    // Close Eyes to tell the server it should display the results.
    cy.eyesClose();
  });
});

export {};
