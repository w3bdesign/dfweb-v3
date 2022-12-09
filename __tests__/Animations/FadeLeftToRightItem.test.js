/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import FadeLeftToRightItem from "../../src/components/Animations/FadeLeftToRightItem.component";

describe("FadeLeftToRight", () => {
  beforeEach(() => {
    render(<FadeLeftToRightItem delay={1}>FadeLeftToRightItem</FadeLeftToRightItem>);
  });

  it("FadeLeftToRight laster inn og kan vises", () => {
    const fadelefttorightitem = screen.getByTestId("fadelefttorightitem");
    expect(fadelefttorightitem).toBeInTheDocument();
  });

  it("Framer motion rendrer div tag", () => {
    const fadelefttorightitem = screen.getByTestId("fadelefttorightitem");
    expect(fadelefttorightitem).toContainHTML("div");
  });
});
