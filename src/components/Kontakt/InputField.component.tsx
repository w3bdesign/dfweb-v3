import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type CommonAttributes = {
  label: string;
  htmlFor: string;
  type?: "input" | "textarea";
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & CommonAttributes;
type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & CommonAttributes;

type Props = InputProps | TextareaProps;

const InputField: React.FC<Props> = ({ label, htmlFor, type = "input", ...props }) => {
  const sharedClasses =
    "cursor-pointer my-6 text-xl w-64 p-2 m-2 text-black border-gray-500 border rounded border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200";

  return (
    <label className="relative" htmlFor={htmlFor}>
      {type === "input" ? (
        <input id={htmlFor} type="text" placeholder={label} className={sharedClasses} {...props} />
      ) : (
        <textarea id={htmlFor} placeholder={label} className={sharedClasses} {...props}></textarea>
      )}
      <span
        className={`cursor-pointer text-lg text-black text-opacity-80 absolute left-5 ${
          type === "textarea" ? "-top-[3.7rem]" : "top-0"
        } px-1 transition duration-200 input-text`}>
        {label}
      </span>
    </label>
  );
};

export default InputField;
