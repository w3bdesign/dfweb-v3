/**
 * @jest-environment jsdom
 */

import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import MobileMenu from "../../src/components/Layout/MobileMenu.component";

describe("MobileMenu - test handlinger", () => {
  const testidMenu = "mobile-menu";
  const user = userEvent.setup();
  beforeEach(() => {
    render(<MobileMenu />);
  });

  it("Åpne mobilmeny og se at aria-hidden er false", async () => {
    const mobilemenu = screen.getByTestId(testidMenu);
    const hamburger = screen.getByRole("button", {
      name: /hamburger/i
    });
    await user.click(hamburger);
    expect(mobilemenu).toHaveAttribute("aria-hidden", "false");
  });

  it("Lukk mobilmeny når vi klikker utenfor menyen", async () => {
    const mobilemenu = screen.getByTestId(testidMenu);
    const hamburger = screen.getByRole("button", {
      name: /hamburger/i
    });
    await user.click(hamburger);
    await user.click(document.body);
    expect(mobilemenu).toHaveAttribute("aria-hidden", "true");
  });
});
