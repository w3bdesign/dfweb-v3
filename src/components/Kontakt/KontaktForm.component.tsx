import { forwardRef } from "react";

import Button from "../UI/Button.component";

interface IKontaktFormProps {
  formRef: any;
  handleSubmit: any;
}

const KontaktForm = forwardRef(({ handleSubmit, formRef }: IKontaktFormProps) => (
  <>
    <h1 className="m-2 text-3xl text-center text-black">Kontakt</h1>
    <form
      className="text-center"
      ref={formRef}
      onSubmit={handleSubmit}
      method="POST"
      action="/api/form">
      <fieldset>
        <legend className="container m-4 mx-auto text-xl text-center w-full">
          Vennligst fyll ut kontaktskjemaet:{" "}
        </legend>
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
      </fieldset>
      <Button>Send skjema</Button>
    </form>
  </>
));

export default KontaktForm;
