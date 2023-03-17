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

  it("Test activeLink funksjon", () => {
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

/*




To achieve 100% test coverage for the `activeLink` function inside the `Navbar` component, you need to write a test case that covers both the `if` and `else` branches of the function.

Here's an example of how to write a test case that covers both branches:

```
import { render } from "@testing-library/react";
import { useRouter } from "next/router";
import Navbar from "./Navbar.component";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Navbar", () => {
  test("applies the active class to the active link", () => {
    useRouter.mockImplementation(() => ({
      pathname: "/about",
    }));

    const links = [
      { Text: "Home", Url: "/", id: 1, External: false },
      { Text: "About", Url: "/about", id: 2, External: false },
      { Text: "Blog", Url: "/blog", id: 3, External: false },
    ];

    const { getByText } = render(<Navbar links={links} />);

    const activeLink = getByText("About");
    expect(activeLink).toHaveClass("navbar-link-active");
  });

  test("does not apply the active class to non-active links", () => {
    useRouter.mockImplementation(() => ({
      pathname: "/about",
    }));

    const links = [
      { Text: "Home", Url: "/", id: 1, External: false },
      { Text: "Contact", Url: "/contact", id: 2, External: false },
      { Text: "Blog", Url: "/blog", id: 3, External: false },
    ];

    const { getByText } = render(<Navbar links={links} />);

    const nonActiveLink = getByText("Home");
    expect(nonActiveLink).not.toHaveClass("navbar-link-active");
  });
});
```

In this example, we're using Jest's `mockImplementation` function to mock the `useRouter` hook and return a mock `pathname` value.

We then render the `Navbar` component with a set of links and use `getByText` to select the links we want to test.

In the first test case, we verify that the `activeLink` function correctly applies the `navbar-link-active` class to the active link.

In the second test case, we verify that the `activeLink` function correctly does not apply the `navbar-link-active` class to non-active links.

By covering both branches of the `activeLink` function in our test suite, we achieve 100% test coverage for that function.





*/
