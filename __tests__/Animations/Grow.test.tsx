/**
 * @jest-environment jsdom
 */
////////////////

import { render, screen } from "@testing-library/react";
import Grow from "../../src/components/Animations/Grow.component";

describe("Grow", () => {
  test("renders the component", () => {
    render(<Grow>Hello World</Grow>);
    expect(screen.getByTestId("grow")).toBeInTheDocument();
  });

  test("applies the correct animation properties", () => {
    render(
      <Grow duration={0.3} delay={0.2} easing={[0.42, 0, 0.58, 1]}>
        Hello World
      </Grow>
    );
    const element = screen.getByTestId("grow");
    expect(element).toHaveStyle("transform: scale(0) translateZ(0);");
  });

  test("renders its children", () => {
    render(<Grow>Hello World</Grow>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
