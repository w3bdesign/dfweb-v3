/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { mockIntersectionObserver } from "jsdom-testing-mocks";

import BounceInScroll from "../../src/components/Animations/BounceInScroll.component";

mockIntersectionObserver();

describe("BounceInScroll", () => {
  beforeEach(() => {
    render(<BounceInScroll>BounceInScroll</BounceInScroll>);
  });

  it("BounceInScroll laster inn og kan vises", () => {
    const bounceinscroll = screen.getByTestId("bounceinscroll");
    expect(bounceinscroll).toBeInTheDocument();
  });

  it("Framer motion setter translateY", () => {
    const fadeup = screen.getByTestId("bounceinscroll");
    expect(fadeup).toContainHTML("translateY");
  });
});
