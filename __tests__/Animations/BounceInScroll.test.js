/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import BounceInScroll from "../../src/components/Animations/BounceInScroll.component";

describe("BounceInScroll", () => {
  it("BounceInScroll laster inn og kan vises", () => {
    render(<BounceInScroll>BounceInScroll</BounceInScroll>);
    const bounceinscroll = screen.getByTestId("bounceinscroll");
    expect(bounceinscroll).toBeInTheDocument();
  });
});
