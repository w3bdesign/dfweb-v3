/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Grow from "../../src/components/Animations/Grow.component";

describe("Grow", () => {
  beforeEach(() => {
    render(
      <Grow duration={0.3} delay={0.2} easing={[0.42, 0, 0.58, 1]}>
        Hello World
      </Grow>
    );
  });

  test("renders the component", () => {
    expect(screen.getByTestId("grow")).toBeInTheDocument();
  });

  test("applies the correct animation properties", () => {
    const element = screen.getByTestId("grow");
    expect(element).toHaveStyle("transform: scale(0) translateZ(0);");
  });

  test("renders its children", () => {
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  test("returns its children inside a motion.div element", () => {
    const { container } = render(<Grow>Hello World</Grow>);
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          data-testid="grow"
          style="transform: scale(0) translateZ(0);"
        >
          Hello World
        </div>
      </div>
    `);
  });
});
