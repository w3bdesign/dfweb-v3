/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";

import CVContent from "../../src/components/CV/CVContent.component";

jest.mock("react-pdf", () => {
  const Page = () => <div>cv</div>;

  return {
    pdfjs: {
      GlobalWorkerOptions: {
        workerSrc: "abc"
      }
    },
    Outline: null,
    Page,
    Document: ({ onLoadSuccess = (pdf = { numPages: 2 }) => pdf.numPages }) => {
      return <div>cv{onLoadSuccess({ numPages: 2 })}</div>;
    }
  };
});

describe("CVContent", () => {
  it("CVContent laster inn og kan vises", async () => {
    render(<CVContent />);
    const cvcontent = await screen.findByText(/cv/i);
    expect(cvcontent).toBeInTheDocument();
  });
});
