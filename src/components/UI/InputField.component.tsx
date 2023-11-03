interface IInputProps {
  inputName: string;
  label: string;
  htmlFor: string;
  isRequired?: boolean;
  inputPattern?: string;
  title?: string;
  type?: "input" | "textarea";
}

/**
 * Renders an input field or textarea based on the `type` prop.
 *
 * @param {IInputProps} inputName - The name of the input field.
 * @param {string} label - The label for the input field.
 * @param {string} inputPattern - The regex pattern for input validation.
 * @param {boolean} isRequired - Determines if the input field is required.
 * @param {string} htmlFor - The ID of the associated label.
 * @param {string} title - The title attribute for the input field.
 * @param {string} [type=input] - The type of input field to render.
 * @return {JSX.Element} - The rendered input field or textarea.
 */
const InputField = ({
  inputName,
  label,
  inputPattern,
  isRequired,
  htmlFor,
  title,
  type = "input",
  ...props
}: IInputProps) => {
  const sharedClasses =
    "cursor-pointer my-6 text-xl w-64 p-2 m-2 text-black border-gray-500 border rounded border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200";

  return (
    <label className="relative" htmlFor={htmlFor}>
      {type === "input" ? (
        <input
          name={inputName}
          id={htmlFor}
          type="text"
          placeholder={label}
          required={isRequired}
          pattern={inputPattern}
          title={title}
          className={sharedClasses}
          {...props}
        />
      ) : (
        <textarea
          name={inputName}
          id={htmlFor}
          placeholder={label}
          className={sharedClasses}
          required={isRequired}
          {...props}
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
};

export default InputField;
