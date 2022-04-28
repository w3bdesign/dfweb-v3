/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import KontaktContent from "../../src/components/Kontakt/KontaktContent.component";

describe("KontaktContent", () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(<KontaktContent />);
  });

  it("KontaktContent laster inn", () => {
    const kontaktcontent = screen.getByRole("heading", { name: /kontakt/i });
    expect(kontaktcontent).toBeInTheDocument();
  });

  it("KontaktContent laster inn og kan vises", () => {
    const kontaktcontent = screen.getByRole("heading", { name: /kontakt/i });
    expect(kontaktcontent).toBeVisible();
  });

  it("Test at vi ikke kan sende et tomt skjema", async () => {
    const sendskjema = screen.getByRole("button", { name: /send skjema/i });
    const firstname = screen.getByRole("textbox", { name: /fullt navn/i });

    await user.click(sendskjema);
    expect(firstname).toBeVisible();
  });

  it("Test at vi kan skrive i navn tekstboks", async () => {
    const firstname = screen.getByRole("textbox", { name: /fullt navn/i });
    await user.clear(firstname);
    await user.type(firstname, "navn");
    expect(firstname).toHaveValue("navn");
  });

  it("Test at vi kan skrive i telefon tekstboks", async () => {
    const telefon = screen.getByRole("textbox", { name: /telefonnummer \(i norskt format\)/i });
    await user.clear(telefon);
    await user.type(telefon, "telefon");
    expect(telefon).toHaveValue("telefon");
  });

  it("Test at vi kan skrive i hva ønsker du å si tekstboks", async () => {
    const beskjed = screen.getByRole("textbox", { name: /hva ønsker du å si\?/i });
    await user.clear(beskjed);
    await user.type(beskjed, "beskjed");
    expect(beskjed).toHaveValue("beskjed");
  });
});
