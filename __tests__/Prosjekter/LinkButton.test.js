/*
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import LinkButton from "../../src/components/Prosjekter/LinkButton.component";

describe("LinkButton", () => {
  beforeEach(() => {
    render(<LinkButton urlgithub="urlgithub" name="name" text="Github" />);
  });

  it("LinkButton laster inn og kan vises", () => {
    const linkbutton = screen.getByRole("button", { name: /github/i });
    expect(linkbutton).toBeInTheDocument();
  });
});
