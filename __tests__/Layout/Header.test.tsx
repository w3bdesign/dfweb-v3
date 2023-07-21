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

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"), // use actual for all non-hook parts
  preload: () => {},
  preconnect: () => {},
  prefetchDNS: () => {}
}));

describe("Header", () => {
  it("Header laster inn og kan vises", () => {
    render(<Header title="Forside" links={linksmock} />);
    const header = screen.getByRole("navigation");
    expect(header).toBeInTheDocument();
  });
});
