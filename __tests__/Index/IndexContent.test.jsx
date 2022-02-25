/**
 * @jest-environment jsdom
 */

import IndexContent from "../../src/components/Index/IndexContent.component";
import { render } from "@testing-library/react";

describe("IndexContent", () => {
  it("IndexContent laster inn og kan vises", () => {
    const { container } = render(<IndexContent />);
    expect(container).toMatchSnapshot();
  });
});
