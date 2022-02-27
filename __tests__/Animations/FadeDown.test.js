/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import FadeDown from "../../src/components/Animations/FadeDown.component";

describe("FadeDown", () => {
  it("FadeDown laster inn og kan vises", () => {
    render(<FadeDown delay={1}>FadeDown</FadeDown>);
    const fadedown = screen.getByTestId("fadedown");
    expect(fadedown).toBeInTheDocument();
  });
});
