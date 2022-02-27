/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import MobileMenu from "../../src/components/Layout/MobileMenu.component";

describe("MobileMenu", () => {
  it("MobileMenu laster inn og kan vises", () => {
    render(<MobileMenu />);
    const mobilemenu = screen.getByTestId("mobile-menu");
    expect(mobilemenu).toBeInTheDocument();
  });
});
