/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import Home from "../src/pages/index";

const server = setupServer(
  rest.get("/greeting", (_req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Forside", () => {
  it("Welcome to next eksisterer ikke", () => {
    render(<Home />);
    const welcometoNext = screen.queryByText("heading", {
      name: /welcome to next/i
    });

    expect(welcometoNext).not.toBeInTheDocument();
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
