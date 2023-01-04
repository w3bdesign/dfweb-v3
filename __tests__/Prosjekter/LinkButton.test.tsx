/*
 * @jest-environment jsdom
 */

import { render, screen, waitFor } from "@testing-library/react";

import LinkButton from "../../src/components/Prosjekter/LinkButton.component";

describe("LinkButton", () => {
  beforeEach(() => {
    render(
      <LinkButton urlgithub="urlgithub" name="name" text="Github" url="https://www.github.com" />
    );
  });

  it("LinkButton laster inn og kan vises", () => {
    const linkbutton = screen.getByRole("button", { name: /github/i });
    expect(linkbutton).toBeInTheDocument();
  });

  it("Sjekk at standard url er /", async () => {
    await waitFor(() => expect(window.location.pathname).toBe("/"));
  });
});
