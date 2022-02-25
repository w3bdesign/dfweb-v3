/**
 * @jest-environment jsdom
 */

import BounceInScroll from "../../src/components/Animations/BounceInScroll.component";
import { render } from "@testing-library/react";

describe("BounceInScroll", () => {
  it("BounceInScroll laster inn og kan vises", () => {
    const { container } = render(<BounceInScroll>BounceInScroll</BounceInScroll>);
    expect(container).toMatchSnapshot();
  });
});
