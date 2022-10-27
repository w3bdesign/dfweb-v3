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

    const activeLink = jest.fn((link) => {
      return "navbar-link-active";
    });

    render(<Navbar />);

    activeLink("test");

    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();

    expect(activeLink.mock.calls.length).toBe(1);
  });
});
