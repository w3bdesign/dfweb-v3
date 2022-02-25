/**
 * @jest-environment jsdom
 */

import FadeUp from "../../src/components/Animations/FadeUp.component";
import { render } from "@testing-library/react";

describe("FadeUp", () => {
  it("FadeUp laster inn og kan vises", () => {
    const { container } = render(<FadeUp delay={1}>FadeUp</FadeUp>);
    expect(container).toMatchSnapshot();
  });
});
