/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import Button from "../../src/components/UI/Button.component";

const handleOnClick = jest.fn();

describe("Button", () => {
  it("Button laster inn og kan vises", () => {
    render(<Button onClick={handleOnClick}>Button</Button>);
    const container = screen.queryByRole("button", {
      name: /button/i
    });
    expect(container).toBeInTheDocument();
  });
});
