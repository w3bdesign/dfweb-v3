/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import Navbar from "../../src/components/Layout/Navbar.component";

jest.mock("next/router", () => ({
  useRouter: jest.fn()
}));

jest.mock("react-dom");

const links = [
  { Text: "Home", Url: "/", id: 1, External: false },
  { Text: "About", Url: "/about", id: 2, External: false },
  { Text: "Blog", Url: "/blog", id: 3, External: false }
];

describe("Navbar", () => {
  test("Legger til active class", () => {
    useRouter.mockImplementation(() => ({
      pathname: "/about"
    }));

    const { getByText } = render(<Navbar links={links} />);

    const activeLink = getByText("About");
    expect(activeLink).toHaveClass(
      "hover:after:w-full after:transition-all after:bg-white after:bottom-[-0.45rem] after:block after:m-auto after:h-1 after:ease-in-out after:duration-500 inline-block text-xl text-white"
    );
  });

  test("Legger ikke til active class", () => {
    useRouter.mockImplementation(() => ({
      pathname: "/about"
    }));

    const { getByText } = render(<Navbar links={links} />);

    const nonActiveLink = getByText("Home");
    expect(nonActiveLink).not.toHaveClass("navbar-link-active");
  });
});
