import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha
} from "react-simple-captcha";

import Button from "../UI/Button.component";
import PageHeader from "../UI/PageHeader.component";

interface IEvent {
  preventDefault: () => void;
}

/**
 * Renders contact form. Uses EmailJS to send the emails.
 * @function KontaktContent
 * @returns {JSX.Element} - Rendered component
 */

const KontaktContent = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const [serverResponse, setServerResponse] = useState<string>("");
  const captchaRef = useRef<any>(null);

  const [captchaError, setcaptchaError] = useState<string>();

  useEffect(() => loadCaptchaEnginge(3), []);

  const handleCaptchaSubmit = () => {
    const captchaValue = captchaRef.current.value;

    if (validateCaptcha(captchaValue) === true) {
      return true;
    }
    setcaptchaError("Feil verdi i CAPTCHA");
    return false;
  };

  const handleSubmit = (event: IEvent) => {
    const EMAIL_API_KEY = process.env.NEXT_PUBLIC_EMAIL_API_KEY || "changeme";
    const TEMPLATE_KEY = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY || "changeme";
    const SERVICE_KEY = process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY || "changeme";

    event.preventDefault();
    if (!formRef.current) return;
    if (handleCaptchaSubmit() === true) {
      emailjs.init(EMAIL_API_KEY);
      emailjs.sendForm(SERVICE_KEY, TEMPLATE_KEY, formRef.current).then(
        () => {
          setServerResponse("Takk for din beskjed");
        },
        () => {
          setServerResponse("Feil under sending av skjema");
        }
      );
    }
  };

  return (
    <main id="maincontent">
      <div className="mt-32 bg-graybg">
        <PageHeader>Kontakt</PageHeader>
        <div className="px-4 p lg:px-0 xl:px-0 md:px-0">
          <div className="container mx-auto bg-white rounded shadow">
            <div className="p-4 mx-auto mt-4">
              <div className="p-4 text-lg rounded">
                {serverResponse && (
                  <h3 className="m-12 text-3xl text-center text-green">{serverResponse}</h3>
                )}
                {!serverResponse && (
                  <form
                    className="text-center mt-6"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    method="POST"
                    action="/api/form">
                    <fieldset>
                      <label htmlFor="navn" className="text-black">
                        Fullt navn
                        <br />
                        <input
                          className="w-64 p-2 m-2 placeholder-black transition duration-500 ease-in-out border border-gray-500 rounded focus:shadow-outline focus:scale-x-110 hover:bg-gray-200 transform-gpu"
                          id="navn"
                          name="navn"
                          type="text"
                          required
                          aria-required
                        />
                      </label>
                      <br />
                      <label className="text-black" htmlFor="phone">
                        Telefonnummer (i norskt format)
                        <br />
                        <input
                          className="w-64 p-2 m-2 placeholder-black transition duration-500 ease-in-out border border-gray-500 rounded focus:scale-x-110 focus:shadow-outline hover:bg-gray-200 transform-gpu"
                          id="phone"
                          name="telefon"
                          type="text"
                          required
                          aria-required
                          pattern=".[0-9]{7}"
                        />
                      </label>
                      <br />
                      <label className="text-black" htmlFor="textarea">
                        Hva ønsker du å si?
                        <br />
                        <textarea
                          className="w-64 p-2 m-2 placeholder-black transition duration-500 ease-in-out border border-gray-500 rounded focus:shadow-outline focus:scale-x-110 hover:bg-gray-200 transform-gpu"
                          name="tekst"
                          id="textarea"
                          required
                          aria-required
                        />
                      </label>
                      <br />
                      <label className="text-black" htmlFor="captcha">
                        Skriv inn CAPTCHA nedenfor:
                        <br />
                        <input
                          className="w-64 p-2 m-2 placeholder-black transition duration-500 ease-in-out border border-gray-500 rounded focus:scale-x-110 focus:shadow-outline hover:bg-gray-200 transform-gpu"
                          id="captcha"
                          name="captcha"
                          ref={captchaRef}
                          type="text"
                          required
                          aria-required
                        />
                        {captchaError && (
                          <>
                            <br />
                            <span className="text-red-500 text-xl m-6">{captchaError}</span>
                            <br />
                            <br />
                          </>
                        )}
                      </label>
                    </fieldset>
                    <div className="flex justify-center">
                      <LoadCanvasTemplateNoReload />
                    </div>
                    <Button>Send skjema</Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
        <div id="kontakt-filler" className="mt-40" />
      </div>
    </main>
  );
};

export default KontaktContent;
