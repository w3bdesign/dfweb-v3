/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import Navbar from "../../src/components/Layout/Navbar.component";

jest.mock("next/router", () => ({
  useRouter: jest.fn()
}));

describe("Navbar", () => {
  test("applies the active class to the active link", () => {
    useRouter.mockImplementation(() => ({
      pathname: "/about"
    }));

    const links = [
      { Text: "Home", Url: "/", id: 1, External: false },
      { Text: "About", Url: "/about", id: 2, External: false },
      { Text: "Blog", Url: "/blog", id: 3, External: false }
    ];

    const { getByText } = render(<Navbar links={links} />);

    const activeLink = getByText("About");
    expect(activeLink).toHaveClass("navbar-link-active");
  });

  test("does not apply the active class to non-active links", () => {
    useRouter.mockImplementation(() => ({
      pathname: "/about"
    }));

    const links = [
      { Text: "Home", Url: "/", id: 1, External: false },
      { Text: "Contact", Url: "/contact", id: 2, External: false },
      { Text: "Blog", Url: "/blog", id: 3, External: false }
    ];

    const { getByText } = render(<Navbar links={links} />);

    const nonActiveLink = getByText("Home");
    expect(nonActiveLink).not.toHaveClass("navbar-link-active");
  });
});
