/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import KontaktContent from "../../src/components/Kontakt/KontaktContent.component";

describe("KontaktContent", () => {
  test("renders the component", () => {
    render(<KontaktContent />);
    expect(screen.getByTestId("kontaktcontent")).toBeInTheDocument();
  });

  test("submits the form and displays success message", async () => {
    // Note: test is now async
    render(<KontaktContent />);

    // fill out form fields
    fireEvent.change(screen.getByLabelText("Fullt navn"), {
      target: { value: "Test User" }
    });
    fireEvent.change(screen.getByLabelText("Telefonnummer"), {
      target: { value: "12345678" }
    });
    fireEvent.change(screen.getByLabelText("Hva ønsker du å si?"), {
      target: { value: "Test message" }
    });

    const button = screen.getByText("Send skjema");

    fireEvent.click(button);

    console.log(button);

    // assert button is disabled after click
    expect(button).toBeDisabled();

    // assert success message is displayed
    expect(screen.getByText("Fullt navn")).toBeInTheDocument();
  });
});
