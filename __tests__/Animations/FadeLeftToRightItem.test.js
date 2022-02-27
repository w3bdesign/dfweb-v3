/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import FadeLeftToRightItem from "../../src/components/Animations/FadeLeftToRightItem.component";

describe("FadeLeftToRight", () => {
  it("FadeLeftToRight laster inn og kan vises", () => {
    render(<FadeLeftToRightItem delay={1}>FadeLeftToRightItem</FadeLeftToRightItem>);
    const fadelefttorightitem = screen.getByTestId("fadelefttorightitem");
    expect(fadelefttorightitem).toBeInTheDocument();
  });
});
