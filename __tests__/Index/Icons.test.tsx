/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Icons from "../../src/components/Index/Icons.component";

describe("Icons ", () => {
  beforeEach(() => {
    render(<Icons />);
  });

  it("React laster inn og kan vises", () => {
    const react = screen.getByLabelText(/react ikon/i);
    expect(react).toBeInTheDocument();
  });

  it("Vue laster inn og kan vises", () => {
    const vue = screen.getByLabelText(/vuejs/i);
    expect(vue).toBeInTheDocument();
  });

  it("Typescript laster inn og kan vises", () => {
    const typescript = screen.getByRole("img", { name: /typescript ikon/i });
    expect(typescript).toBeInTheDocument();
  });

  it("Wordpress laster inn og kan vises", () => {
    const wordpress = screen.getByRole("img", { name: /wordpress ikon/i });
    expect(wordpress).toBeInTheDocument();
  });

  it("PHP laster inn og kan vises", () => {
    const php = screen.getByLabelText(/php ikon/i);
    expect(php).toBeInTheDocument();
  });
});
