/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import FadeLeftToRight from "../../src/components/Animations/FadeLeftToRight.component";

describe("FadeLeftToRight", () => {
  beforeEach(() => {
    render(<FadeLeftToRight delay={1}>FadeLeftToRight</FadeLeftToRight>);
  });

  it("FadeLeftToRight laster inn og kan vises", () => {
    const fadelefttoright = screen.getByTestId("fadelefttoright");
    expect(fadelefttoright).toBeInTheDocument();
  });

  it("Framer motion setter opacity", () => {
    const fadelefttoright = screen.getByTestId("fadelefttoright");
    expect(fadelefttoright).toContainHTML("opacity: 0");
  });
});
