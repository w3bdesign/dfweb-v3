/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";

describe("Forside", () => {
  it("Welcome to next eksisterer ikke", () => {
    render(<Home />);
    const welcometoNext = screen.queryByText("heading", {
      name: /welcome to next/i
    });

    expect(welcometoNext).not.toBeInTheDocument();
  });

  it("Om Meg eksisterer", () => {
    render(<Home />);
    const banner = screen.getByRole("banner", {
      name: /Header for logo og navigasjon/i
    });
    expect(banner).toBeInTheDocument();
  });

  it("Hero eksisterer", () => {
    const { getByTestId } = render(<Home />);
    const MainHero = getByTestId("main-hero");
    expect(MainHero).toBeInTheDocument();
  });

  it("Hei eksisterer", () => {
    render(<Home />);
    const Hei = screen.getByRole("heading", { name: /hei!/i });
    expect(Hei).toBeInTheDocument();
  });
});
