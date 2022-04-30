/**
 * @jest-environment jsdom
 */

import userEvent from "@testing-library/user-event";

import { render, screen } from "@testing-library/react";

import Hamburger from "../../src/components/Layout/Hamburger.component";

describe("Hamburger", () => {
  const onClick = jest.fn();
  const animatetoX = true;
  const user = userEvent.setup();

  beforeEach(() => {
    render(<Hamburger onClick={onClick} animatetoX={animatetoX} />);
  });

  it("Hamburger laster inn og kan vises", () => {
    const hamburger = screen.getByRole("button", { name: /hamburger/i });
    expect(hamburger).toBeInTheDocument();
  });

  it("Klikk på hamburger og test at aria-expanded endres på hamburger (hamburger animerer)", async () => {
    const hamburger = screen.getByRole("button", {
      name: /hamburger/i
    });
    await user.click(hamburger);
    expect(hamburger).toHaveAttribute("aria-expanded", "true");
  });
});
