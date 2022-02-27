/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import ProsjekterListings from "../../src/components/Prosjekter/ProsjekterListings.component";

describe("ProsjekterListings", () => {
  beforeEach(() => {
    render(<ProsjekterListings />);
  });

  it("ProsjekterListings laster inn og kan vises", () => {
    const prosjekterlistings = screen.getByRole("main", { name: /innhold portefølje/i });
    expect(prosjekterlistings).toBeInTheDocument();
  });
});
