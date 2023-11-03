/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { mockIntersectionObserver } from "jsdom-testing-mocks";

import ProsjekterSingleProject from "../../src/components/Prosjekter/ProsjekterSingleProject.component";

import projects from "../../__mocks__/projects.json";

mockIntersectionObserver();

jest.mock("react-dom");

describe("ProsjekterSingleProject", () => {
  beforeEach(() => {
    render(<ProsjekterSingleProject projects={projects} />);
  });

  it("ProsjekterSingleProject laster inn og kan vises", () => {
    const prosjektersingleproject = screen.getByTestId("prosjektgrid");
    expect(prosjektersingleproject).toBeInTheDocument();
  });

  it("Vi kan vise et enkelt prosjekt", () => {
    const prosjektersingleproject = screen.getByTestId("projectdiv");
    expect(prosjektersingleproject).toBeInTheDocument();
  });

  it("Vi kan vise bilde", async () => {
    const bilde = await screen.findByRole("img", {
      name: /statens vegvesen/i
    });
    expect(bilde).toBeInTheDocument();
  });
});
