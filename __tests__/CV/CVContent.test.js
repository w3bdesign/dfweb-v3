/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import CVContent from "../../src/components/CV/CVContent.component";

describe("CVContent", () => {
  it("CVContent laster inn og kan vises", () => {
    render(<CVContent />);
    const cvcontent = screen.getByText(/nøkkelkvalifikasjoner/i);
    expect(cvcontent).toBeInTheDocument();
  });
});
