/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import FadeDown from "../../src/components/Animations/FadeDown.component";

describe("FadeDown", () => {
  beforeEach(() => {
    render(<FadeDown delay={1}>FadeDown</FadeDown>);
  });

  it("FadeDown laster inn og kan vises", () => {
    const fadedown = screen.getByTestId("fadedown");
    expect(fadedown).toBeInTheDocument();
  });

  it("Framer motion setter translateY", () => {
    const fadedown = screen.getByTestId("fadedown");
    expect(fadedown).toContainHTML("translateY");
  });
});
