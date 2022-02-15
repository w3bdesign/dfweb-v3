/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";

import Home from "../src/pages/index";

jest.mock("next/router", () => ({
  useRouter() {
      return {
          route: "/",
          pathname: "",
          query: "",
          asPath: "",
      };
  },
}));

describe("Mobile menu", () => {
  it("Expect HamburgerButton toBeInTheDocument", () => {
    const { getByTestId } = render(<Home />);
    const HamburgerButton = getByTestId("hamburger");
    expect(HamburgerButton).toBeInTheDocument();
  });
});
