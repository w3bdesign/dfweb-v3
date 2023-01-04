/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import ErrorContent from "../../src/components/Error/ErrorContent.component";

describe("Error", () => {
  it("ErrorContent laster inn og kan vises", () => {
    render(<ErrorContent text="Side ikke funnet" />);
    const error = screen.getByRole("heading", { name: /side ikke funnet/i });
    expect(error).toBeInTheDocument();
  });
});
