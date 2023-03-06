/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Navbar from "../../src/components/Layout/Navbar.component";

const useRouter = jest.spyOn(require("next/router"), "useRouter");

import linksmock from "../../__mocks__/links.json";

describe("Navbar", () => {
  it("Navbar laster inn og kan vises", () => {
    useRouter.mockImplementationOnce(() => ({
      query: { pathName: "/" }
    }));

    render(<Navbar links={linksmock} />);

    const navbar = screen.getByRole("navigation");
    expect(navbar).toBeInTheDocument();
  });

  it("Link har active class", () => {
    useRouter.mockImplementationOnce(() => ({
      query: { pathName: "/" }
    }));

    render(<Navbar links={linksmock} />);

    const link = screen.getByRole("link", { name: /hjem/i });

    expect(link.className).toBe("navbar-link eds-top-navigation-item inline-block text-xl text-white ")

    console.log("Link classname: ", link.className);
  });
});
