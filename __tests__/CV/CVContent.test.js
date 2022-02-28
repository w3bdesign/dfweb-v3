/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import CVContent from "../../src/components/CV/CVContent.component";

jest.mock("react-pdf", () => {
  const Page = () => <div>nøkkelkvalifikasjoner</div>;

  return {
    pdfjs: {
      GlobalWorkerOptions: {
        workerSrc: "abc"
      }
    },
    Outline: null,
    Page,
    Document: ({ onLoadSuccess = (pdf = { numPages: 2 }) => pdf.numPages }) => {
      return <div>nøkkelkvalifikasjoner{onLoadSuccess({ numPages: 2 })}</div>;
    }
  };
});

describe("CVContent", () => {
  it("CVContent laster inn og kan vises", () => {
    render(<CVContent />);
    const cvcontent = screen.getByRole("heading", { name: /cv/i });
    expect(cvcontent).toBeInTheDocument();
  });

  it("PDF laster inn og kan vises", async () => {
    render(<CVContent />);
    const pdf = await screen.findByText(/nøkkelkvalifikasjoner/i)
    expect(pdf).toBeInTheDocument();
  });


});
