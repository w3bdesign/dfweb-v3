/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("Welcome to next eksisterer ikke", () => {
    render(<Home />);
    const welcometoNext = screen.queryByText("heading", {
      name: /welcome to next/i,
    });
    console.log(welcometoNext);
    expect(welcometoNext).not.toBeInTheDocument();
  });

  it("Velkommen til Index eksisterer", () => {
    render(<Home />);
    const velkommen = screen.getByRole("heading", {
      name: /velkommen til Index/i,
    });
    expect(velkommen).toBeInTheDocument();
  });
});
