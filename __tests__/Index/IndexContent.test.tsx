/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import IndexContent from "../../src/components/Index/IndexContent.component";

import pagecontent from "../../__mocks__/pagecontent.json";

describe("IndexContent", () => {
  beforeEach(() => {
    render(<IndexContent pagecontent={pagecontent} />);
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
