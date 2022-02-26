/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import Footer from "../../src/components/Layout/Footer.component";

describe("Footer", () => {
  it("Footer laster inn og kan vises", () => {
    const { queryByTestId } = render(<Footer />);
    expect(queryByTestId("footer")).toBeTruthy();
  });
});
