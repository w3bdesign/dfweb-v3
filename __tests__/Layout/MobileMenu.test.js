/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import MobileMenu from "../../src/components/Layout/MobileMenu.component";

describe("MobileMenu - elementer eksisterer", () => {
  const testidMenu = "mobile-menu";

  beforeEach(() => {
    render(<MobileMenu />);
  });

  it("MobileMenu laster inn og kan vises", () => {
    const mobilemenu = screen.getByTestId(testidMenu);
    expect(mobilemenu).toBeInTheDocument();
  });
});
