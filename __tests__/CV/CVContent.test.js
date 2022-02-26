/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import CVContent from "../../src/components/CV/CVContent.component";

describe("CVContent", () => {
  it("CVContent laster inn og kan vises", () => {
    const { container } = render(<CVContent />);
    expect(container).toMatchSnapshot();
  });
});
