import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import KontaktForm from "./KontaktForm.component";

interface IEvent {
  preventDefault: () => void;
}

const KontaktContent = (): JSX.Element => {
  const formRef = useRef<HTMLFormElement>(null);
  const [serverResponse, setServerResponse] = useState<string>("");

  const handleSubmit = (event: IEvent) => {
    const EMAIL_API_KEY = process.env.NEXT_PUBLIC_EMAIL_API_KEY || "changeme";
    const TEMPLATE_KEY = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_KEY || "changeme";
    const SERVICE_KEY = process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY || "changeme";

    console.log("Form submit!")

    event.preventDefault();

    console.log(formRef.current)
    
    if (!formRef.current) return;

    console.log("Sender epost ...")




    emailjs.init(EMAIL_API_KEY);

    console.log(EMAIL_API_KEY)

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
    <main id="maincontent">
      <div className="mt-32 bg-graybg">
        <div className="px-4 p lg:px-0 xl:px-0 md:px-0">
          <div className="container mx-auto bg-white rounded shadow">
            <div className="p-4 mx-auto mt-4">
              <div className="p-4 text-lg rounded">
                {serverResponse ? (
                  <h3 className="m-12 text-3xl text-center text-green">{serverResponse}</h3>
                ) : (
                  <KontaktForm formRef={formRef} handleSubmit={handleSubmit} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div id="kontakt-filler" className="mt-36" />
      </div>
    </main>
  );
};

export default KontaktContent;
