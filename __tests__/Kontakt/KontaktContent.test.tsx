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

  test("submits the form and displays success message", () => {
    render(<KontaktContent />);

    // fill out form fields
    fireEvent.change(screen.getByLabelText("Fullt navn"), {
      target: { value: "Bruker" }
    });
    fireEvent.change(screen.getByLabelText("Telefonnummer"), {
      target: { value: "12345678" }
    });
    fireEvent.change(screen.getByLabelText("Hva ønsker du å si?"), {
      target: { value: "Message" }
    });

    const button = screen.getByText("Send skjema");

    fireEvent.click(button);

    // assert button is disabled after click
    expect(button).toBeDisabled();

    // assert success message is displayed
    expect(screen.getByText("Fullt navn")).toBeInTheDocument();
  });
});
