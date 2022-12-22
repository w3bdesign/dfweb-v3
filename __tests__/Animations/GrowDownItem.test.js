/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import GrowDownItem from "../../src/components/Animations/GrowDownItem.component";

describe("GrowDown", () => {
  beforeEach(() => {
    render(<GrowDownItem delay={1}>GrowDownItem</GrowDownItem>);
  });

  it("GrowDown laster inn og kan vises", () => {
    const GrowDownitem = screen.getByTestId("GrowDownitem");
    expect(GrowDownitem).toBeInTheDocument();
  });

  it("Framer motion rendrer div tag", () => {
    const GrowDownitem = screen.getByTestId("GrowDownitem");
    expect(GrowDownitem).toContainHTML("div");
  });
});
