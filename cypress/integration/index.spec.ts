/// <reference types="cypress"/>

import cy from "cypress";

describe(`The Home Page`, () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it(`Contains my name in the hero section`, () => {
    cy.get("h1").contains("Velkommen");
  });
});

export {};
