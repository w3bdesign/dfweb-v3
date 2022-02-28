/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Hero from "../../src/components/Index/Hero.component";

describe("Hero", () => {
  it("Hero laster inn og kan vises", () => {
    render(<Hero />);
    const hero = screen.getByText(/hei!/i)
    expect(hero).toBeInTheDocument();
  });
});
