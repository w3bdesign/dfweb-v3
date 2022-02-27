/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import FadeUp from "../../src/components/Animations/FadeUp.component";

describe("FadeUp", () => {
  it("FadeUp laster inn og kan vises", () => {
    render(<FadeUp delay={1}>FadeUp</FadeUp>);
    const fadeup = screen.getByTestId("fadeup");
    expect(fadeup).toBeInTheDocument();
  });
});
