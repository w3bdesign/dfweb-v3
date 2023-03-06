/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Navbar from "../../src/components/Layout/Navbar.component";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

import linksmock from "../../__mocks__/links.json";

describe("Navbar", () => {
  beforeEach(() => {
    useRouter.mockImplementationOnce(() => ({
      query: { pathName: "/" }
    }));

    render(<Navbar links={linksmock} />);
  });

  it("Navbar laster inn og kan vises", () => {
    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  it("Link Hjem har navbar-link class", () => {
    const link = screen.getByRole("link", { name: /hjem/i });

    expect(link.className).toBe(
      "navbar-link eds-top-navigation-item inline-block text-xl text-white "
    );
  });

  it("Link Github har riktig klasse", () => {
    const github = screen.getByRole("link", { name: /github/i });

    expect(github.className).toBe("navbar-link inline-block text-xl text-white");
  });

  it("Test activeLink", () => {
    const activeLink = jest.fn((url: string, pathname: string) => {
      if (pathname === url) {
        return "navbar-link-active";
      }
      return "";
    });

    const url = "/home";
    const pathname = "/home";
    const expected = "navbar-link-active";

    const result = activeLink(url, pathname);

    expect(result).toEqual(expected);
  });
});
