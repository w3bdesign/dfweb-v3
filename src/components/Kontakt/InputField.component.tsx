interface IInputProps {
  inputName: string;
  label: string;
  htmlFor: string;
  isRequired?: boolean;
  inputPattern?: string;
  type?: "input" | "textarea";
}

/**
 * Renders an input field component.
 *
 * @param {IInputProps} inputName - The name of the input.
 * @param {string} label - The label for the input.
 * @param {string} htmlFor - The id of the input.
 * @param {string} inputPattern - The pattern for the input.
 * @param {string} type - The type of input (defaults to "input").
 * @param {boolean} isRequired - Indicates if the input is required.
 * @return {JSX.Element} The input field component.
 */
const InputField = ({
  inputName,
  label,
  htmlFor,
  inputPattern,
  type = "input",
  isRequired
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
          className={sharedClasses}
        />
      ) : (
        <textarea
          name={inputName}
          id={htmlFor}
          placeholder={label}
          required={isRequired}
          className={sharedClasses}></textarea>
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
