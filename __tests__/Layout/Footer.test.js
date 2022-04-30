/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import Footer from "../../src/components/Layout/Footer.component";

describe("Footer", () => {
  it("Footer laster inn og kan vises", () => {
    render(<Footer />);
    const footer = screen.getByText(/copyright daniel/i);
    expect(footer).toBeInTheDocument();
  });
});
