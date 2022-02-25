/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import BounceInScroll from "../../src/components/Animations/BounceInScroll.component";

describe("BounceInScroll", () => {
  it("BounceInScroll laster inn og kan vises", () => {
    const { container } = render(<BounceInScroll>BounceInScroll</BounceInScroll>);
    expect(container).toMatchSnapshot();
  });
});
