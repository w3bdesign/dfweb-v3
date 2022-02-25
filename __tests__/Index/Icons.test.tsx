/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import Icons from "../../src/components/Index/Icons.component";

describe("Icons ", () => {
  it("Icons laster inn og kan vises", () => {
    const { container } = render(<Icons />);
    expect(container).toMatchSnapshot();
  });
});
