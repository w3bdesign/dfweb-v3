/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";
import KontaktContent from "../../src/components/Kontakt/KontaktContent.component";

describe("KontaktContent", () => {
  test("renders the component", () => {
    render(<KontaktContent />);
    expect(screen.getByTestId("kontaktcontent")).toBeInTheDocument();
  });

  test("submits the form and displays success message", async () => {
    render(<KontaktContent />);

    // fill out form fields
    fireEvent.change(screen.getByLabelText("Fullt navn"), {
      target: { value: "Test User" }
    });
    fireEvent.change(screen.getByLabelText("Telefonnummer (i norskt format)"), {
      target: { value: "12345678" }
    });
    fireEvent.change(screen.getByLabelText("Hva ønsker du å si?"), {
      target: { value: "Test message" }
    });

    // submit form
    fireEvent.click(screen.getByText("Send skjema"));

    // assert success message is displayed
    expect(screen.getByText("Fullt navn")).toBeInTheDocument();
  });
});
