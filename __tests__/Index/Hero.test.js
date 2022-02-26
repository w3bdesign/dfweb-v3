/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import Hero from "../../src/components/Index/Hero.component";

describe("Hero", () => {
  it("Hero laster inn og kan vises", () => {
    const { queryByTestId } = render(<Hero />);
    expect(queryByTestId("main-hero")).toBeTruthy();
  });
});
