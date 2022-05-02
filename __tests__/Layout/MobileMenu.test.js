/**
 * @jest-environment jsdom
 */

import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import MobileMenu from "../../src/components/Layout/MobileMenu.component";

describe("MobileMenu", () => {
  const testidMenu = "mobile-menu";
  const user = userEvent.setup();
  beforeEach(() => {
    render(<MobileMenu />);
  });

  it("MobileMenu laster inn og kan vises", () => {
    const mobilemenu = screen.getByTestId(testidMenu);
    expect(mobilemenu).toBeInTheDocument();
  });

  it("Hjem linken eksisterer i menyen", () => {
    const hjem = screen.getByText(/hjem/i);
    expect(hjem).toBeInTheDocument();
  });

  it("Prosjekter linken eksisterer i menyen", () => {
    const prosjekter = screen.getByText(/prosjekter/i);
    expect(prosjekter).toBeInTheDocument();
  });

  it("CV linken eksisterer i menyen", () => {
    const cv = screen.getByText(/cv/i);
    expect(cv).toBeInTheDocument();
  });

  it("Github linken eksisterer i menyen", () => {
    const github = screen.getByText(/github/i);
    expect(github).toBeInTheDocument();
  });

  it("Kontakt linken eksisterer i menyen", () => {
    const kontakt = screen.getByText(/kontakt/i);
    expect(kontakt).toBeInTheDocument();
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
