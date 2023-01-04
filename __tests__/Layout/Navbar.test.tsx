/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Navbar from "../../src/components/Layout/Navbar.component";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

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

    render(<Navbar />);

    activeLink("test", "test");

    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();

    expect(activeLink.mock.calls.length).toBe(1);
  });
});
