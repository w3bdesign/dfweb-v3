/**
 * @jest-environment jsdom
 */

import Header from "../../src/components/Layout/Header.component";
import { render } from "@testing-library/react";

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
