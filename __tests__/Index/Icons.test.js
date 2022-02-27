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
    const react = screen.getByLabelText("React ikon");
    expect(react).toBeInTheDocument();
  });

  it("Vue laster inn og kan vises", () => {
    const vue = screen.getByLabelText("Vue ikon");
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
    const php = screen.getByLabelText("PHP  ikon");
    expect(php).toBeInTheDocument();
  });
});
