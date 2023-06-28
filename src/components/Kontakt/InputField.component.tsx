import React, { forwardRef } from "react";

type CommonAttributes<T extends HTMLElement> = {
  inputName: string;
  label: string;
  htmlFor: string;
  isRequired?: boolean;
  type?: "input" | "textarea";
  inputPattern?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

type Props = CommonAttributes<HTMLInputElement> | CommonAttributes<HTMLTextAreaElement>;

type InputRef = HTMLInputElement | HTMLTextAreaElement;

/**
 * Renders an input field or a text area based on the `type` prop passed to it.
 * @param {Object} props - The props object.
 * @param {string} props.inputName - The name attribute of the input element or text area element.
 * @param {string} props.label - The label that appears above the input element or text area element.
 * @param {string} props.htmlFor - The id of the input element or text area element.
 * @param {boolean} [props.isRequired] - Whether the input element or text area element is required or not.
 * @param {('input'|'textarea')} [props.type='input'] - The type of the input element or text area element.
 * @param {string} [props.inputPattern] - The pattern attribute of the input element or text area element.
 * @param {React.RefObject<HTMLInputElement>|React.RefObject<HTMLTextAreaElement>} ref - The ref object.
 * @returns {JSX.Element} - The JSX element.
 */

const InputField = forwardRef<InputRef, Props>((props, ref) => {
  const { inputName, label, inputPattern, isRequired, htmlFor, type = "input" } = props;

  const sharedClasses =
    "cursor-pointer my-6 text-xl w-64 p-2 m-2 text-black border-gray-500 border rounded border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200";

  return (
    <label className="relative" htmlFor={htmlFor}>
      {type === "input" ? (
        <input
          name={inputName}
          ref={ref as React.Ref<HTMLInputElement>}
          id={htmlFor}
          type="text"
          placeholder={label}
          className={sharedClasses}
          required={isRequired}
          pattern={inputPattern}
        />
      ) : (
        <textarea
          name={inputName}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          id={htmlFor}
          placeholder={label}
          className={sharedClasses}
          required={isRequired}
        ></textarea>
      )}
      <span
        className={`cursor-pointer text-lg text-black text-opacity-80 absolute left-5 ${
          type === "textarea" ? "-top-[3.7rem]" : "top-0"
        } px-1 transition duration-200 input-text`}
      >
        {label}
      </span>
    </label>
  );
});

InputField.displayName = "InputField";

export default InputField;
