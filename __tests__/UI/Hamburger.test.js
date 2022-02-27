/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Hamburger from "../../src/components/UI/Hamburger.component";

describe("Hamburger", () => {
  it("Hamburger laster inn og kan vises", () => {
    render(<Hamburger />);
    const hamburger = screen.getByRole("button", { name: /hamburger/i });
    expect(hamburger).toBeInTheDocument();
  });
});
