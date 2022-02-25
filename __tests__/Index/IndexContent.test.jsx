/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import IndexContent from "../../src/components/Index/IndexContent.component";

describe("IndexContent", () => {
  it("IndexContent laster inn og kan vises", () => {
    const { container } = render(<IndexContent />);
    expect(container).toMatchSnapshot();
  });
});
