/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import PageTransition from "../../src/components/Animations/PageTransition.component";

describe("PageTransition", () => {
  beforeEach(() => {
    render(<PageTransition delay={1}>FadeUp</PageTransition>);
  });

  it("PageTransition laster inn og kan vises", () => {
    const pagetransition = screen.getByTestId("pagetransition");
    expect(pagetransition).toBeInTheDocument();
  });

  it("Framer motion setter opacity", () => {
    const pagetransition = screen.getByTestId("pagetransition");
    expect(pagetransition).toContainHTML("opacity: 0");
  });
});
