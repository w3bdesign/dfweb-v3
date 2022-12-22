/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import GrowDown from "../../src/components/Animations/GrowDown.component";

describe("GrowDown", () => {
  beforeEach(() => {
    render(<GrowDown delay={1}>GrowDown</GrowDown>);
  });

  it("GrowDown laster inn og kan vises", () => {
    const GrowDown = screen.getByTestId("GrowDown");
    expect(GrowDown).toBeInTheDocument();
  });

  it("Framer motion setter opacity", () => {
    const GrowDown = screen.getByTestId("GrowDown");
    expect(GrowDown).toContainHTML("opacity: 0");
  });
});
