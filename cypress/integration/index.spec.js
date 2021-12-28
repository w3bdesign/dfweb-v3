/* global cy, describe, beforeEach, it */

import cy from 'cy'

describe(`The Home Page`, () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it(`Contains my name in the hero section`, () => {
    cy.get("[data-cy=daniel]").not.contains(`Daniel`);
  });
});
