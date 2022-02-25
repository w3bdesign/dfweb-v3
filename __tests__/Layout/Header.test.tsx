/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";

import Header from "../../src/components/Layout/Header.component";

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

describe("Header", () => {
  it("Header laster inn og kan vises", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
