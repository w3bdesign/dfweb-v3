/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import FadeLeftToRight from "../../src/components/Animations/FadeLeftToRight.component";

describe("FadeLeftToRight", () => {
  it("FadeLeftToRight laster inn og kan vises", () => {
    render(<FadeLeftToRight delay={1}>FadeLeftToRight</FadeLeftToRight>);
    const fadelefttoright = screen.getByTestId("fadelefttoright");
    expect(fadelefttoright).toBeInTheDocument();
  });
});
