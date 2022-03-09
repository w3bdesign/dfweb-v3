/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import KontaktContent from "../../src/components/Kontakt/KontaktContent.component";

describe("KontaktContent", () => {
  beforeEach(() => {
    render(<KontaktContent />);
  });

  const setServerResponse = jest.fn();
  const useStateSpy = jest.spyOn(React, "serverResponse");
  useStateSpy.mockImplementation((serverResponse) => [serverResponse, setServerResponse]);

  it("KontaktContent laster inn og kan vises", () => {
    const kontaktcontent = screen.getByRole("heading", { name: /kontakt/i });
    expect(kontaktcontent).toBeInTheDocument();
  });

  it("Test at vi ikke kan sende et tomt skjema", () => {
    const sendskjema = screen.getByRole("button", { name: /send skjema/i });
    const firstname = screen.getByRole("textbox", { name: /fullt navn/i });
    userEvent.click(sendskjema);
    expect(firstname).toBeVisible();
  });

  it("Test at vi kan skrive i navn tekstboks", () => {
    const firstname = screen.getByRole("textbox", { name: /fullt navn/i });
    userEvent.clear(firstname);
    userEvent.type(firstname, "navn");
    expect(firstname).toHaveValue("navn");
  });

  it("Test at vi kan skrive i telefon tekstboks", () => {
    const telefon = screen.getByRole("textbox", { name: /telefonnummer \(i norskt format\)/i });
    userEvent.clear(telefon);
    userEvent.type(telefon, "telefon");
    expect(telefon).toHaveValue("telefon");
  });

  it("Test at vi kan skrive i hva ønsker du å si tekstboks", () => {
    const beskjed = screen.getByRole("textbox", { name: /hva ønsker du å si\?/i });
    userEvent.clear(beskjed);
    userEvent.type(beskjed, "beskjed");
    expect(beskjed).toHaveValue("beskjed");
  });
});
