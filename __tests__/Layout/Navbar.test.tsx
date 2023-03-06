/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Navbar from "../../src/components/Layout/Navbar.component";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

//import { useRouter } from "next/router";

//jest.mock("next/router");

import linksmock from "../../__mocks__/links.json";

describe("Navbar", () => {
  it("Navbar laster inn og kan vises", () => {
    useRouter.mockImplementationOnce(() => ({
      query: { pathName: "/" }
    }));

    const activeLink = jest.fn((pathname, url) => {
      if (pathname === url) {
        return "navbar-link-active";
      }
      return "";
    });

    render(<Navbar links={linksmock} />);

    activeLink("test", "test");

    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();

    expect(activeLink.mock.calls.length).toBe(1);

    const activeClass = Navbar({ links: [{ Text: "Home", Url: "/", id: 1, External: false }] })
      .props.children[1].props.children[1].props.children[1].props.className;

    expect(activeClass).toEqual(
      "navbar-link eds-top-navigation-item inline-block text-xl text-white navbar-link-active"
    );
  });
});
