import React, { FC, forwardRef, ForwardRefExoticComponent } from "react";

type InputRef =
  | ForwardRefExoticComponent<HTMLInputElement>
  | ForwardRefExoticComponent<HTMLTextAreaElement>;

type CommonAttributes<T extends HTMLElement> = {
  label: string;
  htmlFor: string;
  isRequired?: boolean;
  type?: "input" | "textarea";
  inputPattern?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

type Props = CommonAttributes<HTMLInputElement> | CommonAttributes<HTMLTextAreaElement>;

const InputField: FC<any> = forwardRef((props: Props, ref: any) => {
  const { label, inputPattern, isRequired, htmlFor, type = "input" } = props;

  const sharedClasses =
    "cursor-pointer my-6 text-xl w-64 p-2 m-2 text-black border-gray-500 border rounded border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200";

  return (
    <label className="relative" htmlFor={htmlFor}>
      {type === "input" ? (
        <input
          ref={ref}
          id={htmlFor}
          type="text"
          placeholder={label}
          className={sharedClasses}
          required={isRequired}
          pattern={inputPattern}
        />
      ) : (
        <textarea
          ref={ref}
          id={htmlFor}
          placeholder={label}
          className={sharedClasses}
          required={isRequired}></textarea>
      )}
      <span
        className={`cursor-pointer text-lg text-black text-opacity-80 absolute left-5 ${
          type === "textarea" ? "-top-[3.7rem]" : "top-0"
        } px-1 transition duration-200 input-text`}>
        {label}
      </span>
    </label>
  );
});

export default InputField;
