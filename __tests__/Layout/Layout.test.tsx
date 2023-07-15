import { render, screen } from "@testing-library/react";

import Layout, { TTitle } from "../../src/components/Layout/Layout.component";

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

describe("Layout component", () => {
  // Use a type-valid title
  const title: TTitle = "Forside";

  test("renders without crashing", () => {
    render(
      <Layout title={title} links={linksmock}>
        <div>Test</div>
      </Layout>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  /*
  test("renders Header with correct props", () => {
    render(
      <Layout title={title} links={linksmock}>
        <div>Test</div>
      </Layout>
    );
    
    const fullTitle = `${title} - Portefølje - Dfweb`;
    
    // Check that the correct title is set
    expect(document.title).toEqual(fullTitle);
    
    // Check that each link is rendered
    linksmock.forEach((link) => {
      const linkElement = screen.queryByText(link.Text);
      expect(linkElement).toBeInTheDocument();
    });
  });*/

  test("renders children", () => {
    const testText = "Test child";
    render(
      <Layout title={title} links={linksmock}>
        {testText}
      </Layout>
    );
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  test("renders Footer", () => {
    render(
      <Layout title={title} links={linksmock}>
        <div>Test</div>
      </Layout>
    );
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
