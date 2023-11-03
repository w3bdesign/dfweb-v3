/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Header from "../../src/components/Layout/Header.component";

import linksmock from "../../__mocks__/links.json";

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

jest.mock("react-dom");

describe("Header", () => {
  it("Header laster inn og kan vises", () => {
    render(<Header title="Forside" links={linksmock} />);
    const header = screen.getByRole("navigation");
    expect(header).toBeInTheDocument();
  });
});
