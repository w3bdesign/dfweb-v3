/**
 * @jest-environment jsdom
 */

import Hero from "../../src/components/Index/Hero.component";
import { render } from "@testing-library/react";

describe("Hero", () => {
  it("Hero laster inn og kan vises", () => {
    const { container } = render(<Hero />);
    expect(container).toMatchSnapshot();
  });
});
