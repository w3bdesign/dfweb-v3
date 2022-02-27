/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import PageTransition from "../../src/components/Animations/PageTransition.component";

describe("PageTransition", () => {
  it("PageTransition laster inn og kan vises", () => {
    render(<PageTransition delay={1}>FadeUp</PageTransition>);
    const pagetransition = screen.getByTestId("pagetransition");
    expect(pagetransition).toBeInTheDocument();
  });
});
