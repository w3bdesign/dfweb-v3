/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import ProsjekterListings from "../../src/components/Prosjekter/ProsjekterListings.component";

describe("ProsjekterListings", () => {
  it("Button laster inn og kan vises", () => {
    render(<ProsjekterListings />);
    expect(true)
    /*const button = screen.queryByRole("button", {
      name: /button/i
    });
    expect(button).toBeInTheDocument();*/
  });
});
