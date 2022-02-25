/**
 * @jest-environment jsdom
 */

import Icons from "../../src/components/Index/Icons.component";
import { render } from "@testing-library/react";

describe("Icons ", () => {
  it("Icons laster inn og kan vises", () => {
    const { container } = render(<Icons />);
    expect(container).toMatchSnapshot();
  });
});
