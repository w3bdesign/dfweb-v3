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
      asPath: ""
    };
  }
}));

describe("Forside", () => {
  test("Forside laster inn og kan vises", () => {
    const { home } = render(<Home />);
    expect(home).toMatchSnapshot();
  });
});
