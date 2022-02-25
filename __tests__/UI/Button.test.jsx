/**
 * @jest-environment jsdom
 */

import Button from "../../src/components/UI/Button.component";
import { render } from "@testing-library/react";

const handleOnClick = jest.fn();

describe("Button", () => {
  it("Button laster inn og kan vises", () => {
    const { container } = render(<Button onClick={handleOnClick}>Button</Button>);
    expect(container).toMatchSnapshot();
  });
});
