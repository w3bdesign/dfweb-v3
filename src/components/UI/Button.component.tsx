import type { ReactNode } from "react";

type TProps = {
  children?: ReactNode;
  text?: string;
};

/**
 * Common button component used by several pages
 *
 * @param {Object} children Children passed into the button
 * @param {Object} text Text passed into the button
 */

function Button({ children, text }: TProps) {
  return (
    <button
      type="submit"
      className="p-4 m-4 text-white transition duration-500 ease-in-out bg-gray-800 rounded hover:shadow-outline hover:bg-gray-600"
    >
      {text}
      {children}
    </button>
  );
}

export default Button;
