import React, {
  FC,
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  LegacyRef
} from "react";

type InputRef = LegacyRef<HTMLInputElement> | LegacyRef<HTMLTextAreaElement> | any;

type CommonAttributes = {
  ref?: InputRef;
  label: string;
  htmlFor: string;
  required?: boolean;
  type?: "input" | "textarea";
};

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  CommonAttributes;
type TextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  CommonAttributes;

type Props = InputProps | TextareaProps;

const InputField: FC<CommonAttributes> = forwardRef((props: Props) => {
  const { label, required, ref, htmlFor, type = "input", ...rest } = props;

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
          required
          {...rest}
        />
      ) : (
        <textarea
          ref={ref}
          id={htmlFor}
          placeholder={label}
          className={sharedClasses}
          required
          {...rest}></textarea>
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
