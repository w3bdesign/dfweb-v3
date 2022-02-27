/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import FadeUp from "../../src/components/Animations/FadeUp.component";

describe("FadeUp", () => {
  beforeEach(() => {
    render(<FadeUp delay={1}>FadeUp</FadeUp>);
  });

  it("FadeUp laster inn og kan vises", () => {
    const fadeup = screen.getByTestId("fadeup");
    expect(fadeup).toBeInTheDocument();
  });

  it("Framer motion setter translateY", () => {
    const fadeup = screen.getByTestId("fadeup");
    expect(fadeup).toContainHTML("translateY");
  });
});
