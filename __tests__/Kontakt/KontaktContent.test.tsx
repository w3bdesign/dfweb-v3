/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen, act } from "@testing-library/react";

import KontaktContent from "../../src/components/Kontakt/KontaktContent.component";

import emailjs from "@emailjs/browser";

jest.mock("@emailjs/browser", () => ({
  sendForm: jest.fn(() => Promise.resolve()),
  init: jest.fn()
}));

describe("KontaktContent", () => {
  const fulltNavn = "Fullt navn";
  const telefonNummer = "Telefonnummer";
  const hvaOnskerDu = "Hva ønsker du å si?";

  test("renders the component", () => {
    render(<KontaktContent />);
    expect(screen.getByTestId("kontaktcontent")).toBeInTheDocument();
  });

  test("submits the form and disables button", async () => {
    render(<KontaktContent />);

    // make emailjs.sendForm return a rejected promise

    emailjs.sendForm.mockImplementation(() => Promise.reject(new Error("Error message")));

    // fill out form fields
    fireEvent.change(screen.getByLabelText(fulltNavn), {
      target: { value: "Bruker Test" }
    });
    fireEvent.change(screen.getByLabelText(telefonNummer), {
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
    expect(screen.getByText(fulltNavn)).toBeInTheDocument();

    // Wait for promises to resolve
    await act(() => Promise.resolve());

    // assert success message is displayed
    const errorMessage = screen.getByText(/Feil under sending av skjema/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("submits the form and displays error message", async () => {
    const { getByRole } = render(<KontaktContent />);

    // fill out form fields
    fireEvent.change(screen.getByLabelText(fulltNavn), { target: { value: "Bruker Test" } });
    fireEvent.change(screen.getByLabelText(telefonNummer), { target: { value: "12345678" } });
    fireEvent.change(screen.getByLabelText(hvaOnskerDu), { target: { value: "Message" } });

    const form = getByRole("form", { name: /contact form/i });
    fireEvent.submit(form); // submit the form

    // Wait for promises to resolve
    await act(() => Promise.resolve()); // Proposed code to remove warnings

    // assert success message is displayed

    expect(screen.getByText("Feil under sending av skjema")).toBeInTheDocument();
  });
});
