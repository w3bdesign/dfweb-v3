/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import FadeDown from "../../src/components/Animations/FadeDown.component";

describe("FadeDown", () => {
  it("FadeDown laster inn og kan vises", () => {
    const { container } = render(<FadeDown delay={1}>FadeDown</FadeDown>);
    expect(container).toMatchSnapshot();
  });
});
