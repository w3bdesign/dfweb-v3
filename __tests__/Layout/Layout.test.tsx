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

jest.mock("react-dom");

describe("Layout komponent", () => {
  const title: TTitle = "Forside";

  test("rendrer uten å krasje", () => {
    render(
      <Layout title={title} links={linksmock}>
        <div>Test</div>
      </Layout>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  /*
  test("rendrer Header med korrekte props", () => {
    render(
      <Layout title={title} links={linksmock}>
        <div>Test</div>
      </Layout>
    );

    // Sjekk at hver lenke blir rendret
    linksmock.forEach((link) => {
      const linkElement = screen.queryByText(link.Text);
      expect(linkElement).toBeInTheDocument();
    });
  });
*/

  test("rendrer barn", () => {
    const testText = "Test barn";
    render(
      <Layout title={title} links={linksmock}>
        {testText}
      </Layout>
    );
    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  test("rendrer Footer", () => {
    render(
      <Layout title={title} links={linksmock}>
        <div>Test</div>
      </Layout>
    );
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
