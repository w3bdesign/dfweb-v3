/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import Icons from "../../src/components/Index/Icons.component";

describe("Icons ", () => {
  it("Icons laster inn og kan vises", () => {
    const { queryByTestId } = render(<Icons />);
    expect(queryByTestId("icons")).toBeTruthy();
  });
});
