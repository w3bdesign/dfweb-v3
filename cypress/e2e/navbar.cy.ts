/// <reference types="cypress"/>

describe("Test at navigasjon fungerer", () => {
  const mainUrl = "http://localhost:3000";

  beforeEach(() => {
    cy.visit(mainUrl);
  });

  const links = [
    { link: "Hjem", testString: "Hei!", url: "" },
    //{ link: "CV", testString: "CV", url: "cv" },
    { link: "Kontakt", testString: "Kontakt", url: "kontakt" }
  ];

  const testLink = (link: string, testString: string, url: string) => {
    it(`Test at vi kan navigere til ${link}`, () => {
      cy.get(`[data-testid=${link}]`).click();
      cy.url().should("be.equal", `${mainUrl}/${url}`);
      cy.contains(testString);
    });
  };

  links.forEach((link) => testLink(link.link, link.testString, link.url));
});

export {};
