/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Navigation", () => {
  it("Hamburger eksisterer i navigasjon", () => {
    render(<Home />);
    const Hamburger = screen.queryByRole("button", { name: /hamburger/i });
    expect(Hamburger).toBeInTheDocument();
  });

  it("Hamburger er synlig", () => {
    render(<Home />);
    const Hamburger = screen.queryByRole("button", { name: /hamburger/i });
    expect(Hamburger).toBeVisible();
  });

  it("Linken Hjem eksisterer i navigasjon", () => {
    render(<Home />);
    const linkHjem = screen.queryByRole("link", { name: /hjem/i });
    expect(linkHjem).toBeInTheDocument();
  });

  it("Linken Prosjekter eksisterer i navigasjon", () => {
    render(<Home />);
    const linkProsjekter = screen.queryByRole("link", { name: /prosjekter/i });
    expect(linkProsjekter).toBeInTheDocument();
  });

  it("Linken CV eksisterer i navigasjon", () => {
    render(<Home />);
    const linkCV = screen.queryByRole("link", { name: /cv/i });
    expect(linkCV).toBeInTheDocument();
  });

  it("Linken Github eksisterer i navigasjon", () => {
    render(<Home />);
    const linkGithub = screen.queryByRole("link", { name: /github/i });
    expect(linkGithub).toBeInTheDocument();
  });

  it("Linken Kontakt eksisterer i navigasjon", () => {
    render(<Home />);
    const linkKontakt = screen.queryByRole("link", { name: /kontakt/i });
    expect(linkKontakt).toBeInTheDocument();
  });

  it("Logo eksisterer i navigasjon", () => {
    render(<Home />);
    const logo = screen.queryByRole("img", { name: /dfweb logo/i });
    expect(logo).toBeInTheDocument();
  });
});
