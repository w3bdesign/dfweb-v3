/**
 * @jest-environment jsdom
 */

import Button from "../src/components/UI/Button.component";
import { render } from "@testing-library/react";

describe("Button", () => {
  it("Button laster inn og kan vises", () => {
    const { container } = render(<Button onClick={jest.fn}>Button</Button>);
    expect(container).toMatchSnapshot();
  });
});
