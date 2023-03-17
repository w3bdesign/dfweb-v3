/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Grow from "../../src/components/Animations/Grow.component";

describe("Grow", () => {
  beforeEach(() => {
    render(<Grow delay={1}>Grow</Grow>);
  });

  it("FadeUp laster inn og kan vises", () => {
    const grow = screen.getByTestId("grow");
    expect(grow).toBeInTheDocument();
  });

  it("Framer motion setter translateY", () => {
    const grow = screen.getByTestId("grow");
    expect(grow).toContainHTML("translateZ");
  });
});
