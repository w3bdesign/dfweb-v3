import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import Button from "../UI/Button.component";
import PageHeader from "../UI/PageHeader.component";
import InputField from "./InputField.component";

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
  const navnRef = useRef<HTMLInputElement>(null);
  const telefonRef = useRef<HTMLInputElement>(null);
  const tekstRef = useRef<HTMLTextAreaElement>(null);

  const [serverResponse, setServerResponse] = useState<string>("");

  const handleSubmit = (event: IEvent) => {
    const EMAIL_API_KEY = process.env.NEXT_PUBLIC_EMAIL_API_KEY || "changeme";
    const TEMPLATE_KEY = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY || "changeme";
    const SERVICE_KEY = process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY || "changeme";

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
                    className="text-center mt-6"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    method="POST"
                    action="/api/form">
                    <fieldset>
                      <legend className="text-center mx-auto text-xl mt-4 sr-only">
                        Kontaktskjema
                      </legend>
                      <InputField ref={navnRef} label="Fullt navn" htmlFor="fulltNavn" required />
                      <br />
                      <InputField
                        ref={telefonRef}
                        label="Telefonnummer"
                        htmlFor="telefonNummer"
                        required
                        pattern=".[0-9]{7}"
                      />
                      <br />
                      <InputField
                        ref={tekstRef}
                        type="textarea"
                        label="Hva ønsker du å si?"
                        htmlFor="textarea"
                        required
                      />
                      <br />
                    </fieldset>
                    <Button>Send skjema</Button>
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
