/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

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
    render(<Header />);
    const header = screen.getByRole("navigation");
    expect(header).toBeInTheDocument();
  });
});
