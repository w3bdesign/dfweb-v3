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

  it("Document eksisterer", () => {
    expect(document).toBeTruthy();
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
});
