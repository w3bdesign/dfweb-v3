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

  test("Kan vise komponenten", () => {
    expect(screen.getByTestId("grow")).toBeInTheDocument();
  });

  test("Legger til riktige animasjoner", () => {
    const element = screen.getByTestId("grow");
    expect(element).toHaveStyle("transform: scale(0) translateZ(0);");
  });

  test("Viser children", () => {
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  test("Returnerer children i motion.div element", () => {
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
