/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Hamburger from "../../src/components/UI/Hamburger.component";

describe("Hamburger", () => {
  it("Hamburger laster inn og kan vises", () => {
    const { container } = render(<Hamburger />);
    expect(container).toMatchSnapshot();
  });
});
