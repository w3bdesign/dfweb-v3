/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import CVContent from "../../src/components/CV/CVContent.component";

describe("CVContent", () => {
  it("CVContent laster inn og kan vises", () => {
    render(<CVContent />);
    const cvcontent = screen.getByRole("heading", { name: /cv/i });
    expect(cvcontent).toBeInTheDocument();
  });

  /*
  it("PDF laster inn og kan vises", async () => {
    render(<CVContent />);
    const pdf = await screen.findByText(/nøkkelkvalifikasjoner/i);
    expect(pdf).toBeInTheDocument();
  });
  */
});
