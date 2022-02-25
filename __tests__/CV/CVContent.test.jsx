/**
 * @jest-environment jsdom
 */

import CVContent from "../../src/components/CV/CVContent.component";
import { render } from "@testing-library/react";

describe("CVContent", () => {
  it("CVContent laster inn og kan vises", () => {
    const { container } = render(<CVContent />);
    expect(container).toMatchSnapshot();
  });
});
