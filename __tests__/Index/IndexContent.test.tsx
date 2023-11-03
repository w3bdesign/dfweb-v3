/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { mockIntersectionObserver } from "jsdom-testing-mocks";

import IndexContent from "../../src/components/Index/IndexContent.component";

import pageContent from "../../__mocks__/pagecontent.json";

mockIntersectionObserver();

describe("IndexContent", () => {
  beforeEach(() => {
    render(<IndexContent pageContent={pageContent} />);
  });

  it("Hero laster inn og kan vises", () => {
    const hero = screen.getByRole("article", { name: /kontainer for animasjoner av introtekst/i });
    expect(hero).toBeInTheDocument();
  });

  it("Om meg laster inn og kan vises", () => {
    const ommeg = screen.getByRole("heading", { name: /om meg/i });
    expect(ommeg).toBeInTheDocument();
  });

  it("Prosjekter laster inn og kan vises", () => {
    const prosjekter = screen.getByRole("heading", { name: /prosjekter/i });
    expect(prosjekter).toBeInTheDocument();
  });
});
