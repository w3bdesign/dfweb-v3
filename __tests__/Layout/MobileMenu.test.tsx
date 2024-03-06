/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";

import MobileMenu from "../../src/components/Layout/MobileMenu.component";

import linksmock from "../../__mocks__/links.json";

describe("MobileMenu - elementer eksisterer", () => {
  const testidMenu = "mobile-menu";

  beforeEach(() => {
    render(<MobileMenu links={linksmock} />);
  });

  it("MobileMenu laster inn og kan vises", () => {
    const mobilemenu = screen.getByTestId(testidMenu);
    expect(mobilemenu).toBeInTheDocument();
  });

  it("Ekspanderer hamburger meny", () => {
    const hamburger = screen.getByTestId("hamburger");

    expect(screen.getByRole("button", { name: /hamburger/i, expanded: false })).toBeInTheDocument();

    fireEvent.click(hamburger);

    expect(screen.getByRole("button", { name: /hamburger/i, expanded: true })).toBeInTheDocument();

    fireEvent.click(hamburger);

    expect(screen.getByRole("button", { name: /hamburger/i, expanded: false })).toBeInTheDocument();
  });

  it("Viser riktig antall linker", () => {
    const hamburger = screen.getByTestId("hamburger");

    fireEvent.click(hamburger);

    const menuItems = screen.getAllByRole("link");

    expect(menuItems.length).toBe(linksmock.length);
  });

  it("Åpner eksterne linker i ny fane", () => {
    const hamburger = screen.getByTestId("hamburger");

    fireEvent.click(hamburger);

    const externalLink = screen.getByRole("link", { name: /github/i });

    expect(externalLink).toHaveAttribute("target", "_blank");
    expect(externalLink).toHaveAttribute("rel", "noreferrer");
  });
});
