/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Navigation", () => {
  it("Linken Hjem eksisterer i navigasjon", () => {
    render(<Home />);
    const linkHjem = screen.getByRole("link", { name: /hjem/i });
    expect(linkHjem).toBeInTheDocument();
  });

  it("Linken Prosjekter eksisterer i navigasjon", () => {
    render(<Home />);
    const linkProsjekter = screen.getByRole("link", { name: /prosjekter/i });
    expect(linkProsjekter).toBeInTheDocument();
  });

  it("Linken CV eksisterer i navigasjon", () => {
    render(<Home />);
    const linkCV = screen.getByRole("link", { name: /cv/i });
    expect(linkCV).toBeInTheDocument();
  });

  it("Linken Github eksisterer i navigasjon", () => {
    render(<Home />);
    const linkGithub = screen.getByRole("link", { name: /github/i });
    expect(linkGithub).toBeInTheDocument();
  });

  it("Linken Kontakt eksisterer i navigasjon", () => {
    render(<Home />);
    const linkKontakt = screen.getByRole("link", { name: /kontakt/i });
    expect(linkKontakt).toBeInTheDocument();
  });
});
