/// <reference types="cypress" />

import { Test } from "../../src/components/UI/Test.component";

describe("<Stepper>", () => {
  it("mounts", () => {
   
    cy.mount(<Test />);
  });
});
