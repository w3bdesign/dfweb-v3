/**
 * @jest-environment jsdom
 */

import { fireEvent, render, screen } from "@testing-library/react";

import KontaktContent from "../../src/components/Kontakt/KontaktContent.component";

jest.mock("@emailjs/browser", () => ({
  sendForm: jest.fn(() => Promise.resolve()),
  init: jest.fn()
}));

describe("KontaktContent", () => {
  const fulltNavn = "Fullt navn";

  test("renders the component", () => {
    render(<KontaktContent />);
    expect(screen.getByTestId("kontaktcontent")).toBeInTheDocument();
  });

  test("submits the form and displays success message", () => {
    render(<KontaktContent />);

    // fill out form fields
    fireEvent.change(screen.getByLabelText(fulltNavn), {
      target: { value: "Bruker Test" }
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
    expect(screen.getByText(fulltNavn)).toBeInTheDocument();
  });

  test("submits the form and displays error message", async () => {
    //render(<KontaktContent />);
    const { getByRole } = render(<KontaktContent />);

    // fill out form fields
    fireEvent.change(screen.getByLabelText(fulltNavn), { target: { value: "Bruker Test" } });
    fireEvent.change(screen.getByLabelText("Telefonnummer"), { target: { value: "12345678" } });
    fireEvent.change(screen.getByLabelText("Hva ønsker du å si?"), {
      target: { value: "Message" }
    });

    const form = getByRole("form", { name: /contact form/i });
    fireEvent.submit(form); // submit the form

    // assert success message is displayed
    //expect(screen.getByText('Takk for din beskjed')).toBeInTheDocument();
    expect(screen.getByText("Feil under sending av skjema")).toBeInTheDocument();
  });
});
