/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Hero from "../../src/components/Index/Hero.component";

import heromock from "../../__mocks__/hero.json";

describe("Hero", () => {
  it("Hero laster inn og kan vises", () => {
    render(<Hero content={heromock} />);
    const hero = screen.getByText(/hei!/i);
    expect(hero).toBeInTheDocument();
  });
});
