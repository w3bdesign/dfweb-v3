import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import Button from "../UI/Button.component";
import PageHeader from "../UI/PageHeader.component";
import InputField from "../UI/InputField.component";

interface IEvent {
  preventDefault: () => void;
}

/**
 * Renders contact form. Uses EmailJS to send the emails.
 * @function KontaktContent
 * @returns {JSX.Element} - Rendered component
 */

const KontaktContent = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [serverResponse, setServerResponse] = useState<string>("");
  const [submitting, setIsSubmitting] = useState<boolean>(false);

  /**
   * Handles the form submission and sends an email using the provided API keys.
   *
   * @param {IEvent} event - The event object representing the form submission event.
   * @return {void} No return value.
   */
  const handleSubmit = (event: IEvent) => {
    const EMAIL_API_KEY = process.env.NEXT_PUBLIC_EMAIL_API_KEY ?? "changeme";
    const TEMPLATE_KEY = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY ?? "changeme";
    const SERVICE_KEY = process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY ?? "changeme";

    // Disable button
    setIsSubmitting(true);

    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    emailjs.init(EMAIL_API_KEY);
    emailjs.sendForm(SERVICE_KEY, TEMPLATE_KEY, formRef.current).then(
      () => {
        setServerResponse("Takk for din beskjed");
      },
      () => {
        setServerResponse("Feil under sending av skjema");
      }
    );
  };

  return (
    <main data-testid="kontaktcontent" id="maincontent">
      <div className="mt-32 bg-graybg">
        <PageHeader>Kontakt</PageHeader>
        <div className="px-4 p lg:px-0 xl:px-0 md:px-0">
          <div className="container mx-auto bg-white rounded shadow min-h-[31.25rem]">
            <div className="p-4 mx-auto mt-4">
              <div className="p-4 text-lg rounded">
                {serverResponse && (
                  <h3 className="m-6 h-64 text-2xl md:text-3xl text-center">{serverResponse}</h3>
                )}
                {!serverResponse && (
                  <form
                    id="contact-form"
                    className="text-center mt-6"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    method="POST"
                    action="/api/form"
                    aria-label="Contact Form"
                  >
                    <fieldset>
                      <legend className="text-center mx-auto text-xl mt-4 sr-only">
                        Kontaktskjema
                      </legend>
                      <InputField
                        inputName="navn"
                        label="Fullt navn"
                        htmlFor="navn"
                        inputPattern="[a-zA-ZæøåÆØÅ ]+"
                        title="Vennligst bruk norske bokstaver"
                        isRequired
                      />
                      <br />
                      <InputField
                        inputName="telefon"
                        label="Telefonnummer"
                        htmlFor="telefon"
                        isRequired
                        inputPattern=".[0-9]{7}"
                        title="Vennligst bruk bare tall"
                      />
                      <br />
                      <InputField
                        inputName="tekst"
                        type="textarea"
                        label="Hva ønsker du å si?"
                        htmlFor="tekst"
                        isRequired
                      />
                      <br />
                    </fieldset>
                    <Button disabled={submitting}>Send skjema</Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
        <div id="kontakt-filler" className="mt-0 lg:mt-40">
          &nbsp;
        </div>
      </div>
    </main>
  );
};

export default KontaktContent;
