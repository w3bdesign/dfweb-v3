/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import FadeUp from "../../src/components/Animations/FadeUp.component";

describe("FadeUp", () => {
  it("FadeUp laster inn og kan vises", () => {
    const { container } = render(<FadeUp delay={1}>FadeUp</FadeUp>);
    expect(container).toMatchSnapshot();
  });
});
