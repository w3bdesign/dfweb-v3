/// <reference types="cypress"/>

import Hero from "../../src/components/Index/Hero.component";

const content = [
  {
    text: "Hei!"
  },
  {
    text: "Jeg heter Daniel Fjeldstad og er en webutvikler."
  },
  {
    text: "Jeg kan PHP, Wordpress, Javascript, Typescript, React, Vue, Docker, Photoshop og mye mer."
  }
];

it("Viser Hero komponentt", () => {
  cy.mount(<Hero content={content} />);
  cy.contains("Hei!").should("be.visible");
});

it("Viser PHP tekst", () => {
  cy.mount(<Hero content={content} />);
  cy.contains("PHP").should("be.visible");
});
